import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  ShoppingCart, 
  Star, 
  Heart, 
  Search, 
  Filter, 
  Truck, 
  Shield, 
  Award,
  User,
  Plus,
  Minus,
  Eye,
  ThumbsUp,
  Package,
  CreditCard,
  Gift,
  Zap,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

export default function MarketplaceDental() {
  const [cart, setCart] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevancia');

  const categorias = [
    { id: 'todos', nombre: 'Todos los Productos', icon: '🦷' },
    { id: 'cepillos', nombre: 'Cepillos Eléctricos', icon: '🪥' },
    { id: 'irrigadores', nombre: 'Irrigadores Bucales', icon: '💧' },
    { id: 'pastas', nombre: 'Pastas Dentales', icon: '🧴' },
    { id: 'enjuagues', nombre: 'Enjuagues Bucales', icon: '🥤' },
    { id: 'blanqueamiento', nombre: 'Blanqueamiento', icon: '✨' },
    { id: 'protesis', nombre: 'Cuidado Prótesis', icon: '🦷' },
    { id: 'ortodoncias', nombre: 'Ortodoncias', icon: '🔧' },
    { id: 'accesorios', nombre: 'Accesorios', icon: '📦' }
  ];

  const productos = [
    {
      id: 'oral-b-genius-x',
      nombre: 'Oral-B Genius X 20000N',
      descripcion: 'Cepillo eléctrico con IA y app móvil',
      categoria: 'cepillos',
      precio: 179.99,
      precioOriginal: 249.99,
      descuento: 28,
      imagen: '/images/tecnologia-dental.jpg',
      rating: 4.8,
      reviews: 2847,
      enStock: true,
      etiquetas: ['Bestseller', 'IA', 'Bluetooth'],
      recomendadoPor: 'Dr. Onésimo',
      beneficios: ['Reduce placa 100% más', 'Protege encías', 'Blanquea dientes'],
      entrega: '24-48h',
      garantia: '2 años'
    },
    {
      id: 'waterpik-aquarius',
      nombre: 'Waterpik Aquarius WP-660',
      descripcion: 'Irrigador dental profesional con 10 niveles',
      categoria: 'irrigadores',
      precio: 89.99,
      precioOriginal: 119.99,
      descuento: 25,
      imagen: '/images/clinica-moderna.jpg',
      rating: 4.7,
      reviews: 1923,
      enStock: true,
      etiquetas: ['Profesional', '10 cabezales'],
      recomendadoPor: 'Dr. Onésimo',
      beneficios: ['Elimina 99.9% bacterias', 'Mejora salud encías', 'Masaje gingival'],
      entrega: '24-48h',
      garantia: '3 años'
    },
    {
      id: 'elmex-sensitive',
      nombre: 'Elmex Sensitive Professional',
      descripcion: 'Pasta dental para dientes sensibles',
      categoria: 'pastas',
      precio: 6.99,
      precioOriginal: 8.99,
      descuento: 22,
      imagen: '/images/blanqueamiento_1.jpg',
      rating: 4.6,
      reviews: 1456,
      enStock: true,
      etiquetas: ['Sensibilidad', 'Clínicamente probado'],
      recomendadoPor: 'Dr. Onésimo',
      beneficios: ['Alivio inmediato', 'Protección duradera', 'Fortalece esmalte'],
      entrega: '24h',
      garantia: 'Satisfacción garantizada'
    },
    {
      id: 'philips-zoom',
      nombre: 'Philips Zoom NiteWhite',
      descripcion: 'Kit blanqueamiento profesional nocturno',
      categoria: 'blanqueamiento',
      precio: 129.99,
      precioOriginal: 179.99,
      descuento: 28,
      imagen: '/images/blanqueamiento_5.jpg',
      rating: 4.9,
      reviews: 892,
      enStock: true,
      etiquetas: ['Profesional', 'Resultados rápidos'],
      recomendadoPor: 'Dr. Onésimo',
      beneficios: ['Hasta 8 tonos más blanco', 'Sin sensibilidad', 'Resultados en 7 días'],
      entrega: '48h',
      garantia: '30 días devolución'
    },
    {
      id: 'therabreath-enjuague',
      nombre: 'TheraBreath Enjuague Bucal',
      descripcion: 'Enjuague sin alcohol para mal aliento',
      categoria: 'enjuagues',
      precio: 12.99,
      precioOriginal: 16.99,
      descuento: 24,
      imagen: '/images/sonrisa-perfecta_3.jpg',
      rating: 4.5,
      reviews: 2103,
      enStock: true,
      etiquetas: ['Sin alcohol', 'Halitosis'],
      recomendadoPor: 'Dr. Onésimo',
      beneficios: ['Elimina mal aliento 24h', 'pH balanceado', 'Sin efectos secundarios'],
      entrega: '24h',
      garantia: 'Satisfacción garantizada'
    },
    {
      id: 'polident-3-minute',
      nombre: 'Polident Limpiador 3 Minutos',
      descripcion: 'Limpiador diario para prótesis dentales',
      categoria: 'protesis',
      precio: 8.99,
      precioOriginal: 11.99,
      descuento: 25,
      imagen: '/images/paciente-satisfecho_6.jpg',
      rating: 4.4,
      reviews: 756,
      enStock: true,
      etiquetas: ['Prótesis', 'Antibacterial'],
      recomendadoPor: 'Dr. Onésimo',
      beneficios: ['Elimina 99.9% bacterias', 'Sin daño a prótesis', 'Frescor duradero'],
      entrega: '24h',
      garantia: 'Satisfacción garantizada'
    }
  ];

  const suscripciones = [
    {
      id: 'higiene-basica',
      nombre: 'Plan Higiene Básica',
      precio: 19.99,
      descripcion: 'Productos esenciales cada mes',
      productos: ['Pasta dental', 'Cepillo manual', 'Enjuague bucal'],
      ahorro: '15%',
      popularidad: 85
    },
    {
      id: 'higiene-premium',
      nombre: 'Plan Higiene Premium',
      precio: 39.99,
      descripcion: 'Cuidado completo profesional',
      productos: ['Pasta premium', 'Cepillo eléctrico', 'Irrigador', 'Hilo dental'],
      ahorro: '25%',
      popularidad: 95
    },
    {
      id: 'familia-completa',
      nombre: 'Plan Familia Completa',
      precio: 69.99,
      descripcion: 'Para toda la familia (4 personas)',
      productos: ['Productos familia', 'Cepillos niños', 'Pastas específicas'],
      ahorro: '30%',
      popularidad: 78
    }
  ];

  const productosRecomendados = productos.filter(p => p.recomendadoPor === 'Dr. Onésimo').slice(0, 3);

  const productosFiltrados = productos.filter(producto => {
    const matchesCategory = selectedCategory === 'todos' || producto.categoria === selectedCategory;
    const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (producto: any) => {
    const existingItem = cart.find(item => item.id === producto.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === producto.id 
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...producto, cantidad: 1 }]);
    }
  };

  const removeFromCart = (productoId: string) => {
    setCart(cart.filter(item => item.id !== productoId));
  };

  const toggleFavorite = (productoId: string) => {
    if (favorites.includes(productoId)) {
      setFavorites(favorites.filter(id => id !== productoId));
    } else {
      setFavorites([...favorites, productoId]);
    }
  };

  const totalCarrito = cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);

  return (
    <>
      <Helmet>
        <title>Tienda Dental OneDental - Productos Recomendados</title>
        <meta name="description" content="Tienda online de productos dentales recomendados por Dr. Onésimo. Cepillos eléctricos, irrigadores, pastas y más con entrega 24h." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <ShoppingCart className="h-16 w-16 text-blue-200" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Tienda Dental OneDental
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Productos recomendados por el Dr. Onésimo para tu salud bucal
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Truck className="h-4 w-4 mr-2" />
                  Envío 24h GRATIS
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  Garantía Extendida
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Award className="h-4 w-4 mr-2" />
                  Calidad Profesional
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Buscar productos..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categorias.map(categoria => (
                    <SelectItem key={categoria.id} value={categoria.id}>
                      {categoria.icon} {categoria.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevancia">Relevancia</SelectItem>
                  <SelectItem value="precio-asc">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="precio-desc">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="rating">Mejor Valorados</SelectItem>
                  <SelectItem value="ventas">Más Vendidos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Filter className="h-5 w-5 text-blue-600" />
                    <span>Categorías</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categorias.map(categoria => (
                      <button
                        key={categoria.id}
                        onClick={() => setSelectedCategory(categoria.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedCategory === categoria.id 
                            ? 'bg-blue-100 text-blue-700 font-medium' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span className="mr-2">{categoria.icon}</span>
                        {categoria.nombre}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cart Summary */}
              {cart.length > 0 && (
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center space-x-2">
                        <ShoppingCart className="h-5 w-5 text-green-600" />
                        <span>Carrito ({cart.length})</span>
                      </span>
                      <span className="text-green-600 font-bold">{totalCarrito.toFixed(2)}€</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between text-sm">
                          <span className="flex-1">{item.nombre}</span>
                          <span className="font-medium">{item.cantidad}x {item.precio}€</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Finalizar Compra
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3 space-y-8">
              {/* Recommended by Dr. Onésimo */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <User className="h-8 w-8 text-blue-600" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Recomendados por Dr. Onésimo</h2>
                    <p className="text-gray-600">Productos seleccionados personalmente por nuestro especialista</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {productosRecomendados.map(producto => (
                    <Card key={producto.id} className="group hover:shadow-lg transition-all duration-300 border-blue-200">
                      <div className="relative">
                        <img 
                          src={producto.imagen} 
                          alt={producto.nombre}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-blue-600 text-white">
                            <Award className="h-3 w-3 mr-1" />
                            Dr. Onésimo
                          </Badge>
                        </div>
                        <button 
                          onClick={() => toggleFavorite(producto.id)}
                          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
                        >
                          <Heart className={`h-4 w-4 ${favorites.includes(producto.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                        </button>
                        {producto.descuento > 0 && (
                          <div className="absolute bottom-2 left-2">
                            <Badge className="bg-red-500 text-white">
                              -{producto.descuento}%
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                          {producto.nombre}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{producto.descripcion}</p>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(producto.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({producto.reviews})</span>
                        </div>

                        <div className="flex items-center space-x-2 mb-3">
                          {producto.etiquetas.map(etiqueta => (
                            <Badge key={etiqueta} variant="outline" className="text-xs">
                              {etiqueta}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-green-600">{producto.precio}€</span>
                            {producto.precioOriginal > producto.precio && (
                              <span className="text-sm text-gray-500 line-through ml-2">
                                {producto.precioOriginal}€
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-green-600">
                            <Truck className="h-4 w-4" />
                            <span>{producto.entrega}</span>
                          </div>
                        </div>

                        <Button 
                          onClick={() => addToCart(producto)}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          disabled={!producto.enStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {producto.enStock ? 'Añadir al Carrito' : 'Sin Stock'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Subscription Plans */}
              <section>
                <div className="flex items-center space-x-3 mb-6">
                  <Gift className="h-8 w-8 text-purple-600" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Planes de Suscripción</h2>
                    <p className="text-gray-600">Recibe productos de higiene automáticamente y ahorra</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {suscripciones.map(plan => (
                    <Card key={plan.id} className={`relative ${plan.popularidad > 90 ? 'ring-2 ring-purple-500' : ''}`}>
                      {plan.popularidad > 90 && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-purple-600 text-white px-4 py-1">
                            Más Popular
                          </Badge>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{plan.nombre}</h3>
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          {plan.precio}€<span className="text-sm text-gray-600">/mes</span>
                        </div>
                        <p className="text-gray-600 mb-4">{plan.descripcion}</p>
                        
                        <div className="space-y-2 mb-4">
                          {plan.productos.map(producto => (
                            <div key={producto} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm">{producto}</span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-green-50 p-3 rounded-lg mb-4">
                          <div className="flex items-center space-x-2 text-green-700">
                            <Zap className="h-4 w-4" />
                            <span className="font-semibold">Ahorras {plan.ahorro}</span>
                          </div>
                        </div>

                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          Suscribirse Ahora
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* All Products */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Todos los Productos ({productosFiltrados.length})
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productosFiltrados.map(producto => (
                    <Card key={producto.id} className="group hover:shadow-lg transition-all duration-300">
                      <div className="relative">
                        <img 
                          src={producto.imagen} 
                          alt={producto.nombre}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <button 
                          onClick={() => toggleFavorite(producto.id)}
                          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
                        >
                          <Heart className={`h-4 w-4 ${favorites.includes(producto.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                        </button>
                        {producto.descuento > 0 && (
                          <div className="absolute bottom-2 left-2">
                            <Badge className="bg-red-500 text-white">
                              -{producto.descuento}%
                            </Badge>
                          </div>
                        )}
                        {producto.recomendadoPor && (
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-blue-600 text-white text-xs">
                              <Award className="h-3 w-3 mr-1" />
                              Recomendado
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                          {producto.nombre}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{producto.descripcion}</p>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(producto.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({producto.reviews})</span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-green-600">{producto.precio}€</span>
                            {producto.precioOriginal > producto.precio && (
                              <span className="text-sm text-gray-500 line-through ml-2">
                                {producto.precioOriginal}€
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-green-600">
                            <Truck className="h-4 w-4" />
                            <span>{producto.entrega}</span>
                          </div>
                        </div>

                        <Button 
                          onClick={() => addToCart(producto)}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          disabled={!producto.enStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {producto.enStock ? 'Añadir al Carrito' : 'Sin Stock'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Por qué comprar en OneDental?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Truck className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">Envío 24h GRATIS</h3>
                <p className="text-blue-100">
                  Recibe tus productos en menos de 24 horas sin coste adicional
                </p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">Calidad Profesional</h3>
                <p className="text-blue-100">
                  Solo productos recomendados y utilizados por dentistas
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">Garantía Extendida</h3>
                <p className="text-blue-100">
                  Garantía ampliada y satisfacción 100% garantizada
                </p>
              </div>
              <div className="text-center">
                <User className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">Asesoría Especializada</h3>
                <p className="text-blue-100">
                  Consulta directa con Dr. Onésimo sobre productos
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}