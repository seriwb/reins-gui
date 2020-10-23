# reins GUI


Available commands:

```bash
"yarn build-renderer": build and transpile Next.js layer
"yarn build-electron": transpile electron layer
"yarn build": build both layers
"yarn start": start dev version
"yarn dist": create production elctron build
"yarn type-check": check TypeScript in project
```


| Part       | Source code (Typescript) | Builds (JavaScript) |
| ---------- | ------------------------ | ------------------- |
| Next.js    | `/renderer`              | `/renderer`         |
| Electron   | `/electron-src`          | `/main`             |
| Production |                          | `/dist`             |


# for developer

## [WIP]Docker開発の場合

- https://kamino.hatenablog.com/entry/docker_gui
- https://medium.com/@SaravSun/running-gui-applications-inside-docker-containers-83d65c0db110

### mac requirement
- xquartz

### win requirement
- vcxsrv
- tera term
