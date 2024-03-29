# Neha-WECAN 2

## What is this?

This is a wheeler coding club group project. The purpose of it is to create a platform for people to find clubs/ activities and have a place for them to share information about them. This is very in development, so this will likely change often (can you tell I'm just yapping for a placeholder? :smile:)

## Developing

After installing dependencies using `npm install`, start a development server:

```bash
npm run dev
```

Alternatively, start a development server and automatically open the site in a new browser tab:

```bash
npm run dev -- --open
```

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
  - [ ] secure user authentication (likely using firebase?)
  - [ ] database
    - [ ] user info
    - [ ] club info
    - [ ] club posts and announcements
    - [ ] provider (likely firebase)
  - [ ] functions to get info from database and modify data in database (once again, firebase likely)
