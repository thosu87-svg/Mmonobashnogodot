# MASTER MERGE PLAN

## Ziel
Deinen vorhandenen Legacy-Code schrittweise mit dem World-Brain-System zusammenführen.

## Kandidaten aus dem Legacy-Code
- `legacy-src/ai/` -> AI-Flows und Agentenlogik
- `legacy-src/backend/` -> Backend-Einstiegspunkte
- `legacy-src/components/game/` -> Spielnahe Clientlogik
- `legacy-src/app/dashboard/brain/` -> vorhandene Brain-Oberflächen
- `legacy-src/firebase/` -> Persistenz / Sync / App-State Brücken

## Geplanter Einbau
1. Legacy-Metriken in `ServiceFieldAdapter` einspeisen
2. `HeuristicBrainBridge` pro Server-Tick aufrufen
3. Brain-Aktionen in bestehende Manager übersetzen
4. Dashboard aus `master-runtime/` oder Legacy-Dashboard als gemeinsame Brain-Ansicht vereinheitlichen

## Wichtig
Die Runtime in `master-runtime/` ist die Referenzimplementierung.
Der Legacy-Code bleibt unangetastet, bis die Schnittstellen klar gemappt sind.
