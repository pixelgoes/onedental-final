import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'sonner'

// Contexts
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { PersonalizationProvider } from './contexts/PersonalizationContext'

// Components
import ErrorBoundary from './components/ErrorBoundary'
import ProtectedRoute from './components/ProtectedRoute'

// Pages
import Home from './pages/Home'

// Services
import ServicesLanding from './pages/Services/ServicesLanding'
import ServicesOverview from './pages/Services/ServicesOverview'
import ServiceDetail from './pages/Services/ServiceDetail'

// Individual Services
import BlanqueamientoDental from './pages/Services/Individual/BlanqueamientoDental'
import CarillasPorcelana from './pages/Services/Individual/CarillasPorcelana'
import ImplantesDentales from './pages/Services/Individual/ImplantesDentales'
import Ortodoncia from './pages/Services/Individual/Ortodoncia'
import HigieneDental from './pages/Services/Individual/HigieneDental'
import Endodoncia from './pages/Services/Individual/Endodoncia'
import ProtesisDental from './pages/Services/Individual/ProtesisDental'
import CirugiaDental from './pages/Services/Individual/CirugiaDental'
import Periodoncia from './pages/Services/Individual/Periodoncia'
import DigitalSmileDesign from './pages/Services/Individual/DigitalSmileDesign'

// Tools
import ToolsOverview from './pages/Tools/ToolsOverview'
import CalculadoraPrecios from './pages/Tools/CalculadoraPrecios'
import TourVirtual from './pages/Tools/TourVirtual'
import TestimoniosDinamicos from './pages/Tools/TestimoniosDinamicos'

// Auth
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Auth/Dashboard'
import AdminLogin from './pages/Auth/AdminLogin'

// Admin
import AdminDashboard from './pages/Admin/AdminDashboard'

// Other Pages
import ContactPage from './pages/ContactPage'
import BookAppointment from './pages/BookAppointment'
import ReferralSystem from './pages/ReferralSystem'

// Institutional
import SobreNosotros from './pages/Institutional/SobreNosotros'
import EquipoMedico from './pages/Institutional/EquipoMedico'
import Tecnologia from './pages/Institutional/Tecnologia'
import Certificaciones from './pages/Institutional/Certificaciones'
import Instalaciones from './pages/About/Instalaciones'

// Conversion
import PrimeraConsultaGratuita from './pages/Conversion/PrimeraConsultaGratuita'
import UrgenciasDentales from './pages/Conversion/UrgenciasDentales'
import Financiacion from './pages/Conversion/Financiacion'
import Garantias from './pages/Conversion/Garantias'

// System
import SistemaCitas from './pages/System/SistemaCitas'
import ChatBotInteligente from './pages/System/ChatBotInteligente'
import ProgramaReferidos from './pages/System/ProgramaReferidos'
import CRMDashboard from './pages/System/CRMDashboard'
import AnalyticsAvanzado from './pages/System/AnalyticsAvanzado'
import CentroMultimedia from './pages/System/CentroMultimedia'
import SistemaNotificaciones from './pages/Notifications/SistemaNotificaciones'

// AR/VR
import SimuladorSonrisa from './pages/AR/SimuladorSonrisa'

// Blog
import BlogIndex from './pages/Blog/BlogIndex'
import BlogPost from './pages/Blog/BlogPost'

// Legal
import PoliticaPrivacidad from './pages/Legal/PoliticaPrivacidad'
import TerminosCondiciones from './pages/Legal/TerminosCondiciones'
import AvisoLegal from './pages/Legal/AvisoLegal'
import PoliticaCookies from './pages/Legal/PoliticaCookies'

// Store & Payments
import MarketplaceDental from './pages/Store/MarketplaceDental'
import SistemaPagos from './pages/Payments/SistemaPagos'

// BI
import DashboardBusinessIntelligence from './pages/BI/DashboardBusinessIntelligence'

// 404
import NotFound from './pages/404/NotFound'

// Styles
import './index.css'

