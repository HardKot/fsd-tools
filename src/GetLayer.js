const GetLayers = (args = [], layersMap = {}) => {
  return args
    .filter((flag) => /-\w|--\w+/.test(flag))
    .map((flag) => flag.replace(/^-+/g, ''))
    .map(flag => flag.length === 1 ? layersMap[flag] : flag)
    .filter(flag => flag.length > 0 && Object.values(layersMap).includes(flag))
}

module.exports = GetLayers
