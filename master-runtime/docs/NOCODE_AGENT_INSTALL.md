# NOCODE AGENT INSTALLATION GUIDE

Diese Anleitung ist für einen No-Code-Agenten gedacht, der ein ZIP von einem Server bekommt und das Projekt lokal oder auf einem Server lauffähig machen soll.

## Ziel

Das ZIP entpacken, Abhängigkeiten installieren, Server starten und prüfen, dass der Browser-Client erreichbar ist.

## Schrittfolge für den No-Code-Agenten

### 1. ZIP holen
- Lade die Datei `mmorpg_complete_agent_framework.zip` herunter.
- Lege sie in einen Arbeitsordner.

### 2. ZIP entpacken
- Entpacke das ZIP vollständig.
- Öffne den entpackten Ordner.

Erwartete wichtige Dateien:
- `package.json`
- `src/server/index.js`
- `public/index.html`
- `docs/NOCODE_AGENT_INSTALL.md`

### 3. Node.js prüfen
Benötigt wird:
- Node.js 18 oder neuer
- npm

Prüfen mit:

```bash
node -v
npm -v
```

### 4. Abhängigkeiten installieren
Im Projektordner ausführen:

```bash
npm install
```

Das installiert:
- express
- ws

### 5. Server starten

```bash
npm start
```

Erwartete Ausgabe:
- HTTP läuft auf Port 3000
- World Tick aktiv
- Brain Tick aktiv

### 6. Browser-Test
Im Browser öffnen:

```text
http://localhost:3000
```

Erwartetes Ergebnis:
- eine einfache 3D-Szene
- ein Boden
- ein Spielerwürfel
- Verbindung zum WebSocket
- Bewegungsdaten gehen an den Server

### 7. Funktionsprüfung
Der Agent soll prüfen:

- Lädt die Seite ohne 404?
- Verbinden sich Browser und WebSocket?
- Kommen Weltzustände vom Server?
- Läuft der Server ohne Absturz mindestens 60 Sekunden?

### 8. Optional auf Server deployen
Für Linux-Server:

```bash
npm install
npm start
```

Optional mit Prozessmanager:

```bash
npm install -g pm2
pm2 start src/server/index.js --name mmorpg-brain
```

## Was der No-Code-Agent NICHT voraussetzen soll

- keine Datenbank nötig
- kein Docker nötig
- kein Build-Schritt nötig
- kein TypeScript nötig
- keine Asset-Imports nötig

## Wenn ein Fehler auftritt

### Port 3000 belegt
Setze Umgebungsvariable:

```bash
PORT=3010 npm start
```

### npm install schlägt fehl
- Prüfe Internetverbindung
- Prüfe Node-Version
- Lösche `node_modules`
- Starte `npm install` erneut

### Browser zeigt nichts
- Prüfe, ob `http://localhost:3000` geladen wurde
- Prüfe Browser-Konsole
- Prüfe Terminalausgabe des Servers

## Installations-Logik in einem Satz

Entpacken -> npm install -> npm start -> Browser öffnen -> Verbindung prüfen.
