
var test = require('tape')
var cfs = require('../')

test('api', function(t) {
  t.equal(typeof cfs, 'function')
  t.equal(typeof cfs.file, 'function')
  t.equal(typeof cfs.url, 'function')
  t.end()
})

test('cfs.url', function (t) {
  t.equal(cfs.url('asdf'), '@import url(asdf);')
  t.equal(cfs('URL', 'asdf'), cfs.url('asdf'))
  t.end()
})

test('cfs.file', function (t) {
  var okCss = '@font-face {font-family: "Inconsolata";src: url("./inconsolata.ttf") format("truetype"), url("./inconsolata.woff") format("woff");'
  var css = cfs.file({
    name: 'Inconsolata',
    files: [{ url: './inconsolata.ttf', format: 'truetype' }
          ,{ url: './inconsolata.woff', format: 'woff' }]
  })
  t.equal(css, okCss)
  t.end()
})

