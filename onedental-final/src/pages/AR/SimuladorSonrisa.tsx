import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Camera, 
  Sparkles, 
  Smile, 
  Download, 
  Share2, 
  RotateCcw, 
  Zap,
  Eye,
  Palette,
  Sliders,
  Play,
  Pause,
  RefreshCw,
  Heart,
  Star,
  ArrowRight,
  Shield,
  Award
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Label } from '../../components/ui/label';
import { Slider } from '../../components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

export default function SimuladorSonrisa() {
  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [simulationActive, setSimulationActive] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('digital-smile-design');
  const [brightnessLevel, setBrightnessLevel] = useState([5]);
  const [alignmentLevel, setAlignmentLevel] = useState([3]);
  const [shapeLevel, setShapeLevel] = useState([4]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [arResults, setArResults] = useState<any[]>([]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const tratamientos = [
    {
      id: 'digital-smile-design',
      nombre: 'Digital Smile Design',
      descripcion: 'Diseño completo de sonrisa personalizado',
      precio: 450,
      duracion: '2 horas',
      color: 'from-blue-500 to-cyan-500',
      antes: '/images/sonrisa-perfecta_1.jpg',
      despues: '/images/sonrisa-perfecta_3.jpg'
    },
    {
      id: 'carillas-porcelana',
      nombre: 'Carillas de Porcelana',
      descripcion: 'Máxima estética y naturalidad',
      precio: 450,
      duracion: '45 min/pieza',
      color: 'from-pink-500 to-rose-500',
      antes: '/images/sonrisa-perfecta_4.jpg',
      despues: '/images/sonrisa-perfecta_5.jpg'
    },
    {
      id: 'blanqueamiento',
      nombre: 'Blanqueamiento Dental',
      descripcion: 'Hasta 8 tonos más blanco',
      precio: 350,
      duracion: '90 minutos',
      color: 'from-yellow-400 to-orange-500',
      antes: '/images/sonrisa-perfecta_6.jpg',
      despues: '/images/sonrisa-perfecta_7.jpg'
    },
    {
      id: 'ortodoncia-invisalign',
      nombre: 'Invisalign',
      descripcion: 'Alineamiento invisible de dientes',
      precio: 2800,
      duracion: '12-18 meses',
      color: 'from-purple-500 to-indigo-500',
      antes: '/images/paciente-satisfecho_2.jpg',
      despues: '/images/paciente-satisfecho_3.jpg'
    }
  ];

  const resultadosSimulacion = [
    {
      id: 1,
      tratamiento: 'Digital Smile Design',
      mejora: '+95% estética',
      confianza: '+87% autoestima',
      satisfaccion: '98% pacientes',
      tiempo: '2 semanas'
    },
    {
      id: 2,
      tratamiento: 'Carillas Porcelana',
      mejora: '+92% naturalidad',
      confianza: '+89% seguridad',
      satisfaccion: '96% pacientes',
      tiempo: '2 semanas'
    },
    {
      id: 3,
      tratamiento: 'Blanqueamiento',
      mejora: '+8 tonos brillo',
      confianza: '+75% sonrisa',
      satisfaccion: '94% pacientes',
      tiempo: '90 minutos'
    }
  ];

  const iniciarCamara = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: 640, height: 480 } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('No se pudo acceder a la cámara. Por favor verifica los permisos.');
    }
  };

  const capturarFoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg');
        setCapturedImage(imageData);
        setCameraActive(false);
        
        // Detener stream
        const stream = video.srcObject as MediaStream;
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }
      }
    }
  };

  const iniciarSimulacion = async () => {
    setIsProcessing(true);
    setSimulationActive(true);
    
    // Simulación de procesamiento IA
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generar resultados simulados
    const nuevosResultados = tratamientos.map((tratamiento, index) => ({
      id: index + 1,
      tratamiento: tratamiento.nombre,
      confianza: Math.floor(Math.random() * 15) + 85,
      prediccion: `Mejora estimada del ${Math.floor(Math.random() * 20) + 80}%`,
      resultado: tratamiento.despues,
      precio: tratamiento.precio
    }));
    
    setArResults(nuevosResultados);
    setIsProcessing(false);
  };

  const reiniciarSimulacion = () => {
    setCapturedImage(null);
    setSimulationActive(false);
    setArResults([]);
    setCameraActive(false);
  };

  const descargarResultado = () => {
    if (capturedImage) {
      const link = document.createElement('a');
      link.download = 'simulacion-sonrisa-onedental.jpg';
      link.href = capturedImage;
      link.click();
    }
  };

  const tratamientoSeleccionado = tratamientos.find(t => t.id === selectedTreatment);

  return (
    <>
      <Helmet>
        <title>Simulador de Sonrisas AR - OneDental Zaragoza</title>
        <meta name="description" content="Simulador de sonrisas con realidad aumentada. Visualiza tu resultado antes del tratamiento con IA avanzada." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Camera className="h-20 w-20 text-purple-200" />
                  <Sparkles className="h-8 w-8 text-yellow-300 absolute -top-2 -right-2 animate-pulse" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Simulador de Sonrisas
                <span className="block text-3xl lg:text-4xl text-purple-200">con Realidad Aumentada</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Visualiza tu sonrisa perfecta antes del tratamiento. Tecnología de IA avanzada 
                que te muestra el resultado real de tu tratamiento dental.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                  <Eye className="h-4 w-4 mr-2" />
                  IA Avanzada
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  Resultados Reales
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                  <Shield className="h-4 w-4 mr-2" />
                  100% Seguro
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Main Simulator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Camera and AR Viewer */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <Camera className="h-5 w-5" />
                      <span>Captura tu Sonrisa</span>
                    </span>
                    {(cameraActive || capturedImage) && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-white text-white hover:bg-white/10"
                        onClick={reiniciarSimulacion}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Reiniciar
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
                    {!cameraActive && !capturedImage && !simulationActive && (
                      <div className="text-center text-white">
                        <Camera className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                        <h3 className="text-xl font-semibold mb-2">Comienza tu Simulación</h3>
                        <p className="text-gray-300 mb-6">
                          Activa la cámara para ver tu sonrisa perfecta
                        </p>
                        <Button 
                          onClick={iniciarCamara}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          <Camera className="h-4 w-4 mr-2" />
                          Activar Cámara
                        </Button>
                      </div>
                    )}

                    {cameraActive && (
                      <div className="relative w-full">
                        <video 
                          ref={videoRef} 
                          autoPlay 
                          playsInline 
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 border-4 border-purple-500 rounded-lg pointer-events-none">
                          <div className="absolute inset-4 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center">
                            <div className="text-center text-white bg-black/50 p-4 rounded-lg">
                              <Smile className="h-8 w-8 mx-auto mb-2" />
                              <p className="text-sm">Sonríe a la cámara</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <Button 
                            onClick={capturarFoto}
                            className="bg-white text-purple-600 hover:bg-gray-100"
                            size="lg"
                          >
                            <Camera className="h-5 w-5 mr-2" />
                            Capturar Foto
                          </Button>
                        </div>
                      </div>
                    )}

                    {capturedImage && !simulationActive && (
                      <div className="relative w-full">
                        <img 
                          src={capturedImage} 
                          alt="Imagen capturada" 
                          className="w-full h-auto"
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <div className="flex space-x-4">
                            <Button 
                              onClick={iniciarSimulacion}
                              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                              size="lg"
                            >
                              <Sparkles className="h-5 w-5 mr-2" />
                              Iniciar Simulación AR
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {isProcessing && (
                      <div className="text-center text-white">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
                        <h3 className="text-xl font-semibold mb-2">Procesando con IA...</h3>
                        <p className="text-gray-300">
                          Analizando tu sonrisa y generando simulaciones
                        </p>
                      </div>
                    )}

                    {simulationActive && arResults.length > 0 && (
                      <div className="w-full p-4">
                        <Tabs defaultValue="original" className="w-full">
                          <TabsList className="grid w-full grid-cols-4 mb-4">
                            <TabsTrigger value="original">Original</TabsTrigger>
                            <TabsTrigger value="dsd">DSD</TabsTrigger>
                            <TabsTrigger value="carillas">Carillas</TabsTrigger>
                            <TabsTrigger value="blanqueamiento">Blanqueamiento</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="original" className="text-center">
                            <img src={capturedImage!} alt="Original" className="w-full rounded-lg mb-4" />
                            <p className="text-white bg-black/50 p-2 rounded">Tu sonrisa actual</p>
                          </TabsContent>
                          
                          {tratamientos.map((tratamiento) => (
                            <TabsContent key={tratamiento.id} value={tratamiento.id} className="text-center">
                              <div className="relative">
                                <img 
                                  src={tratamiento.despues} 
                                  alt={`Simulación ${tratamiento.nombre}`} 
                                  className="w-full rounded-lg mb-4"
                                />
                                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                  Simulación AR
                                </div>
                              </div>
                              <div className="bg-black/50 text-white p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">{tratamiento.nombre}</h4>
                                <p className="text-sm mb-2">{tratamiento.descripcion}</p>
                                <div className="flex justify-between text-sm">
                                  <span>Precio: {tratamiento.precio}€</span>
                                  <span>Tiempo: {tratamiento.duracion}</span>
                                </div>
                              </div>
                            </TabsContent>
                          ))}
                        </Tabs>
                      </div>
                    )}

                    <canvas ref={canvasRef} className="hidden" />
                  </div>
                </CardContent>
              </Card>

              {/* AR Controls */}
              {simulationActive && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Sliders className="h-5 w-5 text-purple-600" />
                      <span>Controles de Simulación</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label htmlFor="brightness">Brillo/Blanqueamiento</Label>
                        <span className="text-sm text-gray-600">{brightnessLevel[0]}/10</span>
                      </div>
                      <Slider
                        value={brightnessLevel}
                        onValueChange={setBrightnessLevel}
                        max={10}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label htmlFor="alignment">Alineación</Label>
                        <span className="text-sm text-gray-600">{alignmentLevel[0]}/10</span>
                      </div>
                      <Slider
                        value={alignmentLevel}
                        onValueChange={setAlignmentLevel}
                        max={10}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label htmlFor="shape">Forma Dental</Label>
                        <span className="text-sm text-gray-600">{shapeLevel[0]}/10</span>
                      </div>
                      <Slider
                        value={shapeLevel}
                        onValueChange={setShapeLevel}
                        max={10}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    <div className="flex space-x-4">
                      <Button 
                        onClick={descargarResultado}
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Descargar
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Compartir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-purple-600" />
                    <span>Tratamientos Disponibles</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tratamientos.map((tratamiento) => (
                    <Card 
                      key={tratamiento.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedTreatment === tratamiento.id ? 'ring-2 ring-purple-500 bg-purple-50' : ''
                      }`}
                      onClick={() => setSelectedTreatment(tratamiento.id)}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{tratamiento.nombre}</h3>
                        <p className="text-sm text-gray-600 mb-3">{tratamiento.descripcion}</p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-bold text-purple-600">{tratamiento.precio}€</span>
                          <span className="text-gray-500">{tratamiento.duracion}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>

              {arResults.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-green-600" />
                      <span>Resultados de IA</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {resultadosSimulacion.map((resultado) => (
                      <div key={resultado.id} className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2">{resultado.tratamiento}</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>Mejora estética:</span>
                            <span className="font-semibold text-green-600">{resultado.mejora}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Aumento confianza:</span>
                            <span className="font-semibold text-blue-600">{resultado.confianza}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Satisfacción:</span>
                            <span className="font-semibold text-purple-600">{resultado.satisfaccion}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tiempo resultado:</span>
                            <span className="font-semibold text-orange-600">{resultado.tiempo}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">¿Te gusta el resultado?</h3>
                  <p className="text-sm text-purple-100 mb-4">
                    Agenda tu consulta gratuita para hacer realidad tu sonrisa perfecta
                  </p>
                  <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Agendar Consulta GRATIS
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tecnología de Vanguardia</h2>
              <p className="text-xl text-purple-100">
                Simulador más avanzado de España con IA y Realidad Aumentada
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Eye className="h-12 w-12 mx-auto mb-4 text-purple-200" />
                <h3 className="text-xl font-semibold mb-2">IA Avanzada</h3>
                <p className="text-purple-100">
                  Algoritmos de deep learning para predicciones precisas
                </p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-purple-200" />
                <h3 className="text-xl font-semibold mb-2">Tiempo Real</h3>
                <p className="text-purple-100">
                  Visualización instantánea de resultados con AR
                </p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-purple-200" />
                <h3 className="text-xl font-semibold mb-2">95% Precisión</h3>
                <p className="text-purple-100">
                  Resultados validados por miles de casos reales
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}