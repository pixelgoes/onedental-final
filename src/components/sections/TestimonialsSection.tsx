import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from '../icons/LucideIcons';

interface Testimonial {
  name: string;
  service: string;
  text: string;
  rating: number;
  date: string;
}

interface CaseStudy {
  title: string;
  service: string;
  description: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
}

const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "María González",
      service: "Digital Smile Design",
      text: "Increíble el cambio en mi sonrisa. El Dr. Fernández me explicó todo el proceso con la simulación 3D y el resultado superó mis expectativas. El equipo es muy profesional y las instalaciones son excepcionales.",
      rating: 5,
      date: "2024-05-15"
    },
    {
      name: "Carlos Ruiz", 
      service: "Implantes dentales",
      text: "Profesionalidad absoluta. Los implantes guiados por ordenador fueron un éxito total. Sin dolor y con un resultado perfecto. Sara y Ana me hicieron sentir muy cómodo durante todo el proceso.",
      rating: 5,
      date: "2024-04-20"
    },
    {
      name: "Ana López",
      service: "Carillas de porcelana", 
      text: "Mi sonrisa cambió completamente. El equipo de OneDental es excepcional y las instalaciones son muy modernas. Me sentí en las mejores manos desde el primer día.",
      rating: 5,
      date: "2024-03-10"
    },
    {
      name: "Javier Martín",
      service: "Blanqueamiento dental",
      text: "Resultados inmediatos y sin sensibilidad. Sara me hizo sentir muy cómodo durante todo el tratamiento. Definitivamente recomiendo OneDental a cualquiera que busque calidad y profesionalidad.",
      rating: 5,
      date: "2024-02-28"
    },
    {
      name: "Elena Rodríguez",
      service: "Ortodoncia invisible",
      text: "El Dr. Fernández me explicó todas las opciones disponibles. Elegimos ortodoncia invisible y el resultado ha sido perfecto. El seguimiento fue excepcional durante todo el tratamiento.",
      rating: 5,
      date: "2024-01-15"
    },
    {
      name: "Miguel Sánchez", 
      service: "Prótesis dental",
      text: "Después de años con problemas dentales, encontré en OneDental la solución perfecta. Mi prótesis se ajusta perfectamente y nadie nota que no son mis dientes naturales.",
      rating: 5,
      date: "2023-12-20"
    }
  ];

  const caseStudies: CaseStudy[] = [
    {
      title: "Transformación Digital Smile Design",
      service: "Estética Dental Completa",
      description: "Paciente con desgaste dental severo y sonrisa asimétrica. Utilizamos Digital Smile Design para planificar una transformación completa con carillas de porcelana.",
      duration: "3 semanas",
      beforeImage: "🦷",
      afterImage: "😁"
    },
    {
      title: "Implantes Inmediatos",
      service: "Implantología Avanzada", 
      description: "Reposición inmediata de pieza dental anterior con implante y corona provisional en una sola sesión. Resultado estético y funcional inmediato.",
      duration: "1 día",
      beforeImage: "🚫",
      afterImage: "🦷"
    },
    {
      title: "Rehabilitación Completa",
      service: "Odontología Integral",
      description: "Caso complejo de rehabilitación oral completa combinando implantes, prótesis e tratamiento periodontal en un plan integral.",
      duration: "4 meses",
      beforeImage: "😔",
      afterImage: "😊"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextCaseStudy = () => {
    setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setActiveCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="casos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Casos de Éxito y Testimonios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 500 pacientes han confiado en nosotros para transformar sus sonrisas. 
            Descubre sus experiencias y algunos de nuestros casos más destacados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Testimonials */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Lo que dicen nuestros pacientes
            </h3>
            
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <div className="absolute -top-4 left-8">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <Quote className="w-6 h-6" />
                </div>
              </div>

              <div className="pt-4">
                {/* Rating */}
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-blue-600 font-semibold">
                    {testimonials[activeTestimonial].service}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(testimonials[activeTestimonial].date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600">4.9/5</div>
                <div className="text-sm text-gray-600">Valoración Google</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Pacientes</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Casos de Éxito Destacados
            </h3>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-4">
                  <Star className="w-4 h-4" />
                  <span className="font-semibold">CASO DESTACADO</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {caseStudies[activeCaseStudy].title}
                </h4>
                <p className="text-blue-600 font-semibold">
                  {caseStudies[activeCaseStudy].service}
                </p>
              </div>

              {/* Before/After */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg p-8 mb-3">
                    <div className="text-6xl">{caseStudies[activeCaseStudy].beforeImage}</div>
                  </div>
                  <div className="font-semibold text-gray-700">ANTES</div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-8 mb-3">
                    <div className="text-6xl">{caseStudies[activeCaseStudy].afterImage}</div>
                  </div>
                  <div className="font-semibold text-blue-600">DESPUÉS</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {caseStudies[activeCaseStudy].description}
              </p>

              {/* Duration */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Duración del tratamiento:</span>
                  <span className="font-bold text-blue-600">{caseStudies[activeCaseStudy].duration}</span>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevCaseStudy}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex space-x-2">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCaseStudy(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeCaseStudy ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextCaseStudy}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#cita"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <span>¿Quieres un resultado así?</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Más opiniones de nuestros pacientes
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-gray-300" />
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "{testimonial.text.substring(0, 120)}..."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-blue-600">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">¿Quieres ser nuestro próximo caso de éxito?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Únete a más de 500 pacientes que han transformado su sonrisa con nosotros.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#cita"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Primera Consulta GRATUITA
            </a>
            <a
              href="tel:976527761"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 976 527 761
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
