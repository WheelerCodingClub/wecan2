# Neha-WECAN 2

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/WheelerCodingClub/wecan2?quickstart=1)
<a href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FWheelerCodingClub%2Fwecan2">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://cdn.idx.dev/btn/open_dark_32.svg"
    >
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://cdn.idx.dev/btn/open_light_32.svg"
    >
    <img
      height="32"
      alt="Open in IDX"
      src="https://cdn.idx.dev/btn/open_purple_32.svg"
    >
  </picture>
</a>  
![GitHub Actions workflow status](https://img.shields.io/github/actions/workflow/status/WheelerCodingClub/wecan2/ci.yml)

## What is this?

This is a wheeler coding club group project. The purpose of it is to create a platform for people to find clubs/ activities and have a place for them to share information about them. This is very in development, so this will likely change often (can you tell I'm just yapping for a placeholder? :smile:)

## Goals

This will be a website where people can post their clubs and activities on, and (if possible) share announcements to users who are in the club.

## Developing

### Setting up the environment

1. [Install Node.js](https://nodejs.org/en/download/package-manager).
2. [Install pnpm](https://pnpm.io/installation).
3. Install [SQLite](https://www.sqlite.org/download.html). On many Linux distributions, the package is simply named `sqlite` or `sqlite3`. On Windows, you may install it by running `winget install SQLite.SQLite` in the command prompt.
4. Clone the repository:
   ```sh
   git clone https://github.com/WheelerCodingClub/wecan2.git
   cd wecan2
   ```
5. Install dependencies:
   ```sh
   pnpm install
   ```

#### Nix

If you are using Nix, see [`shell.nix`](shell.nix).

#### Development container

The repository has a [development container](https://containers.dev/) configured for GitHub Codespaces. It provides all the necessary packages.

#### Project IDX

The repository is also configured for [Project IDX](https://developers.google.com/idx).

### Configuration

Once set up, you will need to create a `.env` file containing configuration environment variables:

- `WECAN_SECRET`:

  The secret to sign user authentication tokens with. During development, this can be anything (see the example), but it should be securely generated in production. If it is changed, all existing tokens will be invalidated.

- `WECAN_DATABASE`:

  The location of the SQLite database.
  - Use `:memory:` for a temporary, in-memory database that is **erased** when the server stops.
  - Use a path like `./db.sqlite3` for a persistent one.

See [`.env.example`](.env.example) for example configuration.

### Starting a server

After installing dependencies using `pnpm install`, start a development server:

```sh
pnpm dev
```

Alternatively, start a development server and automatically open the site in a new browser tab:

```sh
pnpm dev --open
```

### Updating the database schema

Database migrations are handled by [Drizzle](https://orm.drizzle.team/).

After changing the database schema defined in [`schema.ts`](src/lib/server/db/schema.ts), tell Drizzle to generate the SQL to migrate the database:

```sh
pnpm generate
```

The server will automatically run all necessary database migrations when it starts.

## Building

To build a production version of the site:

```sh
pnpm build
```

You can preview the production build with `pnpm preview`.

> [!NOTE]
> SvelteKit's CSRF protection is disabled when the site is built inside GitHub Codespaces and Project IDX.
