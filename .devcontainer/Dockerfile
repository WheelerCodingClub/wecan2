FROM mcr.microsoft.com/devcontainers/javascript-node

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends sqlite3

RUN su node -c "npm install -g pnpm"
