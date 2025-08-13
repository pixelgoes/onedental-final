import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { 
  Gift,
  Share2,
  CheckCircle,
  Star,
  Award,
  Crown,
  Trophy,
  Copy,
  Mail,
  MessageCircle,
  Users,
  Heart,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';

interface ReferralData {
  totalReferred: number;
  successfulReferrals: number;
  pendingReferrals: number;
  points: number;
  referralCode: string;
  level: string;
}

interface Reward {
  id: string;
  title: string;
  description: string;
  pointsRequired: number;
  value: string;
  available: boolean;
}

const ProgramaReferidos = () => {
  const { user, profile } = useAuth();
  const [referralData, setReferralData] = useState<ReferralData>({
    totalReferred: 0,
    successfulReferrals: 0,
    pendingReferrals: 0,
    points: profile?.points || 0,
    referralCode: profile?.referral_code || '',
    level: 'Bronze'
  });
  const [referralEmail, setReferralEmail] = useState('');
  const [referralName, setReferralName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [referralHistory, setReferralHistory] = useState<any[]>([]);

  const rewards: Reward[] = [
    {
      id: '1',
      title: 'Limpieza Dental Gratuita',
      description: 'Una sesión de limpieza e higiene dental profesional',
      pointsRequired: 100,
      value: '80€',
      available: (profile?.points || 0) >= 100
    },
    {
      id: '2',
      title: 'Blanqueamiento Dental 20% Dto',
      description: 'Descuento del 20% en blanqueamiento profesional',
      pointsRequired: 200,
      value: '60€',
      available: (profile?.points || 0) >= 200
    },
    {
      id: '3',
      title: 'Consulta DSD Gratuita',
      description: 'Análisis completo Digital Smile Design sin coste',
      pointsRequired: 300,
      value: '150€',
      available: (profile?.points || 0) >= 300
    },
    {
      id: '4',
      title: 'Carillas - 15% Descuento',
      description: 'Descuento del 15% en tratamiento de carillas',
      pointsRequired: 500,
      value: '200€',
      available: (profile?.points || 0) >= 500
    }
  ];

  useEffect(() => {
    if (user) {
      loadReferralData();
    }
  }, [user]);

  const loadReferralData = async () => {
    if (!user) return;
    
    try {
      // Load referral statistics from Supabase
      const { data: referrals } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id);
      
      if (referrals) {
        const successful = referrals.filter(r => r.status === 'converted').length;
        const pending = referrals.filter(r => r.status === 'sent').length;
        
        setReferralData(prev => ({
          ...prev,
          totalReferred: referrals.length,
          successfulReferrals: successful,
          pendingReferrals: pending
        }));
        
        setReferralHistory(referrals);
      }
    } catch (error) {
      console.error('Error loading referral data:', error);
    }
  };

  const sendReferral = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !referralEmail || !referralName) return;
    
    setLoading(true);
    setMessage({ type: '', text: '' });
    
    try {
      // Insert referral into database
      const { error } = await supabase
        .from('referrals')
        .insert({
          referrer_id: user.id,
          referral_code: referralData.referralCode,
          referred_email: referralEmail,
          referred_name: referralName,
          status: 'sent',
          points_earned: 0
        });
      
      if (error) throw error;
      
      // Update points for sending referral
      const newPoints = (profile?.points || 0) + 10;
      await supabase
        .from('profiles')
        .update({ points: newPoints })
        .eq('user_id', user.id);
      
      setMessage({ 
        type: 'success', 
        text: '¡Referido enviado con éxito! Has ganado 10 puntos.' 
      });
      
      setReferralEmail('');
      setReferralName('');
      loadReferralData();
      
    } catch (error: any) {
      setMessage({ 
        type: 'error', 
        text: 'Error al enviar el referido. Inténtalo de nuevo.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralData.referralCode);
    setMessage({ type: 'success', text: 'Código copiado al portapapeles' });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const shareReferralLink = () => {
    const referralLink = `${window.location.origin}/register?ref=${referralData.referralCode}`;
    navigator.clipboard.writeText(referralLink);
    setMessage({ type: 'success', text: 'Link de referido copiado al portapapeles' });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Gift className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <CardTitle>Programa de Referidos</CardTitle>
            <CardDescription>
              Inicia sesión para acceder a tu programa de referidos personalizado
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild className="w-full">
              <a href="/login">Iniciar Sesión</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Programa de Referidos - OneDental Zaragoza</title>
        <meta name="description" content="Invita a tus amigos a OneDental y gana puntos canjeables por tratamientos dentales" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Gift className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Programa de Referidos OneDental
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Invita a tus amigos y familiares y gana puntos por cada persona que se una a nuestra familia
            </p>
          </div>

          {/* Alert Messages */}
          {message.text && (
            <Alert className={`mb-6 max-w-2xl mx-auto ${
              message.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
            }`}>
              <AlertDescription className={`${
                message.type === 'success' ? 'text-green-800' : 'text-red-800'
              }`}>
                {message.text}
              </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Panel */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Resumen</TabsTrigger>
                  <TabsTrigger value="invite">Invitar</TabsTrigger>
                  <TabsTrigger value="history">Historial</TabsTrigger>
                  <TabsTrigger value="rewards">Recompensas</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                      <CardContent className="p-6 text-center">
                        <Users className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-2xl font-bold">{referralData.totalReferred}</div>
                        <div className="text-sm opacity-90">Total Referidos</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                      <CardContent className="p-6 text-center">
                        <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-2xl font-bold">{referralData.successfulReferrals}</div>
                        <div className="text-sm opacity-90">Exitosos</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                      <CardContent className="p-6 text-center">
                        <Star className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-2xl font-bold">{referralData.points}</div>
                        <div className="text-sm opacity-90">Puntos</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                      <CardContent className="p-6 text-center">
                        <Trophy className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-2xl font-bold">{referralData.level}</div>
                        <div className="text-sm opacity-90">Nivel</div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tu Código de Referido</CardTitle>
                      <CardDescription>
                        Comparte este código con tus amigos para que puedan registrarse
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                            <div className="text-2xl font-mono font-bold text-purple-600 mb-2">
                              {referralData.referralCode}
                            </div>
                            <div className="text-sm text-gray-600">
                              Tu código personal de referidos
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button onClick={copyReferralCode} size="sm">
                            <Copy className="w-4 h-4 mr-2" />
                            Copiar Código
                          </Button>
                          <Button onClick={shareReferralLink} size="sm" variant="outline">
                            <Share2 className="w-4 h-4 mr-2" />
                            Copiar Link
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Invite Tab */}
                <TabsContent value="invite">
                  <Card>
                    <CardHeader>
                      <CardTitle>Invitar a un Amigo</CardTitle>
                      <CardDescription>
                        Envía una invitación personalizada y gana 10 puntos inmediatamente
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={sendReferral} className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Nombre del amigo
                            </label>
                            <Input
                              placeholder="Nombre completo"
                              value={referralName}
                              onChange={(e) => setReferralName(e.target.value)}
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Correo electrónico
                            </label>
                            <Input
                              type="email"
                              placeholder="amigo@ejemplo.com"
                              value={referralEmail}
                              onChange={(e) => setReferralEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-purple-600 hover:bg-purple-700"
                          disabled={loading}
                        >
                          {loading ? 'Enviando...' : 'Enviar Invitación (+10 puntos)'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* History Tab */}
                <TabsContent value="history">
                  <Card>
                    <CardHeader>
                      <CardTitle>Historial de Referidos</CardTitle>
                      <CardDescription>
                        Seguimiento de todas tus invitaciones enviadas
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {referralHistory.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p>Aún no has enviado ningún referido</p>
                          <p className="text-sm">¡Invita a tus amigos para empezar a ganar puntos!</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {referralHistory.map((referral, index) => (
                            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                              <div>
                                <div className="font-medium">{referral.referred_name}</div>
                                <div className="text-sm text-gray-500">{referral.referred_email}</div>
                                <div className="text-xs text-gray-400">
                                  {new Date(referral.date_sent).toLocaleDateString('es-ES')}
                                </div>
                              </div>
                              <div className="text-right">
                                <Badge 
                                  variant={referral.status === 'converted' ? 'default' : 'secondary'}
                                  className={`${
                                    referral.status === 'converted' ? 'bg-green-500' :
                                    referral.status === 'registered' ? 'bg-yellow-500' : 'bg-gray-500'
                                  }`}
                                >
                                  {referral.status === 'converted' ? 'Convertido' :
                                   referral.status === 'registered' ? 'Registrado' : 'Enviado'}
                                </Badge>
                                <div className="text-sm text-gray-500 mt-1">
                                  +{referral.points_earned || 10} puntos
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Rewards Tab */}
                <TabsContent value="rewards">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {rewards.map((reward) => (
                      <Card key={reward.id} className={`relative overflow-hidden ${
                        reward.available ? 'border-green-200 bg-green-50' : 'border-gray-200'
                      }`}>
                        {reward.available && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-green-600">Disponible</Badge>
                          </div>
                        )}
                        
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              reward.available ? 'bg-green-500' : 'bg-gray-400'
                            }`}>
                              <Gift className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{reward.title}</CardTitle>
                              <div className="text-sm text-purple-600 font-medium">
                                Valor: {reward.value}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <p className="text-gray-600 mb-4">{reward.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm font-medium">
                                {reward.pointsRequired} puntos
                              </span>
                            </div>
                            
                            <Button 
                              size="sm" 
                              disabled={!reward.available}
                              className={reward.available ? 'bg-green-600 hover:bg-green-700' : ''}
                            >
                              {reward.available ? 'Canjear' : `Faltan ${reward.pointsRequired - (profile?.points || 0)} puntos`}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-6 h-6" />
                    <span>¿Cómo Funciona?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <div className="font-medium">Invita a tus amigos</div>
                      <div className="text-sm opacity-90">Comparte tu código personal</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <div className="font-medium">Ellos se registran</div>
                      <div className="text-sm opacity-90">Usando tu código de referido</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <div className="font-medium">Ganas puntos</div>
                      <div className="text-sm opacity-90">Y canjeas por tratamientos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-6 h-6 text-blue-600" />
                    <span>Sistema de Puntos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Por invitar</span>
                    <Badge>+10 puntos</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Por registro exitoso</span>
                    <Badge>+50 puntos</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Por primera cita</span>
                    <Badge>+100 puntos</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramaReferidos;