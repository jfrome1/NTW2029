// src/scripts/nutshell-config.js
document.addEventListener("DOMContentLoaded", function() {
    if (typeof Nutshell !== 'undefined') {
      Nutshell.setOptions({
        startOnLoad: true,
        lang: 'en',
        dontEmbedHeadings: true,
      });
    }
  });
