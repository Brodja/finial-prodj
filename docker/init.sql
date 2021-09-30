CREATE USER admin WITH PASSWORD 'Testpass!@34' SUPERUSER; 
CREATE USER librarian WITH PASSWORD 'Testpass!!#24';
CREATE DATABASE online_archive;
CREATE DATABASE online_archive_logs;
GRANT ALL PRIVILEGES ON DATABASE online_archive TO admin;
GRANT ALL PRIVILEGES ON DATABASE online_archive_logs TO admin;
