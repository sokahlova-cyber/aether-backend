/*!
 * Ultraviolet Script Request Handler
 * Copyright (c) 2024 Titanium Network
 */
"use strict";
const UltravioletHandler = {
    init: function() {
        console.log("Ultraviolet Handler initialized. Rewriting active page DOM configurations...");
        Object.defineProperty(document, 'domain', {
            get() { return location.hostname; },
            set(val) { console.log('Domain override prevented:', val); }
        });
    }
};
UltravioletHandler.init();
