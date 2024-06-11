const IsHelp = (args = []) => {
  if (!args.filter(arg => /-h|--help/.test(arg)).length) return false
  console.info("fsd-tools - CLI for generate fsd slice")
  console.info("Usage: fsd-tools <sliceName> [-a|--app] [-p|--pages] [-w|--widgets] [-f|--features] [-e|--entities] [-s|--shared]")
  console.info("<sliceName> - support path to slice (auth/toEmail)")

  console.info("If you need help, you can use --help flag")
  console.info("If you need TypeScript support, you can use --typescript flag")

  console.info("Documentation FSD: https://feature-sliced.design/docs")

  return true
}

module.exports = IsHelp
