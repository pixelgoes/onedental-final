import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Textarea } from '../../components/ui/textarea';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle, Star } from 'lucide-react';

interface AppointmentForm {
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  serviceType: string;
  appointmentDate: string;
  appointmentTime: string;
  notes: string;
}

const SistemaCitas = () => {
  const { user, profile } = useAuth();
  const [formData, setFormData] = useState<AppointmentForm>({
    patientName: profile?.full_name || '',
    patientEmail: profile?.email || '',
    patientPhone: profile?.phone || '',
    serviceType: '',
    appointmentDate: '',
    appointmentTime: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [services, setServices] = useState<any[]>([]);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '15:30', '16:00', '16:30', '17:00',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'
  ];

  useEffect(() => {
    loadServices();
    if (profile) {
      setFormData(prev => ({
        ...prev,
        patientName: profile.full_name || '',
        patientEmail: profile.email || '',
        patientPhone: profile.phone || ''
      }));
    }
  }, [profile]);

  useEffect(() => {
    if (formData.appointmentDate) {
      loadAvailableSlots(formData.appointmentDate);
    }
  }, [formData.appointmentDate]);

  const loadServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (!error && data) {
        setServices(data);
      } else {
        // Fallback to local services if database is not available
        const fallbackServices = [
          { id: '1', name: 'Consulta General', category: 'Odontología General' },
          { id: '2', name: 'Digital Smile Design', category: 'Estética Dental' },
          { id: '3', name: 'Implantes Dentales', category: 'Implantología' },
          { id: '4', name: 'Carillas de Porcelana', category: 'Estética Dental' },
          { id: '5', name: 'Blanqueamiento Dental', category: 'Estética Dental' },
          { id: '6', name: 'Ortodoncia', category: 'Ortodoncia' },
          { id: '7', name: 'Ortodoncia Invisible', category: 'Ortodoncia' },
          { id: '8', name: 'Limpieza Dental', category: 'Odontología General' },
          { id: '9', name: 'Endodoncia', category: 'Odontología General' },
          { id: '10', name: 'Periodoncia', category: 'Odontología General' }
        ];
        setServices(fallbackServices);
      }
    } catch (error) {
      console.error('Error loading services:', error);
    }
  };

  const loadAvailableSlots = async (date: string) => {
    try {
      // Get existing appointments for the selected date
      const { data: appointments } = await supabase
        .from('appointments')
        .select('appointment_time')
        .eq('appointment_date', date)
        .eq('status', 'confirmed');

      const bookedSlots = appointments?.map(apt => apt.appointment_time) || [];
      const available = timeSlots.filter(slot => !bookedSlots.includes(slot));
      setAvailableSlots(available);
    } catch (error) {
      console.error('Error loading available slots:', error);
      setAvailableSlots(timeSlots); // Show all slots if there's an error
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.patientName || !formData.patientEmail || !formData.patientPhone) {
      setMessage({ type: 'error', text: 'Por favor, completa todos los campos obligatorios.' });
      return false;
    }
    if (!formData.serviceType) {
      setMessage({ type: 'error', text: 'Por favor, selecciona un tipo de servicio.' });
      return false;
    }
    if (!formData.appointmentDate || !formData.appointmentTime) {
      setMessage({ type: 'error', text: 'Por favor, selecciona fecha y hora para la cita.' });
      return false;
    }
    const selectedDate = new Date(formData.appointmentDate);
    const today = new Date();
    if (selectedDate < today) {
      setMessage({ type: 'error', text: 'No puedes reservar citas en fechas pasadas.' });
      return false;
    }
    return true;
  };

  const submitAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const appointmentData = {
        patient_id: user?.id || null,
        patient_name: formData.patientName,
        patient_email: formData.patientEmail,
        patient_phone: formData.patientPhone,
        service_type: formData.serviceType,
        appointment_date: formData.appointmentDate,
        appointment_time: formData.appointmentTime,
        notes: formData.notes,
        status: 'pending'
      };

      const { error } = await supabase
        .from('appointments')
        .insert(appointmentData);

      if (error) throw error;

      setMessage({ 
        type: 'success', 
        text: '¡Cita reservada con éxito! Te contactaremos pronto para confirmar los detalles.' 
      });
      
      // Reset form
      setFormData({
        patientName: profile?.full_name || '',
        patientEmail: profile?.email || '',
        patientPhone: profile?.phone || '',
        serviceType: '',
        appointmentDate: '',
        appointmentTime: '',
        notes: ''
      });

      // Send notification (placeholder for now)
      // TODO: Implement email notification via edge function
      
    } catch (error: any) {
      console.error('Error booking appointment:', error);
      setMessage({ 
        type: 'error', 
        text: 'Error al reservar la cita. Por favor, inténtalo de nuevo o llámanos directamente.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getTime() + (90 * 24 * 60 * 60 * 1000)); // 90 days from now
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <>
      <Helmet>
        <title>Reservar Cita - OneDental Zaragoza</title>
        <meta name="description" content="Reserva tu cita online en OneDental Zaragoza. Sistema de reservas 24/7 para todos nuestros servicios dentales." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Reservar Cita Online
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Programa tu visita de manera rápida y sencilla. Disponible las 24 horas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-6 h-6 text-blue-600" />
                    <span>Información de la Cita</span>
                  </CardTitle>
                  <CardDescription>
                    Completa todos los campos para reservar tu cita
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {message.text && (
                    <Alert className={`mb-6 ${
                      message.type === 'success' 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-red-200 bg-red-50'
                    }`}>
                      <AlertDescription className={`${
                        message.type === 'success' ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {message.text}
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <form onSubmit={submitAppointment} className="space-y-6">
                    
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patientName">Nombre completo *</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="patientName"
                            name="patientName"
                            placeholder="Tu nombre completo"
                            value={formData.patientName}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="patientEmail">Correo electrónico *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="patientEmail"
                            name="patientEmail"
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.patientEmail}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="patientPhone">Teléfono *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="patientPhone"
                          name="patientPhone"
                          type="tel"
                          placeholder="976 123 456"
                          value={formData.patientPhone}
                          onChange={handleInputChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Tipo de servicio *</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleSelectChange('serviceType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el servicio que necesitas" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.name}>
                              {service.name}
                              {service.category && (
                                <span className="text-gray-500 text-sm"> - {service.category}</span>
                              )}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="appointmentDate">Fecha preferida *</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="appointmentDate"
                            name="appointmentDate"
                            type="date"
                            value={formData.appointmentDate}
                            onChange={handleInputChange}
                            min={getMinDate()}
                            max={getMaxDate()}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="appointmentTime">Hora preferida *</Label>
                        <Select
                          value={formData.appointmentTime}
                          onValueChange={(value) => handleSelectChange('appointmentTime', value)}
                          disabled={!formData.appointmentDate}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona la hora" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    {/* Notes */}
                    <div className="space-y-2">
                      <Label htmlFor="notes">Notas adicionales</Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea
                          id="notes"
                          name="notes"
                          placeholder="Cualquier información adicional que quieras compartir..."
                          value={formData.notes}
                          onChange={handleInputChange}
                          className="pl-10 min-h-20"
                        />
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Reservando...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Reservar Cita
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>Información de Contacto</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium">Teléfono</div>
                      <div className="text-gray-600">976 527 761</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">info@onedental.es</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:976527761">
                        Llamar Directamente
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>Horarios de Atención</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Lunes</span>
                    <span>9:00-17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Martes</span>
                    <span>9:00-13:30, 15:30-21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Miércoles</span>
                    <span>9:00-17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Jueves</span>
                    <span>9:00-13:30, 15:30-20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Viernes</span>
                    <span>9:00-13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sábado</span>
                    <span className="text-red-600">Cerrado</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Domingo</span>
                    <span className="text-red-600">Cerrado</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Why Choose Us */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-800">
                    <Star className="w-5 h-5" />
                    <span>¿Por qué OneDental?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>12+ años de experiencia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Tecnología Digital Smile Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Primera consulta gratuita</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Instalaciones modernas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Equipo profesional especializado</span>
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

export default SistemaCitas;