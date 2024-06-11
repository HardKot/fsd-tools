const isTsConfig = (args = []) => args.findIndex((arg) => /-t|--typescript/.test(arg)) > -1;

module.exports = isTsConfig
