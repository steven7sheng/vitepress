# Hello VitePress 
> from Gadget @ 2021.10.30

## What's VitePress?
visit [https://vitepress.vuejs.org/](https://vitepress.vuejs.org/)

## Getting Started
* step.1
```bash
mkdir @group/artifact && cd @group/artifact
```
* step.2
```bash
yarn init
```
* step.3
```bash
yarn add --dev vitepress
```
* step.4 
```bash
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
```bash
yarn docs:dev
```