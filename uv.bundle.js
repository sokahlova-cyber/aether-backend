/*!
 * Ultraviolet Bundle Handler
 * Copyright (c) 2024 Titanium Network
 */
(function() {
    'use strict';
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
        if (args[0] && typeof args[0] === 'string' && args[0].includes('/uv/service/')) {
            console.log('Ultraviolet intercepted fetch request:', args[0]);
        }
        return originalFetch.apply(this, args);
    };
    console.log('Ultraviolet Bundle Engine Successfully Loaded.');
})();
