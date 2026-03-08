# Integrated Main Version

Dies ist die direkt vorbereitete Hauptversion.

## Ziel
Nicht nur Archiv neben Archiv, sondern eine Arbeitsbasis, in der:

- die sofort startbare Runtime vorhanden ist
- der Legacy-Code direkt im selben Projektordner liegt
- die Brain-Bridge unter `src/integration/` eingebaut ist
- der Server eine Legacy-Übersicht per API ausliefert
- eine zusätzliche Integrationsseite existiert: `/integration.html`

## Start

```bash
npm install
npm start
```

## Danach öffnen

```text
http://localhost:3000
http://localhost:3000/dashboard.html
http://localhost:3000/integration.html
```

## Wichtiger ehrlicher Hinweis

Die Legacy-Dateien sind jetzt direkt in dieser Hauptversion enthalten.
Sie sind aber nicht vollständig automatisch in denselben Runtime-Codefluss transformiert worden, weil der ursprüngliche Upload keine komplette produktionsreife Root-Konfiguration mitgeliefert hat.

Diese Version ist deshalb:
- stärker integriert als die Master-Version
- direkt nutzbar
- gut vorbereitet für die nächste echte Dateifusion
