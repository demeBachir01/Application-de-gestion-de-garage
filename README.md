# 🚍 Application de gestion de garage

## 📌 Présentation

Application web de gestion de garage et de transport développée pour faciliter l'organisation et le suivi des activités d'un garage.

La plateforme permet de gérer les véhicules, les chauffeurs, les passagers, les bagages ainsi que les départs. Elle vise à centraliser les informations et à simplifier le suivi des opérations quotidiennes.

Le projet repose sur une architecture séparant le frontend et le backend afin de faciliter la maintenance et l'évolution de l'application.

## 🎯 Fonctionnalités principales

### 🚐 Gestion des véhicules
- Enregistrement et gestion des véhicules.
- Gestion des caractéristiques des véhicules.
- Prise en charge de différentes catégories de véhicules : 7 places, minibus et bus.

### 👨‍✈️ Gestion des chauffeurs
- Enregistrement des informations des chauffeurs.
- Consultation et gestion des profils des chauffeurs.

### 👥 Gestion des passagers
- Gestion des informations des passagers.
- Organisation des passagers associés aux différents départs.

### 🧳 Gestion des bagages
- Enregistrement et suivi des bagages.
- Association des bagages aux passagers et aux départs.

### 🗓️ Gestion des départs
- Organisation des départs des véhicules.
- Gestion des horaires et des destinations.
- Suivi des informations relatives aux trajets.

### 🔐 Authentification et sécurité
- Authentification des utilisateurs avec JWT (JSON Web Token).
- Gestion des jetons d'authentification.
- Protection des accès aux ressources backend.
- Validation des données côté frontend.

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
|---|---|
| Node.js | Développement du backend |
| Angular | Développement du frontend |
| JavaScript / TypeScript | Logique applicative |
| API REST | Communication frontend/backend |
| JWT | Authentification et sécurisation des accès |

## 🏗️ Architecture du projet

L'application est organisée en deux parties principales :

### Backend — Node.js

Le backend assure le traitement des requêtes, la logique métier, la gestion des données et la sécurisation des accès.

Organisation des composants :
- **Controllers** : gestion des requêtes HTTP et des réponses.
- **Models** : représentation des données.
- **Services** : implémentation de la logique métier.
- **Middleware** : gestion des traitements intermédiaires et de la sécurité.
- **index.js** : point d'entrée de l'application backend.

### Frontend — Angular

Le frontend fournit l'interface utilisateur permettant d'interagir avec les différentes fonctionnalités de gestion.

Il communique avec le backend à travers des API REST.

## 🔒 Sécurité

La sécurité de l'application repose notamment sur :
- L'authentification basée sur JWT.
- La gestion des jetons d'authentification.
- La protection des routes et des ressources backend.
- La validation des données saisies côté frontend.

## 🚀 Installation et exécution

### Prérequis

- Node.js et npm
- Angular CLI
- Git

### 1. Cloner le dépôt

```bash
git clone https://github.com/VOTRE_USERNAME/gestion-garage.git
```

### 2. Installer et démarrer le backend

```bash
cd gestion-garage/backend
npm install
```

Configurer les variables d'environnement nécessaires au fonctionnement du backend, notamment le port du serveur et le secret JWT.

Démarrer le serveur selon le script défini dans `package.json` :

```bash
npm start
```

### 3. Installer et démarrer le frontend

Dans un autre terminal :

```bash
cd gestion-garage/frontend
npm install
```

Lancer l'application Angular :

```bash
ng serve
```

Accéder ensuite à l'application depuis :

```text
http://localhost:4200
```

*Remarque : adapter les chemins des dossiers et les commandes de démarrage à la structure réelle du dépôt.*

## 👨‍💻 Objectifs techniques et compétences développées

Ce projet m'a permis de travailler sur plusieurs aspects du développement Full Stack :

- Conception et développement d'une application web avec Angular et Node.js.
- Séparation des responsabilités entre frontend et backend.
- Développement et consommation d'API REST.
- Organisation d'une architecture backend avec contrôleurs, modèles, services et middleware.
- Implémentation de l'authentification JWT.
- Protection des ressources backend et validation des données.
- Modélisation des entités et de leurs relations.

## 📈 Améliorations envisageables

- Mise en place de tests unitaires et d'intégration.
- Amélioration de la gestion des rôles et permissions.
- Conteneurisation avec Docker.
- Mise en place d'une documentation interactive des API avec Swagger.
- Amélioration du suivi et des statistiques des opérations du garage.

## 👤 Auteur

**BACHIR DEME**

Développeur Full Stack

- GitHub : https://github.com/demeBachir01

- Technologies : Angular · Node.js · JavaScript · API REST · JWT

---

