# Base image
FROM postgres:13.4

# Environment variables
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=shop

# Copy initialization scripts to the container
COPY shopDB.sql /.

# Expose PostgreSQL port
EXPOSE 5432
