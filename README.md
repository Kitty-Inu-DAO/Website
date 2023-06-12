# 

[![Release Version](https://img.shields.io/github/release/Kitty-Inu-DAO/Website.svg)](https://github.com/Kitty-Inu-DAO/Website/releases/latest) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)


![Kitty Inu DAO](./public/img/kitty_logo.jpg)
# Kitty Inu DAO Website 

## Installation

### npm

The recommendation is to clone this repository and run:

```
npm install
```

Then 

```
npm run build

```

## Dependencies

### :mount_fuji: Features

- [x] Automatically inject r3f component in the Canvas
- [x] Support glsl imports
- [x] PWA Support
- [x] Layout for Canvas and DOM
- [x] Template for the meta data and header
- [x] Clean code using ESlint and Prettier
- [x] VSCode debug profiles for the server, Chrome, and Firefox

### :bullettrain_side: Architecture

Inform the nextjs page that the component is a Threejs component. For that, simply add the **r3f** property to the parent component.

```jsx
const Page = (props) => {
  return (
    <>
      <div>Hello !</div>
    </>
  )
}
// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => (
  <>
    <Shader />
  </>
)

export default Page
```

### :control_knobs: Available Scripts

- `yarn dev` - Next dev
- `yarn analyze` - Generate bundle-analyzer
- `yarn lint` - Audit code quality
- `yarn build` - Next build
- `yarn start` - Next start
- `yarn export` - Export to static HTML

### ⬛ Stack

- [`threejs`](https://github.com/mrdoob/three.js/) &ndash; A lightweight, 3D library with a default WebGL renderer.
- [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber) &ndash; A React renderer for Threejs on the web and react-native.
- [`@react-three/drei` - Optional](https://github.com/pmndrs/drei) &ndash; useful helpers for react-three-fiber
- [`@react-three/a11y` - Optional](https://github.com/pmndrs/react-three-a11y/) &ndash; Accessibility tools for React Three Fiber
- [`r3f-perf` - Optional](https://github.com/RenaudRohlinger/r3f-perf) &ndash; Tool to easily monitor react threejs performances.

## 

## Feedback
Please feel free to:

* submit suggestions and bug-reports at: <https://github.com/Kitty-Inu-DAO/Website/issues>
* send pull requests after forking: <https://github.com/Kitty-Inu-DAO/Website/>

## Copyright and License
see [COPYRIGHT](COPYRIGHT.md) and [LICENSE](LICENSE.md) files for copyright and license information.

### Licensed Works

All materials under `/public/3D/` are licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International. See [COPYRIGHT](COPYRIGHT.md) for more details. 


## Contributing 

- All contributions should be made as a pull request to the `dev` branch. Pull requests to `main` will be ignored. 

- PRs must include a concise but descriptive title of the feature, bug, chore, etc. the PR is addressing. 

- This repository follows conventional commit semantics. Please read here to ensure you understand the proper commit format: <https://www.conventionalcommits.org/en/v1.0.0/#summary>


## Deployment

- This repository uses Fleek for deployments of the `main` branch to IFPS. 
- ENS is used as the domain.

### Browsers with ENS support 

Production deployment at: <https://kitty-inu-dao.eth/>

### All Other Browsers:

#### Cloudflare with .link

Production deployment at: <https://kitty-inu-dao.eth.link/>

Centralized way to access information in the ENS from DNS, managed by Cloudflare.

#### Preferred: Wildcarded DNS Record

Production deployment at: <https://kitty-inu-dao.eth.limo/>

Decentralized alternative to eth.link. Similar to eth.link, eth.limo is based on a wildcarded DNS record, *.eth.limo. However, instead of being managed by a single organization, it is powered by a DAO. 


 
