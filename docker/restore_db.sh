#!/bin/bash
export PGPASSWORD="postgres"
pg_restore -h localhost -p 5432 -U postgres -d shop shopDB.sql