# Exercices Laravel (avec liens pratiques)

## Niveau 0 — Mise en place

### Exercice 0.1 — Installation & Configuration

Mettre en place le projet Laravel et connecter la BDD.

Docs :

- https://laravel.com/docs/11.x/installation
- https://laravel.com/docs/11.x/configuration#environment-configuration
- https://laravel.com/docs/11.x/migrations#running-migrations

## Niveau 1 — Migrations & Modèles

### Exercice 1.1 — Créer la table `clubs`

Docs :

- https://laravel.com/docs/11.x/migrations#creating-tables
- https://laravel.com/docs/11.x/eloquent#soft-deleting

### Exercice 1.2 — Créer la table `club_requests`

Docs :

- https://laravel.com/docs/11.x/migrations#columns
- https://laravel.com/docs/11.x/eloquent#defining-models

### Exercice 1.3 — Créer la table `members`

Docs :

- https://laravel.com/docs/11.x/migrations#indexes
- https://laravel.com/docs/11.x/eloquent#soft-deleting

### Exercice 1.4 — Créer la table `training_slots`

Docs :

- https://laravel.com/docs/11.x/migrations#column-method-time

### Exercice 1.5 — Créer la table `training_sessions`

Docs :

- https://laravel.com/docs/11.x/migrations#indexes

### Exercice 1.6 — Créer la table `signups`

Docs :

- https://laravel.com/docs/11.x/migrations#indexes
- https://laravel.com/docs/11.x/validation#rule-unique

### Exercice 1.7 — Créer la table `attendances`

Docs :

- https://laravel.com/docs/11.x/migrations#indexes

### Exercice 1.8 — Implémenter les relations Eloquent

Docs :

- https://laravel.com/docs/11.x/eloquent-relationships
- https://laravel.com/docs/11.x/eloquent-relationships#one-to-many-inverse

## Niveau 2 — Admin & Validation

### Exercice 2.1 — Ajouter `is_admin` dans `users`

Docs :

- https://laravel.com/docs/11.x/migrations#modifying-columns
- https://laravel.com/docs/11.x/eloquent-mutators#attribute-casting

### Exercice 2.2 — Middleware `is_admin`

Docs :

- https://laravel.com/docs/11.x/middleware

### Exercice 2.3 — Gestion des `club_requests`

Docs :

- https://laravel.com/docs/11.x/validation
- https://laravel.com/docs/11.x/controllers#resource-controllers

### Exercice 2.4 — Validation des clubs (`status = active`)

Docs :

- https://laravel.com/docs/11.x/queries#where-clauses
- https://laravel.com/docs/11.x/eloquent#local-scopes

## Niveau 3 — API Carte Publique

### Exercice 3.1 — GET `/api/clubs`

Docs :

- https://laravel.com/docs/11.x/routing#basic-routing
- https://laravel.com/docs/11.x/requests#query-string-parameters

### Exercice 3.2 — GET `/api/clubs/{club}`

Docs :

- https://laravel.com/docs/11.x/routing#route-model-binding
- https://laravel.com/docs/11.x/eloquent-relationships#eager-loading

## Niveau 4 — Auth & Rôles

### Exercice 4.1 — Installer Auth API

Docs :

- https://laravel.com/docs/11.x/sanctum
- https://laravel.com/docs/11.x/starter-kits#laravel-breeze

### Exercice 4.2 — Ajouter champ `role` dans users

Docs :

- https://laravel.com/docs/11.x/migrations#tables
- https://laravel.com/docs/11.x/eloquent#mass-assignment

### Exercice 4.3 — Policies / Gates

Docs :

- https://laravel.com/docs/11.x/authorization

## Niveau 5 — Clubs & Espace Admin

### Exercice 5.1 — POST `/api/clubs`

Docs :

- https://laravel.com/docs/11.x/validation#quick-displaying-the-validation-errors

### Exercice 5.2 — GET `/api/admin/clubs`

Docs :

- https://laravel.com/docs/11.x/eloquent-relationships#counting-related-models

### Exercice 5.3 — Update / Archive club

Docs :

- https://laravel.com/docs/11.x/controllers#resource-controllers

## Niveau 6 — Créneaux & Sessions

### Exercice 6.1 — CRUD `training_slots`

Docs :

- https://laravel.com/docs/11.x/routing#route-groups

### Exercice 6.2 — Générer sessions depuis slots

Docs :

- https://laravel.com/docs/11.x/helpers#method-now

### Exercice 6.3 — GET `/api/clubs/{club}/sessions`

Docs :

- https://laravel.com/docs/11.x/queries#additional-where-clauses

### Exercice 6.4 — GET `/api/sessions/{session}`

Docs :

- https://laravel.com/docs/11.x/eloquent-relationships#eager-loading

## Niveau 7 — Inscriptions

### Exercice 7.1 — Inscription membre

Docs :

- https://laravel.com/docs/11.x/validation#rule-unique
- https://laravel.com/docs/11.x/database#database-transactions

### Exercice 7.2 — Liste des inscrits

Docs :

- https://laravel.com/docs/11.x/eloquent-resources

### Exercice 7.3 — Inscription essai (3 max)

Docs :

- https://laravel.com/docs/11.x/queries#aggregates
- https://laravel.com/docs/11.x/validation#custom-validation-rules

## Niveau 8 — Présences

### Exercice 8.1 — Marquer présence

Docs :

- https://laravel.com/docs/11.x/validation#validating-arrays

### Exercice 8.2 — Récapitulatif de séance

Docs :

- https://laravel.com/docs/11.x/eloquent-resources
