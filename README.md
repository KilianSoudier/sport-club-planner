# Sport Club Planner

Projet multi-conteneurs (Docker) avec :

- Frontend : React + Vite + Leaflet (dossier `frontend/`)
- Backend : Laravel (dossier `backend/`, à initialiser)
- Base de données : MySQL (définie dans `docker-compose.yml`)

## 1. Pré-requis

- Docker
- Docker Compose
- Node.js (si tu veux lancer le front en dehors de Docker)
- PHP & Composer (si tu veux initialiser Laravel en dehors de Docker)

## 2. Initialisation du backend Laravel

Dans le dossier racine du projet :

```bash
cd backend
composer create-project laravel/laravel .
```

Puis configure le fichier `.env` de Laravel avec ces paramètres :

```env
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=sportclubs
DB_USERNAME=sportuser
DB_PASSWORD=sportpass
```

Tu pourras ensuite lancer les migrations :

```bash
php artisan migrate
```

## 3. Frontend React + Leaflet

Le front est déjà initialisé avec Vite + React + Leaflet.

Pour l'utiliser hors Docker :

```bash
cd frontend
npm install
npm run dev
```

L'application sera accessible sur `http://localhost:5173` par défaut (ou port affiché dans la console).

## 4. Lancer avec Docker

Depuis la racine :

```bash
docker-compose up --build
```

If you run the app with Docker Compose in development, files are mounted into the containers so changes on your host are reflected instantly.

Notes for Docker Compose development:

- The frontend is configured to talk to the backend at the container hostname `backend:8000` (the compose service name). When accessing the frontend from your host browser, the frontend will proxy API calls to `http://backend:8000/api` inside the Docker network.
- On Windows, file watch events can be unreliable. The frontend service enables polling via the `CHOKIDAR_USEPOLLING=true` environment variable to make Vite reliably detect changes.

To start development with Docker Compose:

```powershell
docker compose up --build
```

Then open http://localhost:3000 in your browser.

Services exposés :

## 5. Feuilles de route Laravel

Tu peux suivre les étapes suivantes pour apprendre Laravel :

1. Créer une route API simple `/api/ping`
2. Créer les modèles & migrations : `Sport`, `Club`, `Federation`, `TrainingSession`, etc.
3. Ajouter des seeders pour avoir des clubs de test avec coordonnées
4. Créer un contrôleur API `ClubController` et exposer `/api/clubs`
5. Connecter le frontend React à `/api/clubs` pour afficher les clubs sur la carte
6. Mettre en place l'authentification (Breeze ou Sanctum)
7. Implémenter :
   - l'inscription des utilisateurs aux clubs
   - la gestion des séances d'entraînement
   - la limite de 3 séances d'essai pour les non-inscrits
   - le planning côté dirigeant avec nombre de participants

Tout le code côté Laravel reste à écrire pour que tu puisses apprendre pas à pas.
