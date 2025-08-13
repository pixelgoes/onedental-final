const CACHE_NAME = 'onedental-v1.0.0';
const OFFLINE_URL = '/offline.html';

// Recursos críticos para funcionalidad offline
const CRITICAL_RESOURCES = [
  '/',
  '/offline.html',
  '/calculadora-precios',
  '/tour-virtual',
  '/primera-consulta-gratuita',
  '/urgencias-dentales',
  '/manifest.json',
  '/data/clinic-info.json',
  '/data/services-detail.json',
  '/images/digital-smile-design.JPG',
  '/images/doctor-profesional.jpg',
  '/images/clinica-moderna.jpg'
];

// Recursos de imágenes importantes
const IMAGE_RESOURCES = [
  '/images/tecnologia-dental.jpg',
  '/images/equipo-dental.jpg',
  '/images/instalaciones/recepcion-moderna.jpg',
  '/images/instalaciones/gabinete-tratamiento.jpg'
];

// Instalación del service worker
self.addEventListener('install', event => {
  console.log('Service Worker instalándose...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => self.skipWaiting())
  );
});

// Activación del service worker
self.addEventListener('activate', event => {
  console.log('Service Worker activándose...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia de cache
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Manejar navegación (páginas HTML)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.open(CACHE_NAME)
            .then(cache => {
              return cache.match(OFFLINE_URL);
            });
        })
    );
    return;
  }

  // Estrategia Cache First para recursos estáticos
  if (event.request.destination === 'image' || 
      event.request.destination === 'style' || 
      event.request.destination === 'script' ||
      event.request.destination === 'font') {
    
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          
          return fetch(event.request)
            .then(fetchResponse => {
              if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                return fetchResponse;
              }

              const responseToCache = fetchResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });

              return fetchResponse;
            });
        })
    );
    return;
  }

  // Estrategia Network First para API y datos dinámicos
  if (event.request.url.includes('/data/') || event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // Por defecto, intentar la red primero
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

// Manejo de mensajes desde la aplicación
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Notificaciones push (estructura preparada)
self.addEventListener('push', event => {
  console.log('Push recibido:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'Nueva notificación de OneDental',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver más',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: '/icons/xmark.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('OneDental Zaragoza', options)
  );
});

// Manejo de clics en notificaciones
self.addEventListener('notificationclick', event => {
  console.log('Notificación clickeada:', event);
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'close') {
    // Simplemente cerrar la notificación
  } else {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Sincronización en segundo plano
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Sincronización en segundo plano');
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Aquí se puede implementar sincronización de datos
    console.log('Realizando sincronización...');
    
    // Por ejemplo, enviar formularios pendientes
    const pendingForms = await getStoredForms();
    
    for (const form of pendingForms) {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        // Eliminar formulario de almacenamiento local una vez enviado
        await removeStoredForm(form.id);
      } catch (error) {
        console.log('Error enviando formulario:', error);
      }
    }
  } catch (error) {
    console.log('Error en sincronización:', error);
  }
}

// Funciones auxiliares para manejo de datos offline
async function getStoredForms() {
  // Simulación - en una implementación real, esto vendría de IndexedDB
  return [];
}

async function removeStoredForm(formId) {
  // Simulación - en una implementación real, esto eliminaría de IndexedDB
  console.log('Formulario enviado:', formId);
}

// Actualización de cache cuando hay nuevos recursos
self.addEventListener('fetch', event => {
  // Precargar recursos importantes cuando se detecta una mejora de red
  if (event.request.url.includes('critical-update')) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          return cache.addAll(IMAGE_RESOURCES);
        })
    );
  }
});
