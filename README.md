# Neha-WECAN 2

## What is this?

This is a wheeler coding club group project. The purpose of it is to create a platform for people to find clubs/ activities and have a place for them to share information about them. This is very in development, so this will likely change often (can you tell I'm just yapping for a placeholder? :smile:)

## Developing

### Creating a database

A [PostgreSQL](https://www.postgresql.org/) database is required to run the site.

Once set up, you will need to create a `.env` file containing configuration environment variables:

```ini
AUTH_SECRET=abcdefghijklmnopqrstuvwxyz1234567890
PGHOST=localhost
PGPORT=5432
PGDATABASE=db
PGUSERNAME=user
PGPASSWORD=password
```

To migrate the database:

```bash
npm run migrate up
```

This must be done when the database is first created (**or when you create a new Codespace!**) and after any new migration is added.

For more information about how to use the migration tool, [ley](https://github.com/lukeed/ley):

```bash
npm run migrate -- --help
```

### Starting a server

After installing dependencies using `npm install`, start a development server:

```bash
npm run dev
```

Alternatively, start a development server and automatically open the site in a new browser tab:

```bash
npm run dev -- --open
```

### Codespaces

The repository has a development container configured for GitHub Codespaces. It includes a PostgreSQL server as well as several useful extensions.

Some notes:

- All of the Postgres environment variables are configured by the container and do not need to be provided in `.env`.
- SvelteKit's CSRF protection is disabled when the site is built in Codespaces.

## Building

To build a production version of the site:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

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
