STATIC DRAG-AND-DROP DEPLOY

Dieses Verzeichnis ist für Plattformen gedacht, auf denen der No-Code-Agent nur Dateien hochladen darf.

Enthalten:
- index.html
- dashboard.html
- integration.html
- main.js
- dashboard.js
- integration.js
- config.js

WICHTIG:
Vor dem Upload in `config.js` die WebSocket-Adresse des Spielservers eintragen.

Beispiel:
window.RUNTIME_CONFIG = {
  wsUrl: "wss://mein-server.example.com"
};

Danach dieses gesamte Verzeichnis per Drag-and-Drop auf ein statisches Hosting hochladen.
