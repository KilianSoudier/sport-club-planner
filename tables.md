# Structure des Tables

## users
- id
- name
- email (unique)
- email_verified_at
- password
- role (player, coach, manager)
- is_admin (bool, default false)
- remember_token
- timestamps

## clubs
- id
- name
- sport
- teams
- address (nullable)
- lat (decimal)
- lng (decimal)
- contact_email (nullable)
- contact_phone (nullable)
- created_by (FK users)
- approved_at (timestamp nullable)
- status (active, pending, archived)
- timestamps
- deleted_at

## club_requests
- id
- name
- sport
- address (nullable)
- lat
- lng
- requested_by (FK users nullable)
- notes (text nullable)
- status (pending, approved, rejected)
- decision_by (FK users nullable)
- decided_at (nullable)
- timestamps

## members
- id
- club_id (FK clubs)
- user_id (FK users nullable)
- name
- email (nullable)
- status (actif, suspendu, desinscrit)
- joined_at
- role (nullable)
- timestamps
- deleted_at

## training_slots
- id
- club_id (FK clubs)
- day_of_week
- time_start
- time_end
- activity
- location (nullable)
- created_by (FK users)
- active (bool)
- timestamps

## training_sessions
- id
- club_id (FK clubs)
- slot_id (FK training_slots nullable)
- start_at (datetime)
- end_at (datetime)
- max_participants (nullable)
- notes (text nullable)
- created_by (FK users)
- cancelled (bool)
- timestamps

## signups
- id
- session_id (FK training_sessions)
- user_id (FK users nullable)
- member_id (FK members nullable)
- status (confirmed, cancelled, pending)
- timestamps

## attendances
- id
- session_id (FK training_sessions)
- user_id (FK users nullable)
- member_id (FK members nullable)
- present (bool)
- note (text nullable)
- recorded_by (FK users)
- timestamps
