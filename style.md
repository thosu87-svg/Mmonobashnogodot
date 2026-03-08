# MMORPG Development Style Guide

This repository contains a browser-based MMORPG built with Node.js and Three.js and deployed with Netlify.

AI assistants working on this repository must prioritize:

- scalability
- deterministic multiplayer logic
- modular architecture
- browser performance
- Android compatibility

---

## Core Philosophy

This project follows a **server-authoritative MMORPG architecture**.

The client renders visuals only.

The server is responsible for:

- combat calculations
- movement validation
- economy simulation
- item generation
- quest progression
- world simulation

Never trust the client.

---

## Technology Stack

Frontend
- Three.js
- WebGL
- WebSocket
- ES Modules

Backend
- Node.js
- WebSocket server
- deterministic simulation

Deployment
- Netlify
- GitHub
- CDN asset streaming

---

## Rendering Guidelines

Three.js rendering rules:

- minimize draw calls
- use instancing
- use GLTF assets
- enable frustum culling
- use texture atlases

Preferred 3D format:

.glb

---

## Performance Rules

The game must support:

100+ concurrent players per shard

AI systems should:

- reuse objects
- avoid allocations in game loops
- prefer spatial partitioning
- avoid expensive loops per frame

---

## Multiplayer Networking

Networking should send **event packets**, not full states.

Example packet:

{
 type: "move",
 id: "player123",
 x: 12.3,
 y: 5.1
}

---

## World System

The world uses chunk streaming.

Chunk size example:

64x64 meters

Chunks load dynamically depending on player location.

---

## Code Style

Language: JavaScript (ES Modules)

Naming rules:

camelCase → variables  
PascalCase → classes  

Avoid monolithic classes.

Prefer modular systems.

---

## Systems Architecture

Game systems must be modular.

Example:

systems/
 combatSystem.js
 inventorySystem.js
 npcSystem.js
 guildSystem.js
 economySystem.js

---

## Entity Structure

Entities should use component-style architecture.

Example:

entity
 id
 position
 components
  stats
  inventory
  skills

---

## AI Behavior Expectations

AI assistants must:

- generate production ready code
- maintain multiplayer stability
- extend existing systems instead of replacing them
- prioritize scalable architecture

---

## Long Term Vision

This MMORPG will include:

- procedural worlds
- economic simulation
- guild systems
- player trading
- procedural dungeons
- AI driven NPCs
