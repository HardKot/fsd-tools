const path = require('path');

const CreateSlice = ({ sliceName, layer, createDir, createIndex, isTypeScript }) => {
  console.log(layer)
  const pathToLayer = path.join('src', layer, ...sliceName)
  createDir(pathToLayer)
  createIndex(path.join(pathToLayer, `index.${isTypeScript ? "ts" : "js"}`), "")

  if (['features', 'entities', 'widgets', 'pages'].includes(layer)) createDir(path.join(pathToLayer, 'ui'))
  if (['features', 'entities', 'widgets', 'pages'].includes(layer)) createDir(path.join(pathToLayer, 'lib'))
  if (['features', 'entities', 'widgets'].includes(layer)) createDir(path.join(pathToLayer, 'model'))
  if (['features', 'entities', 'pages'].includes(layer)) createDir(path.join(pathToLayer, 'api'))
  if (['features', 'entities', 'pages'].includes(layer)) createDir(path.join(pathToLayer, 'api'))

}

module.exports = CreateSlice
