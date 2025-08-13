import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { 
  User, 
  Calendar, 
  Gift, 
  Settings, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Star,
  Share2,
  Award
} from 'lucide-react';

const Dashboard = () => {
  const { user, profile, signOut } = useAuth();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [referralStats, setReferralStats] = useState({
    totalReferred: 0,
    successfulReferrals: 0,
    points: 0,
    referralCode: profile?.referral_code || ''
  });

  useEffect(() => {
    if (profile) {
      setReferralStats(prev => ({
        ...prev,
        points: profile.points || 0,
        referralCode: profile.referral_code || ''
      }));
    }
  }, [profile]);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Mi Cuenta - OneDental Zaragoza</title>
        <meta name="description" content="Panel de paciente - OneDental Zaragoza" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm border mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      ¡Hola, {profile.full_name || 'Paciente'}!
                    </h1>
                    <p className="text-gray-600">Bienvenido a tu panel personal de OneDental</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline" className="px-3 py-1">
                    {referralStats.points} puntos
                  </Badge>
                  <Button variant="outline" onClick={handleSignOut}>
                    Cerrar Sesión
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Reservar Cita</span>
                </CardTitle>
                <CardDescription>
                  Agenda tu próxima consulta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/reservar-cita">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Nueva Cita
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gift className="w-5 h-5 text-green-600" />
                  <span>Programa de Referidos</span>
                </CardTitle>
                <CardDescription>
                  Invita amigos y gana puntos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/programa-referidos">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Ver Referidos
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span>Contacto</span>
                </CardTitle>
                <CardDescription>
                  Habla con nosotros
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:976527761">Llamar Ahora</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Panel */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="appointments" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="appointments">Mis Citas</TabsTrigger>
                  <TabsTrigger value="profile">Perfil</TabsTrigger>
                  <TabsTrigger value="referrals">Referidos</TabsTrigger>
                </TabsList>
                
                <TabsContent value="appointments" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Próximas Citas</CardTitle>
                      <CardDescription>
                        Tus citas programadas en OneDental
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {appointments.length === 0 ? (
                        <div className="text-center py-8">
                          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-500 mb-4">No tienes citas programadas</p>
                          <Link to="/reservar-cita">
                            <Button>Reservar Mi Primera Cita</Button>
                          </Link>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {/* Appointments will be loaded from database */}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="profile" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Información Personal</CardTitle>
                      <CardDescription>
                        Gestiona tu información de contacto
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700">Nombre completo</label>
                          <p className="text-gray-900 mt-1">{profile.full_name || 'No especificado'}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">Correo electrónico</label>
                          <p className="text-gray-900 mt-1">{profile.email}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">Teléfono</label>
                          <p className="text-gray-900 mt-1">{profile.phone || 'No especificado'}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">Fecha de nacimiento</label>
                          <p className="text-gray-900 mt-1">{profile.date_of_birth || 'No especificado'}</p>
                        </div>
                      </div>
                      <Button className="mt-4">
                        <Settings className="w-4 h-4 mr-2" />
                        Editar Perfil
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="referrals" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mi Código de Referido</CardTitle>
                      <CardDescription>
                        Comparte tu código y gana puntos por cada amigo que se una
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-4">
                        <code className="bg-gray-100 px-3 py-2 rounded-md text-lg font-mono">
                          {referralStats.referralCode}
                        </code>
                        <Button size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-blue-600">{referralStats.totalReferred}</p>
                          <p className="text-sm text-gray-600">Invitados</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-600">{referralStats.successfulReferrals}</p>
                          <p className="text-sm text-gray-600">Exitosos</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-purple-600">{referralStats.points}</p>
                          <p className="text-sm text-gray-600">Puntos</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span>Nuestra Clínica</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium">OneDental Zaragoza</p>
                      <p className="text-sm text-gray-600">Calle de Pablo Neruda, 17</p>
                      <p className="text-sm text-gray-600">50018 Zaragoza</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">976 527 761</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">info@onedental.es</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>Horarios</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lunes</span>
                    <span>9:00-17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Martes</span>
                    <span>9:00-13:30, 15:30-21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Miércoles</span>
                    <span>9:00-17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jueves</span>
                    <span>9:00-13:30, 15:30-20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Viernes</span>
                    <span>9:00-13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="text-red-600">Cerrado</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="text-red-600">Cerrado</span>
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

export default Dashboard;