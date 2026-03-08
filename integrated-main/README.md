# MMORPG Complete Agent Framework

Ein startbares Starter-Framework für ein browserbasiertes MMORPG mit:

- Node.js Server
- WebSocket Multiplayer
- Three.js Client
- Chunk Streaming
- 13 Heuristik-Agenten
- zentralem World Brain
- Blackboard / Orchestrator
- einfacher Economy- und Threat-Simulation
- Nocode-Installationsanleitung für Agenten oder Hilfs-AIs

## Schnellstart

```bash
npm install
npm start
```

Danach im Browser öffnen:

```text
http://localhost:3000
```

## Was dieses Paket ist

Dies ist ein **Starter-Framework**. Es ist absichtlich überschaubar gebaut, damit du es sofort erweitern kannst.

## Was es noch nicht ist

- kein fertiges AAA-MMORPG
- kein echter Account-Service
- keine persistente Produktionsdatenbank
- kein vollständiges Combat-System
- kein Auth-Backend
- keine echte Asset-Pipeline

## Kernidee

Der **World Brain** sitzt mitten im Server und beobachtet Weltzustand, Spieler, Chunks, Threat-Level, Economy und Social-Signale.
13 Agenten schlagen Aktionen vor.
Der Orchestrator wählt pro Tick kontrolliert aus, was wirklich passieren darf.

## Dateien

- `src/server/index.js` - Startpunkt
- `src/server/net/GameServer.js` - HTTP + WebSocket
- `src/server/world/GameWorld.js` - Weltzustand + Tick
- `src/server/brain/WorldBrain.js` - Agentenzentrale
- `src/server/brain/Orchestrator.js` - Anti-Rekursion und Aktionswahl
- `public/` - einfacher Three.js Client
- `docs/NOCODE_AGENT_INSTALL.md` - Anleitung für No-Code-Agenten
