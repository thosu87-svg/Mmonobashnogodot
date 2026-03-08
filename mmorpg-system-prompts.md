# MMORPG System Generation Prompts

This document defines system templates and reasoning patterns that AI assistants should use when implementing MMORPG systems inside this repository.

The AI should treat this file as a **library of MMORPG engine design patterns**.

When new features are requested the AI should reference these templates.

---

# Core System Design Pattern

Every gameplay system should follow the same structure.

Example pattern:

systemNameSystem.js

Responsibilities

- manage state
- process events
- update entities
- communicate with other systems

Example structure

class CombatSystem {

 constructor(world) {
  this.world = world
 }

 update(delta) {

 }

 handleEvent(event) {

 }

}

Systems should be loosely coupled.

Avoid direct dependencies between unrelated systems.

---

# Chunk Streaming World System

Purpose

Load and unload world areas dynamically to support large maps.

Components

chunkManager  
chunkLoader  
chunkCache  

Example logic

player moves  
→ determine current chunk  
→ load nearby chunks  
→ unload distant chunks  

Recommended chunk size

64 x 64 meters

Server should track:

activeChunks  
playersPerChunk  
npcSpawns

---

# NPC AI System

Purpose

Control behavior of non-player characters.

Core components

npcManager  
behaviorSystem  
pathfinding  

NPC states

idle  
wander  
patrol  
chase  
attack  
return  

Example state machine

if playerInRange

 switchTo("chase")

if distance < attackRange

 switchTo("attack")

Pathfinding should use grid or navmesh algorithms.

Prefer A* pathfinding.

---

# Combat System

Purpose

Resolve all combat interactions.

Combat runs server-side.

Combat features

damage formulas  
cooldowns  
critical hits  
status effects  

Example damage calculation

damage = (attackPower * skillModifier) - defense

Combat events

attack  
skillCast  
damage  
death  

All combat must be deterministic.

---

# Skill System

Purpose

Manage player abilities.

Skills must include

cooldown  
resource cost  
scaling formula  
targeting type  

Example skill data

fireball

cooldown = 5  
manaCost = 20  
damageModifier = 1.5  

Skills should be data-driven using JSON or database records.

---

# Inventory System

Purpose

Store and manage player items.

Inventory features

stackable items  
equipment slots  
item rarity  
durability  

Example item

id: iron_sword

type: weapon  
rarity: common  
damage: 12  

Equipment slots

head  
chest  
legs  
weapon  
offhand  

---

# Crafting System

Purpose

Allow players to create items from resources.

Core elements

recipes  
materials  
crafting stations  

Example recipe

iron_sword

requires

iron_ingot x3  
wood_handle x1  

produces

iron_sword

Crafting should consume resources.

---

# Economy Simulation System

Purpose

Create a dynamic in-game economy.

Core features

npc merchants  
player trading  
auction house  
price simulation  

Example price rule

price = basePrice * demandFactor / supplyFactor

The economy should avoid infinite inflation.

Item sinks should exist.

Examples

durability loss  
crafting costs  
npc tax

---

# Guild System

Purpose

Support social gameplay.

Guild features

guild creation  
guild chat  
guild storage  
guild ranks  

Optional features

guild territory  
guild wars  

---

# Quest System

Purpose

Guide players through game content.

Quest types

kill quests  
collect quests  
escort quests  
exploration quests  

Quest data example

quest

id  
title  
description  
objectives  
rewards  

---

# Procedural Dungeon System

Purpose

Generate replayable dungeon content.

Dungeon generator should create

layout  
enemy groups  
loot tables  

Example dungeon flow

generate rooms  
connect corridors  
spawn enemies  
generate boss  

Dungeons should scale with player level.

---

# Procedural Loot System

Purpose

Generate varied item rewards.

Loot should consider

enemy type  
player level  
rarity tables  

Example rarity table

common 70%  
rare 20%  
epic 9%  
legendary 1%

---

# Pathfinding System

Purpose

Allow NPCs to navigate the world.

Recommended algorithm

A*

Alternative

navigation mesh

Pathfinding must consider

terrain obstacles  
dynamic entities  
chunk boundaries

---

# Rendering Integration

Client uses Three.js.

Rendering systems may include

entityRenderer  
animationSystem  
particleSystem  

Performance guidelines

use instanced meshes  
reduce draw calls  
use texture atlases

---

# Networking System

Purpose

Synchronize world state between server and clients.

Use event based networking.

Example events

move  
attack  
chat  
npcSpawn  
itemPickup  

Avoid sending entire entity lists.

Use delta updates.

---

# Performance Optimization System

AI should optimize performance using

object pools  
spatial partitioning  
event queues  

Recommended spatial structures

quadtrees  
grids  

---

# Long Term System Expansion

Future systems may include

mount system  
player housing  
territory control  
player cities  
naval travel  

AI assistants should design systems so they can expand later.
