
css-face-string
===============

Generate a css string with font-face declaration from JS data.

Useful for generating font faces programatically. Works in node.js and the
browser.

Useful with browserify and [insert-css](https://www.npmjs.org/package/insert-css)

Use
---

```javascript
var cfs = require('css-face-string')

cfs.file({
  name: 'Inconsolata',
  files: [{ url: './inconsolata.ttf', format: 'truetype' }
        ,{ url: './inconsolata.woff', format: 'woff' }]
})
//> @font-face {font-family: "Inconsolata";src: url("./inconsolata.ttf") format("truetype"), url("./inconsolata.woff") format("woff");

cfs.url("http://fonts.googleapis.com/css?family=Averia+Sans+Libre:400,300italic,700")
//> @import url(http://fonts.googleapis.com/css?family=Averia+Sans+Libre:400,300italic,700);

// No sugar:
cfs(cfs.types.FILE, {
  name: 'Inconsolata',
  files: [{ url: './inconsolata.ttf', format: 'truetype' }]
})

cfs(cfs.types.URL,
    "http://fonts.googleapis.com/css?family=Averia+Sans+Libre:400,300italic,700")

```

```bash
npm install --save css-face-string
```
