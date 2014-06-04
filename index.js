
var types = {
  FILE: "FILE",
  URL: "URL"
}

var cfs = module.exports = function (type, font) {
  if (!types[type]) {
    throw new Error('css-face-string: Type ' +
                    type +
                    ' not supported.\n' +
                    'Use one of '+ JSON.stringify(types))
  }
  return cfs[type.toLowerCase()](font)
}

cfs.file = function (font) {
  var face = '@font-face {' +
    'font-family: "'+ font.name +'";' +
    'src: ';
  var urls = font.files.map(fileToSrc).join(', ') + ';'
  return face + urls;
}

cfs.url = function (url) {
  return "@import url("+ url + ");"
}

cfs.types = types;

function fileToSrc (file) {
  return 'url("'+ file.url +'") format("'+ file.format +'")';
}

