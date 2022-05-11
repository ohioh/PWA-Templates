## PWA_THINKBOX_BLE

- App:LINK: https://laughing-meitner-abd29f.netlify.app/

Creator: 
- Nabil Borkowski [ nabil-borkowski@outlook.de ] 
- Tjark Ziehm [ tjark.ziehm@ohioh.de ]

created: 10. September 2021
Version: 0.9
Feature: Progressive Web App für eine Single Side Application mit Service Worker für das Anzeigen von Sensor-Daten, die über BLE von einem ESP32 aberufen werden.

Sensoren: DHT22- Temperature und Luftfeuchtigkeit 
Interessante Links:

- https://dev.to/boywithsilverwings/configuring-preact-cli-with-tailwind-css-3ckj

- https://medium.com/jslovers/netlify-preact-pwabuilder-part-1-bac9ee1224d4

- https://github.com/preactjs/preact-cli

- https://tailwindcomponents.com/cheatsheet/
- https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## Service-Worker Strategy:
Servic-Worker [https://developers.google.com/web/tools/workbox/modules/workbox-strategies]

## CLI Commands

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# run tests with jest and preact-render-spy 
yarn test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

Note: When pre-rendering, your module as components are executed in a Node.js environment, where most Web APIs are not available. To account for this, wrap that code in a check like `if (typeof window !== 'undefined')`. 
Do not add `preact build --no-prerender` to the build command as it will prevent blog posts from rendering.
