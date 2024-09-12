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

## Goals

This will be a website where people can post their clubs and activities on, and (if possible) share announcements to users who are in the club.

### Things to do

- [ ] home page (honestly, this could probably just be a port of the old home page)
  - [ ] design
  - [ ] layout
- [ ] club discovery page
  - [ ] design
  - [ ] layout
  - [ ] functionality
- [ ] club management page
  - [ ] design
  - [ ] layout
  - [ ] functionality
- [ ] club announcements page
  - [ ] design
  - [ ] layout
  - [ ] functionality
- [ ] login page
  - [ ] design
  - [ ] layout
  - [ ] functionality
  - [ ] authentication
- [ ] backend
  - [x] email/password authentication
  - [ ] OAuth 2.0 authentication
  - [ ] database
    - [ ] provider
      - probably PostgreSQL from somewhere, could be on the same server
    - [x] migrations
    - we need to store:
      - user info
        - [x] basic account information (name, email, password)
        - [ ] session data
        - [ ] OAuth 2.0 data
        - as it is a club discovery site, I don't imagine there being much front-facing user information, so very little profile data. probably just names and profile pictures
      - club info
        - [x] name/description
        - [ ] tags/keywords/categories for search
        - [x] visibility: hidden from search (unlisted) / hidden from view (private)
        - [ ] logo image
        - [ ] banner image
        - ...and more? contacts, meeting times and locations, people involved (leadership/sponsor?), etc.
      - club posts
        - [ ] title/content
        - [ ] banner image?
      - club access
        - there needs to be a permission system. a club owner must be able to appoint users to edit club information and (separately!) appoint users to make posts and so on.
        - there likely also needs to be admin users that can edit any club in case a Situation happens, but that is a separate thing
  - [ ] functions to get info from database and modify data in database
