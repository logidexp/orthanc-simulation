# DICOM Sync Service

A backend service for syncing DICOM studies from Orthanc to the database.

## Prerequisites

- Docker must be installed on your system

## Running the Server

I've added a make script to easily run the project. Use the following commands:

### Start the server

```bash
make start
```

This will build and start the Docker containers in detached mode.

### Stop the server

```bash
make stop
```

This will stop and remove the Docker containers.

## API Endpoints

### DICOM Sync

- **POST** `/api/dicom-sync` - Syncs Orthanc study instance UIDs to the database

## Database

The service uses PostgreSQL database running in Docker. Prisma migrations are automatically applied when the container starts.
