import React from 'react';
import { Helmet } from 'react-helmet';

const TerminosCondiciones: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones | OneDental Zaragoza</title>
        <meta name="description" content="Términos y condiciones de uso de los servicios de OneDental. Información sobre el uso de nuestros servicios médicos dentales." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-lg text-gray-600">
              OneDental - Clínica Dental Dr. Onésimo Fernández
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Última actualización: 8 de junio de 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 prose prose-lg max-w-none">
            
            <h2>1. Información General</h2>
            <p>
              Los presentes términos y condiciones regulan el uso de los servicios prestados por 
              <strong> OneDental - Clínica Dental Dr. Onésimo Fernández</strong>, con domicilio en 
              Calle de Pablo Neruda, 17, 50018 Zaragoza, España.
            </p>

            <h2>2. Objeto</h2>
            <p>
              OneDental es un centro sanitario especializado en odontología que ofrece servicios de:
            </p>
            <ul>
              <li>Odontología general y preventiva</li>
              <li>Estética dental (Digital Smile Design, carillas, blanqueamientos)</li>
              <li>Implantología y cirugía oral</li>
              <li>Ortodoncia</li>
              <li>Periodoncia y endodoncia</li>
              <li>Prótesis dentales</li>
              <li>Urgencias dentales</li>
            </ul>

            <h2>3. Condiciones de Prestación de Servicios</h2>
            
            <h3>3.1 Requisitos</h3>
            <ul>
              <li>Ser mayor de edad o estar acompañado por tutor legal</li>
              <li>Proporcionar información médica veraz y completa</li>
              <li>Presentar documento de identidad válido</li>
              <li>Informar sobre alergias, medicaciones y problemas de salud</li>
            </ul>

            <h3>3.2 Primera Consulta</h3>
            <ul>
              <li>La primera consulta es gratuita e incluye diagnóstico inicial</li>
              <li>Se realizará exploración bucal y se elaborará presupuesto personalizado</li>
              <li>El presupuesto tiene validez de 6 meses</li>
              <li>Es necesario concertar cita previa</li>
            </ul>

            <h2>4. Citas y Cancelaciones</h2>
            
            <h3>4.1 Reserva de Citas</h3>
            <ul>
              <li>Las citas se pueden reservar por teléfono, email o web</li>
              <li>Confirmación de cita requerida 24 horas antes</li>
              <li>Horarios: L-X-V: 9:00-17:00, M-J: 9:00-13:30 y 15:30-21:00/20:00</li>
            </ul>

            <h3>4.2 Política de Cancelaciones</h3>
            <ul>
              <li>Cancelaciones con menos de 24h de antelación: 50€ de cargo</li>
              <li>No presentarse sin aviso: 100€ de cargo</li>
              <li>Retrasos superiores a 15 minutos pueden resultar en reprogramación</li>
              <li>Tres faltas sin justificar pueden resultar en suspensión temporal</li>
            </ul>

            <h2>5. Tratamientos y Consentimiento</h2>
            
            <h3>5.1 Consentimiento Informado</h3>
            <ul>
              <li>Todos los tratamientos requieren consentimiento informado por escrito</li>
              <li>Se explicarán riesgos, beneficios y alternativas</li>
              <li>El paciente puede retirar su consentimiento en cualquier momento</li>
              <li>Menores de edad requieren consentimiento del tutor legal</li>
            </ul>

            <h3>5.2 Plan de Tratamiento</h3>
            <ul>
              <li>Se elaborará plan de tratamiento personalizado</li>
              <li>Incluye secuencia, duración estimada y costes</li>
              <li>Modificaciones requieren nuevo consentimiento</li>
              <li>Seguimiento post-tratamiento incluido</li>
            </ul>

            <h2>6. Precios y Pagos</h2>
            
            <h3>6.1 Tarifas</h3>
            <ul>
              <li>Precios según tarifa vigente en momento del tratamiento</li>
              <li>IVA incluido en todos los precios mostrados</li>
              <li>Presupuestos válidos por 6 meses</li>
              <li>Urgencias fuera de horario: suplemento 25%</li>
            </ul>

            <h3>6.2 Formas de Pago</h3>
            <ul>
              <li>Efectivo, tarjeta de crédito/débito, transferencia</li>
              <li>Financiación sin intereses hasta 12 meses</li>
              <li>Financiación con intereses hasta 60 meses</li>
              <li>Seguros dentales aceptados (consultar coberturas)</li>
            </ul>

            <h3>6.3 Política de Cobros</h3>
            <ul>
              <li>Tratamientos urgentes: pago en el acto</li>
              <li>Tratamientos programados: 50% al inicio, resto al finalizar</li>
              <li>Prótesis: 70% al inicio, 30% en entrega</li>
              <li>Morosos: interés del 1,5% mensual</li>
            </ul>

            <h2>7. Garantías</h2>
            
            <h3>7.1 Garantía de Tratamientos</h3>
            <ul>
              <li><strong>Empastes:</strong> 2 años</li>
              <li><strong>Coronas y puentes:</strong> 5 años</li>
              <li><strong>Implantes:</strong> 10 años (osteointegración), 5 años (corona)</li>
              <li><strong>Prótesis removibles:</strong> 2 años</li>
              <li><strong>Ortodoncia:</strong> Resultado final garantizado</li>
              <li><strong>Endodoncia:</strong> 3 años</li>
            </ul>

            <h3>7.2 Condiciones de Garantía</h3>
            <ul>
              <li>Cumplimiento estricto de revisiones programadas</li>
              <li>Seguimiento de instrucciones post-tratamiento</li>
              <li>Mantenimiento de higiene oral adecuada</li>
              <li>No cubre daños por traumatismos o negligencia</li>
            </ul>

            <h2>8. Responsabilidades del Paciente</h2>
            <ul>
              <li>Proporcionar información médica completa y veraz</li>
              <li>Seguir instrucciones pre y post-tratamiento</li>
              <li>Acudir a revisiones programadas</li>
              <li>Comunicar cualquier problema o molestia</li>
              <li>Mantener higiene oral adecuada</li>
              <li>Informar cambios en medicación o estado de salud</li>
            </ul>

            <h2>9. Limitaciones de Responsabilidad</h2>
            <ul>
              <li>Resultados estéticos sujetos a limitaciones anatómicas</li>
              <li>Complicaciones inherentes al acto médico</li>
              <li>Factores de cicatrización individuales</li>
              <li>Cumplimiento de protocolo post-operatorio por parte del paciente</li>
            </ul>

            <h2>10. Urgencias</h2>
            <ul>
              <li>Urgencias durante horario: sin coste adicional</li>
              <li>Urgencias fuera de horario: suplemento 25%</li>
              <li>Teléfono de urgencias: 976 527 761</li>
              <li>Solo para pacientes en tratamiento activo</li>
            </ul>

            <h2>11. Seguro de Responsabilidad Civil</h2>
            <p>
              OneDental dispone de seguro de responsabilidad civil sanitaria con cobertura de 
              600.000€ por siniestro y 1.200.000€ anuales, garantizando la cobertura de cualquier 
              eventualidad durante la prestación de servicios.
            </p>

            <h2>12. Protección de Datos</h2>
            <p>
              El tratamiento de datos personales se rige por nuestra 
              <a href="/politica-privacidad" className="text-blue-600 hover:text-blue-800">Política de Privacidad</a>, 
              en cumplimiento del GDPR y normativa vigente.
            </p>

            <h2>13. Resolución de Conflictos</h2>
            <ul>
              <li>Mediación previa obligatoria ante el Colegio de Odontólogos de Aragón</li>
              <li>Jurisdicción: Juzgados de Zaragoza</li>
              <li>Ley aplicable: Española</li>
              <li>Reclamaciones: Hojas oficiales disponibles en clínica</li>
            </ul>

            <h2>14. Modificaciones</h2>
            <p>
              OneDental se reserva el derecho a modificar estos términos y condiciones, 
              notificando a los pacientes con 30 días de antelación.
            </p>

            <h2>15. Contacto</h2>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">OneDental</h3>
              <p className="text-blue-800">
                📧 Email: info@onedental.es<br/>
                📞 Teléfono: 976 527 761<br/>
                📍 Dirección: Calle de Pablo Neruda, 17, 50018 Zaragoza<br/>
                🕒 Horario: L-X-V: 9:00-17:00, M-J: 9:00-13:30 y 15:30-21:00/20:00<br/>
                ⚕️ Nº Registro Sanitario: [Número de registro]
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <a
              href="/aviso-legal"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Aviso Legal
            </a>
            <a
              href="/politica-privacidad"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              Política de Privacidad →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TerminosCondiciones;
