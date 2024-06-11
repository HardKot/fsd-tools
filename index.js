const fs = require('fs');
const GetLayers = require('./src/GetLayer');
const isTsConfig = require('./src/isTsConfig');
const CreateSlice = require('./src/CreateSlice');
const IsHelp = require('./src/IsHelp');

function main(args = []) {
  const sliceName = args.filter(arg => !arg.startsWith("-"))[0]?.split('/');

  if (IsHelp(args)) return;
  if (!sliceName) return console.log("Slice name is required");
  const isTypeScript = isTsConfig(args);

  GetLayers(args, {
    "a": "app",
    "p": "pages",
    "w": "widgets",
    "f": "features",
    "e": "entities",
    "s": "shared",
  })
    .forEach(layer => {
     CreateSlice({
       sliceName: sliceName,
       layer,
       isTypeScript,
       createDir: (path) => fs.mkdirSync(path, { recursive: true }),
       createIndex: (path, content) => fs.writeFileSync(path, content),
     })
    })

}

main(process.argv.slice(2))
