import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, User, Tag, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
  featured: boolean;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

const BlogIndex: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [postsResponse, categoriesResponse] = await Promise.all([
          fetch('/data/blog-posts.json'),
          fetch('/data/blog-categories.json')
        ]);
        
        const postsData = await postsResponse.json();
        const categoriesData = await categoriesResponse.json();
        
        setPosts(postsData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading blog data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = posts.filter(post => post.featured);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section del Blog */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog OneDental
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Tu fuente de información sobre salud dental, tratamientos y consejos profesionales
            </p>
            
            {/* Barra de búsqueda */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contenido Principal */}
          <main className="lg:w-2/3">
            {/* Artículos Destacados */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Artículos Destacados</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <Link to={`/blog/${post.slug}`}>
                        <div className="aspect-video bg-gray-200 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <User className="h-4 w-4" />
                              {post.author}
                            </div>
                            <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                              Leer más →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Filtros de Categoría */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Todos los artículos
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Lista de Artículos */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {selectedCategory === 'all' ? 'Todos los Artículos' : `Artículos de ${selectedCategory}`}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <Link to={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 aspect-video md:aspect-square bg-gray-200 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {post.author}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span 
                                  key={tag}
                                  className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                                >
                                  <Tag className="h-3 w-3" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                              Leer más
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Categorías */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categorías</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{category.name}</div>
                    <div className="text-sm text-gray-600">{category.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Suscríbete a nuestro newsletter</h3>
              <p className="text-blue-100 mb-4">
                Recibe los últimos artículos y consejos dentales directamente en tu email.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>

            {/* Contacto */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">¿Tienes preguntas?</h3>
              <p className="text-gray-600 mb-4">
                Nuestro equipo está aquí para ayudarte con cualquier duda sobre tu salud dental.
              </p>
              <Link
                to="/contacto"
                className="inline-block w-full text-center bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contactar ahora
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
