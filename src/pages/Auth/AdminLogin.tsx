import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Label } from '../../components/ui/label';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Mail, Lock, Eye, EyeOff, Shield } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signIn, user, profile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && profile?.role === 'admin') {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [user, profile, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signIn(email, password);
      // Navigation will be handled by useEffect once user state updates
    } catch (err: any) {
      if (err.message.includes('Invalid login credentials')) {
        setError('Credenciales incorrectas. Solo el personal autorizado puede acceder.');
      } else {
        setError('Error de acceso. Contacte con el administrador del sistema.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Acceso Administrador - OneDental Zaragoza</title>
        <meta name="description" content="Acceso exclusivo para personal de OneDental Zaragoza" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md border-red-200">
          <CardHeader className="text-center">
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-red-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Acceso Administrador</CardTitle>
            <CardDescription className="text-red-600">Solo para personal autorizado de OneDental</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
                <p className="font-semibold">Acceso Restringido</p>
                <p>Esta área está reservada únicamente para el personal de la clínica OneDental.</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="admin-email">Correo electrónico corporativo</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="admin-email"
                    type="email"
                    placeholder="admin@onedental.es"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="admin-password">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña de administrador"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700"
                disabled={loading}
              >
                {loading ? 'Verificando acceso...' : 'Acceder al Sistema'}
              </Button>
            </form>
            
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-gray-600">
                <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                  ← Volver al login de pacientes
                </Link>
              </p>
              <p className="text-xs text-gray-500">
                Si tienes problemas de acceso, contacta con el administrador del sistema.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminLogin;
