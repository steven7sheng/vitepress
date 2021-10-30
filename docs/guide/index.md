# Hello VitePress 
> from Gadget @ 2021.10.30

## What's VitePress?
visit [https://vitepress.vuejs.org/](https://vitepress.vuejs.org/)

## Getting Started
* step.1
```sh
mkdir @group/artifact && cd @group/artifact
```
* step.2
```sh
yarn init
```
* step.3
```sh
yarn add --dev vitepress
```
* step.4 
```sh
mkdir docs && echo '# Hello VitePress'>docs/index.md
```
* step.5
```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```
* step.6
```sh
yarn docs:dev
```