/*!
 * Ultraviolet Service Worker Framework
 * Copyright (c) 2024 Titanium Network
 */
importScripts('uv.bundle.js');
importScripts('uv.config.js');

self.addEventListener('install', (event) => {
    console.log('Ultraviolet Service Worker successfully registered in browser container.');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    const url = event.request.url;
    if (url.includes('/uv/service/')) {
        console.log('Service Worker routing proxied address:', url);
    }
});
