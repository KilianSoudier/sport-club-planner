#!/bin/sh
set -e

# If /app/node_modules is empty (named volume), populate it from the image copy
if [ ! -d /app/node_modules ] || [ -z "$(ls -A /app/node_modules 2>/dev/null || true)" ]; then
  echo "Populating /app/node_modules from image cache..."
  mkdir -p /app/node_modules
  cp -a /node_modules_image/. /app/node_modules/
  echo "node_modules populated"
fi

# Exec the given command
exec "$@"