function App() {
  useEffect(() => {
    // Set up global error handling
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason)
      event.preventDefault()
    })

    // Clean up
    return () => {
      window.removeEventListener('unhandledrejection', () => {})
    }
  }, [])

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <PersonalizationProvider>
          <AuthProvider>
            <Router>
              <div className="App">
                <Toaster 
                  position="top-right" 
                  richColors 
                  closeButton
                  duration={4000}
                />
                
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} />
                  
                  {/* Services */}
                  <Route path="/services" element={<ServicesLanding />} />
                  <Route path="/services/:slug" element={<ServiceDetail />} />
                  <Route path="/servicios" element={<Navigate to="/services" replace />} />
                  
                  {/* Individual Services */}
                  <Route path="/blanqueamiento-dental" element={<BlanqueamientoDental />} />
                  <Route path="/carillas-porcelana" element={<CarillasPorcelana />} />
                  <Route path="/implantes-dentales" element={<ImplantesDentales />} />
                  <Route path="/ortodoncia" element={<Ortodoncia />} />
                  <Route path="/higiene-dental" element={<HigieneDental />} />
                  <Route path="/endodoncia" element={<Endodoncia />} />
                  <Route path="/protesis-dental" element={<ProtesisDental />} />
                  <Route path="/cirugia-dental" element={<CirugiaDental />} />
                  <Route path="/periodoncia" element={<Periodoncia />} />
                  <Route path="/digital-smile-design" element={<DigitalSmileDesign />} />
                  
                  {/* Tools */}
                  <Route path="/tools" element={<ToolsOverview />} />
                  <Route path="/herramientas" element={<Navigate to="/tools" replace />} />
                  <Route path="/calculadora-precios" element={<CalculadoraPrecios />} />
                  <Route path="/tour-virtual" element={<TourVirtual />} />
                  <Route path="/testimonios-dinamicos" element={<TestimoniosDinamicos />} />
                  <Route path="/simulador-sonrisa" element={<SimuladorSonrisa />} />
                  <Route path="/chat-bot-inteligente" element={<ChatBotInteligente />} />
                  <Route path="/sistema-citas" element={<SistemaCitas />} />
                  
                  {/* Contact & Appointments */}
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/contacto" element={<Navigate to="/contact" replace />} />
                  <Route path="/book-appointment" element={<BookAppointment />} />
                  <Route path="/reservar-cita" element={<Navigate to="/book-appointment" replace />} />
                  
                  {/* Authentication */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  
                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
                  <Route path="/admin/dashboard" element={
                    <ProtectedRoute adminOnly>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/crm" element={
                    <ProtectedRoute adminOnly>
                      <CRMDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/analytics" element={
                    <ProtectedRoute adminOnly>
                      <AnalyticsAvanzado />
                    </ProtectedRoute>
                  } />
                  
                  {/* Referral System */}
                  <Route path="/referrals" element={
                    <ProtectedRoute>
                      <ReferralSystem />
                    </ProtectedRoute>
                  } />
                  <Route path="/referidos" element={<Navigate to="/referrals" replace />} />
                  <Route path="/programa-referidos" element={<ProgramaReferidos />} />
                  
                  {/* Institutional */}
                  <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                  <Route path="/about" element={<Navigate to="/sobre-nosotros" replace />} />
                  <Route path="/equipo-medico" element={<EquipoMedico />} />
                  <Route path="/tecnologia" element={<Tecnologia />} />
                  <Route path="/certificaciones" element={<Certificaciones />} />
                  <Route path="/instalaciones" element={<Instalaciones />} />
                  
                  {/* Conversion Pages */}
                  <Route path="/primera-consulta-gratuita" element={<PrimeraConsultaGratuita />} />
                  <Route path="/urgencias-dentales" element={<UrgenciasDentales />} />
                  <Route path="/financiacion" element={<Financiacion />} />
                  <Route path="/garantias" element={<Garantias />} />
                  
                  {/* Blog */}
                  <Route path="/blog" element={<BlogIndex />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  
                  {/* Legal */}
                  <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
                  <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
                  <Route path="/aviso-legal" element={<AvisoLegal />} />
                  <Route path="/politica-cookies" element={<PoliticaCookies />} />
                  
                  {/* Store & Payments */}
                  <Route path="/marketplace" element={<MarketplaceDental />} />
                  <Route path="/pagos" element={<SistemaPagos />} />
                  
                  {/* Notifications */}
                  <Route path="/notifications" element={
                    <ProtectedRoute>
                      <SistemaNotificaciones />
                    </ProtectedRoute>
                  } />
                  
                  {/* BI Dashboard */}
                  <Route path="/business-intelligence" element={
                    <ProtectedRoute adminOnly>
                      <DashboardBusinessIntelligence />
                    </ProtectedRoute>
                  } />
                  
                  {/* Multimedia Center */}
                  <Route path="/multimedia" element={<CentroMultimedia />} />
                  
                  {/* Legacy routes redirects */}
                  <Route path="/servicios-overview" element={<Navigate to="/services" replace />} />
                  <Route path="/service-detail" element={<Navigate to="/services" replace />} />
                  
                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </Router>
          </AuthProvider>
        </PersonalizationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App