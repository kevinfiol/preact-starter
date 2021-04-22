# Preact Starter

## Status Update 02/23/2021

Since I've created this repository, [wmr](https://github.com/preactjs/wmr) is now a thing. I recommend taking a look at that for your Preact development needs. There is also [vite](https://github.com/vitejs/vite). If you have no need for CSS Modules and just need a bundler, consider using [esbuild](https://github.com/evanw/esbuild).

___

A minimal [Preact](https://preactjs.com/) starter project using [rollup](http://rollupjs.org/) for bundling, [modular-css](https://m-css.com/) for CSS modules, [basscss](https://basscss.com/) (w/ addons) for styles, and [ospec](https://github.com/MithrilJS/mithril.js/tree/next/ospec) for testing.

## Get Started

``` bash
# install
npm install

# run
npm run dev

# build
npm run build

# test
npm run test
```

## Why?

I was preparing to teach front-end web development to my cousin and wanted to ease the transition into using npm, bundlers, and UI libraries. I found that while both `preact-cli` and `create-react-app` simplify the creation and bootstrapping of a modern client application, they also intentionally obfuscate a lot for the sake of simplicity, and both are *loaded* with dependencies. The end result is a whole lot of "magic" which I try to avoid when teaching.

## State Management

I chose to implement the [Meiosis](https://meiosis.js.org/) pattern using the `useReducer` hook. The reducer is simply `(x, f) => f(x)`, as I use function patches to modify the state. I took this approach because it's straight-forward to write additional actions, it's easy to reason about your global state, and it requires *zero* additional dependencies. For a bit more terseness, I recommend using something like [mergerino](https://github.com/fuzetsu/mergerino) as your reducer.

## Disclaimer

This project uses [sucrase](https://github.com/alangpierce/sucrase) as a transpiler as opposed to Babel in order to optimize bundle build times, and also minimize dependencies. Sucrase is fine for production builds **so long as you're OK with only supporting modern browsers**. For that reason, don't expect this to work with IE11. See [buble](https://buble.surge.sh) if you need a zero-config transpiler with JSX support that also transpiles to ES5. Or [babel](https://babeljs.io/) if you want to go down that rabbithole.
