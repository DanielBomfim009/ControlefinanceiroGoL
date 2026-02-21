// Service Worker para GoL Buy Smart PWA v4.0
const CACHE_NAME = 'golbuy-smart-v4';
const STATIC_ASSETS = [
  './index.html',
  './manifest.json',
  './logo-192.png',
  './logo-512.png'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker v4...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache aberto, adicionando arquivos estáticos...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Arquivos estáticos em cache');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Erro ao fazer cache:', error);
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Service Worker v4 ativado');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => {
              console.log('[SW] Removendo cache antigo:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] Cache limpo');
        return self.clients.claim();
      })
  );
});

// Interceptação de requisições - Network First com fallback para Cache
self.addEventListener('fetch', (event) => {
  // Ignorar requisições não-GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Ignorar requisições para APIs externas
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) {
    return;
  }

  // Ignorar requisições de extensões do browser
  if (url.pathname.startsWith('/_next/') || 
      url.pathname.startsWith('/api/') ||
      url.pathname.includes('chrome-extension')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clonar a resposta pois ela só pode ser consumida uma vez
        const responseClone = response.clone();
        
        // Salvar no cache
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseClone);
          });
        
        return response;
      })
      .catch(() => {
        // Se offline, tentar pegar do cache
        return caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            
            // Se não encontrar no cache, retornar a página principal
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            
            return new Response('Offline', { 
              status: 503, 
              statusText: 'Service Unavailable' 
            });
          });
      })
  );
});

// Sincronização em background (para funcionalidades futuras)
self.addEventListener('sync', (event) => {
  console.log('[SW] Sincronização em background:', event.tag);
});

// Receber mensagens do cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Push notifications (para funcionalidades futuras)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nova notificação do GoL Buy Smart',
    icon: './logo-192.png',
    badge: './logo-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('GoL Buy Smart', options)
  );
});

// Clique na notificação
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('./index.html')
  );
});

console.log('[SW] Service Worker v4 carregado com sucesso!');
