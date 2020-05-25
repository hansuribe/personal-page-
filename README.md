# Svelte  + SPA + Tailwind

This is a project template for [Svelte](https://svelte.dev) apps using both [TailwindCSS](www.tailwindcss.com) and a [SPA router](https://github.com/ItalyPaleAle/svelte-spa-router/).


It lives at https://github.com/MBeliou/svelte-spa-tailwind.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit MBeliou/svelte-spa-tailwind svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv@next](https://github.com/lukeed/sirv/tree/next/packages/sirv-cli), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

Gzipping is enabled by default for production builds. 

## SPA

SPA is built using [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router/).

The router is pretty straightforward. See [here](https://github.com/ItalyPaleAle/svelte-spa-router/blob/master/Advanced%20Usage.md) for advanced usage.

## TailwindCSS

Tailwind is set up with this template.
CSS linting rules are set using stylelint and can be modified in `stylelint.config.js`.

If using VS Code, don't forget to disable both CSS : Validate <b>AND</b> Svelte > CSS > Diagnostics. Failure to do so will plague you with unwarrated errors. 

To diagnose your CSS, you can run:
```bash
npm run lint:css
```

You can find Tailwind's documentation [here](https://tailwindcss.com/docs/).

## TODO
This base app is pretty barebones. I plan on addressing this in the future.

* [ ] Setup tests
* [ ] Add some functionalities to the base application
* [ ] Add a catch all to the routing
* [ ] Showcase nested routing
* [ ] Svelte preprocess should support typescript. [Check it out.](https://github.com/kaisermann/svelte-preprocess#typescript)
