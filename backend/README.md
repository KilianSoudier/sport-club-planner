# Backend Laravel

Ce dossier est prévu pour contenir une application Laravel.

## Initialisation

Depuis ce dossier :

```bash
composer create-project laravel/laravel .
cp .env.example .env
php artisan key:generate
```

Ensuite, adapte `DB_*` dans `.env` si nécessaire (déjà configuré pour Docker).

## Lancer en local (hors Docker)

```bash
php artisan serve
```

Ensuite l'API sera disponible sur `http://localhost:8000`.
