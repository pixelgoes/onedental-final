import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag, Share2, Heart, Calendar, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const response = await fetch('/data/blog-posts.json');
        const posts = await response.json();
        
        const foundPost = posts.find((p: BlogPost) => p.slug === slug);
        if (foundPost) {
          setPost(foundPost);
          
          // Encontrar posts relacionados (misma categoría)
          const related = posts
            .filter((p: BlogPost) => p.category === foundPost.category && p.id !== foundPost.id)
            .slice(0, 3);
          setRelatedPosts(related);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading post:', error);
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  useEffect(() => {
    // Actualizar meta tags
    if (post) {
      document.title = post.metaTitle;
      
      // Meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', post.metaDescription);
      }
      
      // Meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', post.keywords.join(', '));
      }
    }
  }, [post]);

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copiar URL
      navigator.clipboard.writeText(window.location.href);
      alert('URL copiada al portapapeles');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando artículo...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-8">Lo sentimos, no pudimos encontrar el artículo que buscas.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = (content: string) => {
    // Convertir markdown básico a HTML
    let html = content
      .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
      .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h3>')
      .replace(/#### (.*)/g, '<h4 class="text-lg font-bold text-gray-900 mt-4 mb-2">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/- (.*)/g, '<li class="mb-2">$1</li>');

    // Envolver listas
    html = html.replace(/(<li class="mb-2">.*<\/li>)/gs, '<ul class="list-disc pl-6 mb-6 space-y-2">$1</ul>');
    
    // Agregar párrafos
    html = '<p class="mb-4">' + html + '</p>';

    return { __html: html };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <nav className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Header del Artículo */}
      <article className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Botón Volver */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5" />
              Volver al blog
            </Link>

            {/* Metadatos */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Descripción */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.description}
            </p>

            {/* Acciones */}
            <div className="flex items-center gap-4 mb-12">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  liked
                    ? 'bg-red-100 text-red-600 hover:bg-red-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
                Me gusta
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Share2 className="h-5 w-5" />
                Compartir
              </button>
            </div>

            {/* Imagen Principal */}
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-12">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenido */}
            <div 
              className="prose prose-lg prose-blue max-w-none"
              dangerouslySetInnerHTML={renderContent(post.content)}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Etiquetas</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <Tag className="h-4 w-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Te ha resultado útil este artículo?</h3>
              <p className="text-blue-100 mb-6">
                Si tienes alguna pregunta o quieres programar una consulta, no dudes en contactarnos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contactar ahora
                </Link>
                <Link
                  to="/servicios"
                  className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Ver servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Artículos Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Artículos relacionados
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <div className="aspect-video bg-gray-200 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                            {relatedPost.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {relatedPost.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {relatedPost.description}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
