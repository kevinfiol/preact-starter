# Preact Starter

A minimal Preact starter project using [rollup](http://rollupjs.org/), [modular-css](https://m-css.com/), [tailwind](https://tailwindcss.com/), and [ospec](https://github.com/MithrilJS/mithril.js/tree/next/ospec) for testing.

## Why?

I was preparing to teach front-end web development to my cousin and wanted to ease the transition into using npm, bundlers, and UI libraries. I found that while both `preact-cli` and `create-react-app` simplify the creation and bootstrapping of a modern client application, they also intentionally obfuscate a lot for the sake of simplicity, and both are *loaded* with dependencies. The end result is a whole lotta "magic" which I try to avoid when teaching.

## Disclaimer

This project uses [sucrase](https://github.com/alangpierce/sucrase) as a transpiler as opposed to Babel in order to optimize bundle build times, and also minimize dependencies. Sucrase is fine for production builds **so long as you're OK with only supporting modern browsers**. For that reason, don't expect this to work with IE11. Use a [modern browser](https://firefox.com).