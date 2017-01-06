<p align="center"><img width="400" src="https://raw.githubusercontent.com/nuxt/adonuxt/master/template/resources/assets/img/logo.png"></p>

# AdoNuxt

> [AdonisJS](http://adonisjs.com/) + [Nuxt.js](https://nuxtjs.org) = :fire:

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```bash
vue init nuxt/adonuxt <project-name>
cd <project-name> # move to your project
mv .env.example .env # Add environment variables for Adonis
chmod +x ./ace # Set ace as executable
npm install # or yarn install
```

## Features

See [AdonisJS features](http://adonisjs.com/docs/3.2/overview) and [Nuxt.js features](https://nuxtjs.org/guide/#features).

## AdonisJS Changes

- No more `public` directory, use `resources/static/` instead.
- No more `resources/views` directory.

## Nuxt.js Changes

- The `nuxt.config.js` file is now in `config/nuxt.js`.
- The Nuxt project directory is `resources`.

## Commands

| Command | Description |
|---------|-------------|
| npm run dev | Start AdonisJS server in development with Nuxt.js in dev mode (hot reloading). Listen on [http://localhost:3333](http://localhost:3333). |
| npm run build | Build the nuxt.js web application for production. |
| npm start | Start AdonisJS server in production. |

## Live Demo

[https://ado.nuxtjs.org](https://ado.nuxtjs.org)

## Documentation

- [AdonisJS](http://adonisjs.com/docs/)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)

## Licenses

- [AdonisJS license](https://github.com/adonisjs/adonis-framework/blob/develop/LICENSE.txt)
- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)
