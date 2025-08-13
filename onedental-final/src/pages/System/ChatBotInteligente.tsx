import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { 
  MessageCircle,
  Send,
  Bot,
  User,
  Phone,
  Calendar,
  Calculator,
  AlertCircle,
  Clock,
  MapPin,
  Star,
  ChevronDown,
  X,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';

interface Mensaje {
  id: string;
  tipo: 'bot' | 'usuario';
  contenido: string;
  timestamp: Date;
  opciones?: OpcionRapida[];
  tipoEspecial?: 'precio' | 'cita' | 'urgencia' | 'contacto';
}

interface OpcionRapida {
  id: string;
  texto: string;
  accion: string;
  icono?: React.ReactNode;
}

interface ContextoConversacion {
  tratamientosConsultados: string[];
  interesEnCita: boolean;
  tipoUrgencia?: string;
  presupuestoEstimado?: number;
}

// Base de conocimientos OneDental
const knowledgeBase = {
  tratamientos: {
    'digital smile design': {
      nombre: 'Digital Smile Design',
      precio: 2500,
      duracion: '90 minutos',
      descripcion: 'Diseño digital de sonrisa con tecnología 3D avanzada',
      beneficios: ['Visualización 3D', 'Resultado predecible', 'Planificación precisa'],
      candidatos: 'Ideal para personas que quieren mejorar estética dental'
    },
    'implantes': {
      nombre: 'Implantes Dentales',
      precio: 1200,
      duracion: '120 minutos',
      descripcion: 'Colocación de implante dental con cirugía guiada',
      beneficios: ['Solución permanente', 'Preserva hueso', 'Función natural'],
      candidatos: 'Para personas con pérdida dental'
    },
    'carillas': {
      nombre: 'Carillas de Porcelana',
      precio: 450,
      duracion: '60 minutos',
      descripcion: 'Carillas de porcelana ultrafinas por pieza',
      beneficios: ['Resultado inmediato', 'Muy naturales', 'Resistentes'],
      candidatos: 'Para mejorar forma, color y posición dental'
    },
    'blanqueamiento': {
      nombre: 'Blanqueamiento Dental',
      precio: 350,
      duracion: '45 minutos',
      descripcion: 'Blanqueamiento profesional en clínica',
      beneficios: ['Resultados inmediatos', 'Seguro y controlado', 'Hasta 8 tonos más blanco'],
      candidatos: 'Para personas con dientes amarillentos o manchados'
    },
    'ortodoncia': {
      nombre: 'Ortodoncia',
      precio: 2800,
      duracion: '45 minutos consulta',
      descripcion: 'Tratamiento ortodóncico completo',
      beneficios: ['Mejora función masticatoria', 'Estética dental', 'Salud general'],
      candidatos: 'Para apiñamiento, espacios o malposición dental'
    }
  },
  horarios: {
    lunes: '9:00-17:00',
    martes: '9:00-13:30, 15:30-21:00',
    miercoles: '9:00-17:00',
    jueves: '9:00-13:30, 15:30-20:00',
    viernes: '9:00-13:00',
    sabado: 'Cerrado',
    domingo: 'Cerrado'
  },
  contacto: {
    telefono: '976 527 761',
    whatsapp: '976 527 761',
    email: 'info@onedental.es',
    direccion: 'Calle Pablo Neruda 17, Zaragoza',
    urgencias: '24/7 disponible'
  }
};

const respuestasInteligentes = {
  saludo: [
    '¡Hola! Soy el asistente virtual del Dr. Onésimo Fernández en OneDental Zaragoza. ¿En qué puedo ayudarte hoy?',
    '¡Bienvenido a OneDental! Estoy aquí para resolver tus dudas sobre tratamientos dentales. ¿Qué te interesa saber?',
    '¡Hola! Soy tu asistente dental virtual. ¿Tienes alguna consulta sobre nuestros servicios?'
  ],
  precios: {
    general: 'Te ayudo con información de precios. Nuestros tratamientos más consultados son:',
    consulta_gratuita: '¡Excelente noticia! La primera consulta es completamente GRATUITA para nuevos pacientes. Incluye revisión completa y diagnóstico.',
    financiacion: 'Ofrecemos financiación hasta 36 meses sin intereses. ¿Te interesa conocer las cuotas mensuales?'
  },
  urgencias: {
    dolor: 'Entiendo que tienes dolor dental. Es importante tratarlo cuanto antes. ¿El dolor es constante o solo al masticar?',
    golpe: 'En caso de traumatismo dental, es crucial actuar rápido. ¿Se ha movido o fracturado algún diente?',
    sangrado: 'El sangrado de encías puede indicar gingivitis. ¿Hace cuánto tiempo notas el sangrado?'
  },
  despedida: [
    '¡Ha sido un placer ayudarte! Si necesitas más información, estoy aquí 24/7.',
    'Perfecto, espero haber resuelto tus dudas. ¡Te esperamos en OneDental!',
    'Gracias por contactar con OneDental. ¡Que tengas un excelente día!'
  ]
};

export default function ChatBotInteligente() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [mensajeActual, setMensajeActual] = useState('');
  const [escribiendo, setEscribiendo] = useState(false);
  const [chatAbierto, setChatAbierto] = useState(true);
  const [minimizado, setMinimizado] = useState(false);
  const [contexto, setContexto] = useState<ContextoConversacion>({
    tratamientosConsultados: [],
    interesEnCita: false
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [mensajes]);

  // Mensaje de bienvenida inicial
  useEffect(() => {
    const mensajeBienvenida: Mensaje = {
      id: '1',
      tipo: 'bot',
      contenido: respuestasInteligentes.saludo[0],
      timestamp: new Date(),
      opciones: [
        { id: 'precios', texto: '💰 Ver precios', accion: 'precios', icono: <Calculator className="h-4 w-4" /> },
        { id: 'cita', texto: '📅 Pedir cita', accion: 'cita', icono: <Calendar className="h-4 w-4" /> },
        { id: 'urgencia', texto: '🚨 Urgencia dental', accion: 'urgencia', icono: <AlertCircle className="h-4 w-4" /> },
        { id: 'info', texto: 'ℹ️ Información general', accion: 'info', icono: <MessageCircle className="h-4 w-4" /> }
      ]
    };
    setMensajes([mensajeBienvenida]);
  }, []);

  const detectarIntencion = (mensaje: string): string => {
    const texto = mensaje.toLowerCase();
    
    // Detección de tratamientos
    if (texto.includes('digital smile') || texto.includes('diseño sonrisa')) return 'digital-smile-design';
    if (texto.includes('implante')) return 'implantes';
    if (texto.includes('carilla')) return 'carillas';
    if (texto.includes('blanque')) return 'blanqueamiento';
    if (texto.includes('ortodoncia') || texto.includes('bracket')) return 'ortodoncia';
    
    // Detección de intenciones
    if (texto.includes('precio') || texto.includes('coste') || texto.includes('€')) return 'precios';
    if (texto.includes('cita') || texto.includes('reservar') || texto.includes('hora')) return 'cita';
    if (texto.includes('dolor') || texto.includes('duele') || texto.includes('urgencia')) return 'urgencia';
    if (texto.includes('horario') || texto.includes('abierto')) return 'horarios';
    if (texto.includes('ubicación') || texto.includes('dirección') || texto.includes('donde')) return 'ubicacion';
    if (texto.includes('teléfono') || texto.includes('contacto') || texto.includes('llamar')) return 'contacto';
    if (texto.includes('hola') || texto.includes('buenos') || texto.includes('buenas')) return 'saludo';
    if (texto.includes('gracias') || texto.includes('adiós') || texto.includes('hasta')) return 'despedida';
    
    return 'general';
  };

  const generarRespuestaInteligente = (intencion: string, mensaje: string): Mensaje => {
    const id = Date.now().toString();
    let contenido = '';
    let opciones: OpcionRapida[] = [];
    let tipoEspecial: Mensaje['tipoEspecial'] = undefined;

    switch (intencion) {
      case 'digital-smile-design':
        const dsd = knowledgeBase.tratamientos['digital smile design'];
        contenido = `El **${dsd.nombre}** es nuestro tratamiento estrella ⭐\n\n💰 **Precio**: ${dsd.precio}€\n⏱️ **Duración**: ${dsd.duracion}\n\n✨ **¿Qué incluye?**\n${dsd.descripcion}\n\n🎯 **Beneficios principales**:\n${dsd.beneficios.map(b => `• ${b}`).join('\n')}\n\n¿Te interesa conocer más detalles o prefieres reservar una consulta gratuita?`;
        opciones = [
          { id: 'cita-dsd', texto: '📅 Reservar consulta', accion: 'cita-dsd' },
          { id: 'calcular-dsd', texto: '🧮 Calcular financiación', accion: 'calcular-dsd' },
          { id: 'mas-info', texto: 'ℹ️ Más información', accion: 'mas-info-dsd' }
        ];
        setContexto(prev => ({ ...prev, tratamientosConsultados: [...prev.tratamientosConsultados, 'digital-smile-design'] }));
        break;

      case 'implantes':
        const impl = knowledgeBase.tratamientos.implantes;
        contenido = `Los **${impl.nombre}** son la mejor solución para dientes perdidos 🦷\n\n💰 **Precio**: ${impl.precio}€ por implante\n⏱️ **Duración cirugía**: ${impl.duracion}\n\n🔬 **Nuestra técnica**:\n${impl.descripcion}\n\n✅ **Ventajas principales**:\n${impl.beneficios.map(b => `• ${b}`).join('\n')}\n\n¿Necesitas reemplazar uno o varios dientes?`;
        opciones = [
          { id: 'cita-implante', texto: '📅 Consulta implantes', accion: 'cita-implante' },
          { id: 'precio-implante', texto: '💰 Ver precios completos', accion: 'precio-implante' }
        ];
        break;

      case 'carillas':
        const car = knowledgeBase.tratamientos.carillas;
        contenido = `Las **${car.nombre}** transforman tu sonrisa al instante ✨\n\n💰 **Precio**: ${car.precio}€ por carilla\n⏱️ **Tiempo sesión**: ${car.duracion}\n\n🎨 **¿Qué conseguimos?**\n${car.descripcion}\n\n🌟 **Resultados**:\n${car.beneficios.map(b => `• ${b}`).join('\n')}\n\n¿Cuántas carillas necesitarías aproximadamente?`;
        opciones = [
          { id: 'calcular-carillas', texto: '🧮 Calcular presupuesto', accion: 'calcular-carillas' },
          { id: 'cita-carillas', texto: '📅 Ver antes/después', accion: 'cita-carillas' }
        ];
        break;

      case 'blanqueamiento':
        const blan = knowledgeBase.tratamientos.blanqueamiento;
        contenido = `El **${blan.nombre}** profesional con resultados inmediatos ⚡\n\n💰 **Precio**: ${blan.precio}€\n⏱️ **Duración**: ${blan.duracion}\n\n🔬 **Tecnología avanzada**:\n${blan.descripcion}\n\n🌟 **Resultados garantizados**:\n${blan.beneficios.map(b => `• ${b}`).join('\n')}\n\n¿Tienes manchas específicas o quieres un blanqueamiento general?`;
        opciones = [
          { id: 'cita-blanq', texto: '📅 Reservar sesión', accion: 'cita-blanq' },
          { id: 'info-blanq', texto: 'ℹ️ Cuidados posteriores', accion: 'info-blanq' }
        ];
        break;

      case 'ortodoncia':
        const orto = knowledgeBase.tratamientos.ortodoncia;
        contenido = `La **${orto.nombre}** corrige la posición de tus dientes 🦷\n\n💰 **Precio completo**: ${orto.precio}€\n⏱️ **Consulta inicial**: ${orto.duracion}\n\n🎯 **Tratamiento personalizado**:\n${orto.descripcion}\n\n✅ **Beneficios a largo plazo**:\n${orto.beneficios.map(b => `• ${b}`).join('\n')}\n\n¿Prefieres brackets tradicionales o alineadores invisibles?`;
        opciones = [
          { id: 'consulta-orto', texto: '📅 Consulta gratuita', accion: 'consulta-orto' },
          { id: 'tipos-orto', texto: '🦷 Tipos de ortodoncia', accion: 'tipos-orto' }
        ];
        break;

      case 'precios':
        contenido = `💰 **Precios OneDental Zaragoza** (actualizados 2025)\n\n🆓 **Consulta inicial**: GRATUITA (nuevos pacientes)\n💎 **Digital Smile Design**: 2.500€\n🦷 **Implante dental**: 1.200€\n✨ **Carilla porcelana**: 450€/pieza\n⚡ **Blanqueamiento**: 350€\n📐 **Ortodoncia completa**: 2.800€\n\n💳 **Financiación disponible**: Hasta 36 meses sin intereses\n\n¿Te interesa calcular las cuotas mensuales de algún tratamiento?`;
        opciones = [
          { id: 'calculadora', texto: '🧮 Calculadora de precios', accion: 'calculadora' },
          { id: 'financiacion', texto: '💳 Ver financiación', accion: 'financiacion' },
          { id: 'consulta-gratuita', texto: '🆓 Reservar consulta gratuita', accion: 'consulta-gratuita' }
        ];
        tipoEspecial = 'precio';
        break;

      case 'cita':
        contenido = `📅 **Reservar cita con Dr. Onésimo Fernández**\n\n🆓 **Primera consulta GRATUITA** para nuevos pacientes\n⏰ **Horarios disponibles**:\n• Lunes y Miércoles: ${knowledgeBase.horarios.lunes}\n• Martes: ${knowledgeBase.horarios.martes}\n• Jueves: ${knowledgeBase.horarios.jueves}\n• Viernes: ${knowledgeBase.horarios.viernes}\n\n¿Para qué tratamiento necesitas la cita?`;
        opciones = [
          { id: 'cita-online', texto: '🌐 Reservar online', accion: 'cita-online' },
          { id: 'llamar-cita', texto: '📞 Llamar ahora', accion: 'llamar-cita' },
          { id: 'urgencia-cita', texto: '🚨 Es urgente', accion: 'urgencia-cita' }
        ];
        tipoEspecial = 'cita';
        setContexto(prev => ({ ...prev, interesEnCita: true }));
        break;

      case 'urgencia':
        contenido = `🚨 **Urgencias Dentales - OneDental Zaragoza**\n\n⚡ **Atención inmediata disponible**\n📞 **Teléfono urgencias**: ${knowledgeBase.contacto.telefono}\n💬 **WhatsApp directo**: ${knowledgeBase.contacto.whatsapp}\n\n🩺 **¿Cuál es tu situación?**\n• Dolor intenso\n• Traumatismo/golpe\n• Sangrado abundante\n• Inflamación severa\n\n⏰ **Disponibilidad**: ${knowledgeBase.contacto.urgencias}`;
        opciones = [
          { id: 'llamar-urgencia', texto: '📞 Llamar AHORA', accion: 'llamar-urgencia' },
          { id: 'whatsapp-urgencia', texto: '💬 WhatsApp directo', accion: 'whatsapp-urgencia' },
          { id: 'describir-urgencia', texto: '📝 Describir síntomas', accion: 'describir-urgencia' }
        ];
        tipoEspecial = 'urgencia';
        break;

      case 'horarios':
        contenido = `⏰ **Horarios OneDental Zaragoza**\n\n📅 **Lunes**: ${knowledgeBase.horarios.lunes}\n📅 **Martes**: ${knowledgeBase.horarios.martes}\n📅 **Miércoles**: ${knowledgeBase.horarios.miercoles}\n📅 **Jueves**: ${knowledgeBase.horarios.jueves}\n📅 **Viernes**: ${knowledgeBase.horarios.viernes}\n📅 **Fin de semana**: Cerrado\n\n🚨 **Urgencias**: Atención 24/7\n\n¿Quieres reservar una cita en algún horario específico?`;
        opciones = [
          { id: 'cita-manana', texto: '🌅 Cita mañana', accion: 'cita-manana' },
          { id: 'cita-tarde', texto: '🌆 Cita tarde', accion: 'cita-tarde' }
        ];
        break;

      case 'ubicacion':
        contenido = `📍 **OneDental Zaragoza - Ubicación**\n\n🏢 **Dirección**: ${knowledgeBase.contacto.direccion}\n🚗 **Fácil acceso** y parking disponible\n🚌 **Transporte público**: Múltiples líneas de autobús\n\n🗺️ **Zona**: Centro de Zaragoza, muy bien comunicado\n🏥 **Referencias**: Cerca del Hospital Miguel Servet\n\n¿Necesitas indicaciones específicas o prefieres ver nuestras instalaciones virtualmente?`;
        opciones = [
          { id: 'tour-virtual', texto: '🏢 Tour virtual 360°', accion: 'tour-virtual' },
          { id: 'como-llegar', texto: '🗺️ Cómo llegar', accion: 'como-llegar' }
        ];
        break;

      case 'contacto':
        contenido = `📞 **Contactar con OneDental Zaragoza**\n\n📱 **Teléfono**: ${knowledgeBase.contacto.telefono}\n💬 **WhatsApp**: ${knowledgeBase.contacto.whatsapp}\n📧 **Email**: ${knowledgeBase.contacto.email}\n📍 **Dirección**: ${knowledgeBase.contacto.direccion}\n\n⏰ **Horario atención telefónica**:\n• Lunes a Viernes: 9:00-19:00\n• Urgencias: 24/7\n\n¿Prefieres llamar, escribir por WhatsApp o reservar cita online?`;
        opciones = [
          { id: 'llamar-ahora', texto: '📞 Llamar ahora', accion: 'llamar-ahora' },
          { id: 'whatsapp', texto: '💬 WhatsApp', accion: 'whatsapp' },
          { id: 'email', texto: '📧 Enviar email', accion: 'email' }
        ];
        tipoEspecial = 'contacto';
        break;

      case 'saludo':
        contenido = respuestasInteligentes.saludo[Math.floor(Math.random() * respuestasInteligentes.saludo.length)];
        opciones = [
          { id: 'precios', texto: '💰 Ver precios', accion: 'precios' },
          { id: 'cita', texto: '📅 Pedir cita', accion: 'cita' },
          { id: 'tratamientos', texto: '🦷 Nuestros tratamientos', accion: 'tratamientos' }
        ];
        break;

      case 'despedida':
        contenido = respuestasInteligentes.despedida[Math.floor(Math.random() * respuestasInteligentes.despedida.length)];
        break;

      default:
        contenido = `Entiendo tu consulta. Como asistente especializado de OneDental, puedo ayudarte con:\n\n🦷 **Información sobre tratamientos**\n💰 **Precios y financiación**\n📅 **Reservar citas**\n🚨 **Urgencias dentales**\n📍 **Ubicación y contacto**\n\n¿Sobre qué te gustaría saber más?`;
        opciones = [
          { id: 'tratamientos', texto: '🦷 Ver tratamientos', accion: 'tratamientos' },
          { id: 'precios', texto: '💰 Consultar precios', accion: 'precios' },
          { id: 'contacto', texto: '📞 Información contacto', accion: 'contacto' }
        ];
    }

    return {
      id,
      tipo: 'bot',
      contenido,
      timestamp: new Date(),
      opciones,
      tipoEspecial
    };
  };

  const simularEscritura = (duracion: number = 1500) => {
    setEscribiendo(true);
    setTimeout(() => setEscribiendo(false), duracion);
  };

  const enviarMensaje = (texto?: string) => {
    const mensajeTexto = texto || mensajeActual;
    if (!mensajeTexto.trim()) return;

    // Agregar mensaje del usuario
    const mensajeUsuario: Mensaje = {
      id: Date.now().toString(),
      tipo: 'usuario',
      contenido: mensajeTexto,
      timestamp: new Date()
    };

    setMensajes(prev => [...prev, mensajeUsuario]);
    setMensajeActual('');

    // Simular typing del bot
    simularEscritura();

    // Generar respuesta del bot después del delay
    setTimeout(() => {
      const intencion = detectarIntencion(mensajeTexto);
      const respuestaBot = generarRespuestaInteligente(intencion, mensajeTexto);
      setMensajes(prev => [...prev, respuestaBot]);
    }, 1500);
  };

  const manejarOpcionRapida = (accion: string) => {
    switch (accion) {
      case 'precios':
        enviarMensaje('Quiero información sobre precios');
        break;
      case 'cita':
      case 'cita-online':
        window.location.href = '/reservar-cita';
        break;
      case 'urgencia':
        enviarMensaje('Tengo una urgencia dental');
        break;
      case 'calculadora':
      case 'calcular-dsd':
      case 'calcular-carillas':
        window.location.href = '/calculadora-precios';
        break;
      case 'llamar-ahora':
      case 'llamar-cita':
      case 'llamar-urgencia':
        window.location.href = 'tel:976527761';
        break;
      case 'whatsapp':
      case 'whatsapp-urgencia':
        window.open('https://wa.me/34976527761?text=Hola, necesito información sobre OneDental', '_blank');
        break;
      case 'tour-virtual':
        window.location.href = '/tour-virtual';
        break;
      case 'info':
        enviarMensaje('Quiero información general sobre OneDental');
        break;
      case 'tratamientos':
        enviarMensaje('¿Qué tratamientos ofrecen?');
        break;
      default:
        enviarMensaje(accion);
    }
  };

  const formatearMensaje = (contenido: string) => {
    return contenido.split('\n').map((linea, index) => (
      <div key={index} className={index > 0 ? 'mt-1' : ''}>
        {linea.includes('**') ? (
          <span 
            dangerouslySetInnerHTML={{
              __html: linea.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }}
          />
        ) : (
          linea
        )}
      </div>
    ));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enviarMensaje();
    }
  };

  if (!chatAbierto) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setChatAbierto(true)}
          className="rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-700 shadow-lg"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Chat Bot Inteligente - OneDental Zaragoza</title>
        <meta name="description" content="Asistente virtual 24/7 de OneDental. Consulta precios, reserva citas y resuelve dudas sobre tratamientos dentales con el Dr. Onésimo." />
      </Helmet>

      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${minimizado ? 'w-80 h-16' : 'w-96 h-[32rem]'}`}>
        <Card className="h-full shadow-2xl border-0 overflow-hidden">
          {/* Header del chat */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10 border-2 border-white/20">
                  <AvatarImage src="/images/doctor-profesional.jpg" alt="Dr. Onésimo" />
                  <AvatarFallback className="bg-blue-500 text-white">DR</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-sm">Dr. Onésimo Fernández</h3>
                  <div className="flex items-center text-xs text-blue-100">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Online 24/7
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMinimizado(!minimizado)}
                  className="text-white hover:bg-white/10 h-8 w-8 p-0"
                >
                  {minimizado ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setChatAbierto(false)}
                  className="text-white hover:bg-white/10 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {!minimizado && (
            <>
              {/* Área de mensajes */}
              <CardContent className="flex-1 overflow-y-auto p-0 h-80">
                <div className="p-4 space-y-4">
                  {mensajes.map((mensaje) => (
                    <div
                      key={mensaje.id}
                      className={`flex ${mensaje.tipo === 'usuario' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] ${mensaje.tipo === 'usuario' ? 'bg-blue-600 text-white' : 'bg-gray-100'} rounded-lg p-3`}>
                        <div className="text-sm whitespace-pre-wrap">
                          {formatearMensaje(mensaje.contenido)}
                        </div>
                        
                        {mensaje.opciones && mensaje.opciones.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {mensaje.opciones.map((opcion) => (
                              <Button
                                key={opcion.id}
                                variant="outline"
                                size="sm"
                                onClick={() => manejarOpcionRapida(opcion.accion)}
                                className="text-xs h-7 bg-white hover:bg-blue-50 border-blue-200"
                              >
                                {opcion.icono && <span className="mr-1">{opcion.icono}</span>}
                                {opcion.texto}
                              </Button>
                            ))}
                          </div>
                        )}
                        
                        <div className={`text-xs mt-2 opacity-60 ${mensaje.tipo === 'usuario' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {mensaje.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {escribiendo && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Input de mensaje */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    ref={inputRef}
                    value={mensajeActual}
                    onChange={(e) => setMensajeActual(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu consulta..."
                    className="flex-1"
                    disabled={escribiendo}
                  />
                  <Button
                    onClick={() => enviarMensaje()}
                    disabled={!mensajeActual.trim() || escribiendo}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
                  <span className="flex items-center">
                    <Bot className="h-3 w-3 mr-1" />
                    Asistente IA OneDental • Respuestas en segundos
                  </span>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </>
  );
}