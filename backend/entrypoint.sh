#!/bin/sh
set -e

if [[ "$STARTUP_MODE" == "development" ]]
then
    npm run start:dev
elif [[ "$STARTUP_MODE" == "production" ]]
then
    npm run build
    npm run start:prod
elif [[ -z "$STARTUP_MODE" ]]
then
    echo "No STARTUP_MODE specified. Please specify a STARTUP_MODE environment variable."
    exit 1
else
    echo "Invalid STARTUP_MODE specified. Please check your STARTUP_MODE environment variable."
    exit 1
fi
