#!/bin/bash

set -e

if [ -z "$POSTGRES_USER" ]; then
    echo "POSTGRES_USER is not set"
    exit 1
fi

if [ -z "$POSTGRES_PASSWORD" ]; then
    echo "POSTGRES_PASSWORD is not set"
    exit 1
fi

if [ -z "$POSTGRES_DB" ]; then
    echo "POSTGRES_DB is not set"
    exit 1
fi

if [ -z "$APPLICATION_USER" ]; then
    echo "APPLICATION_USER is not set"
    exit 1
fi

if [ -z "$APPLICATION_PASSWORD" ]; then
    echo "APPLICATION_PASSWORD is not set"
    exit 1
fi

if [ -z "$APPLICATION_SCHEMA" ]; then
    echo "APPLICATION_SCHEMA is not set"
    exit 1
fi
