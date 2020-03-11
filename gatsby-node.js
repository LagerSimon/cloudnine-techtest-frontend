const hairdressersRaw = require("./src/data/hairdressers.json")

exports.createPages = async ({ actions: { createPage } }) => {
  const hairdressers = Object.values(hairdressersRaw)

  createPage({
    path: `/`,
    component: require.resolve("./src/views/Index.js"),
  })

  createPage({
    path: `/hairdressers`,
    component: require.resolve("./src/views/List.js"),
    context: { hairdressers },
  })

  hairdressers.forEach(hairdresser => {
    createPage({
      path: hairdresser.slug,
      component: require.resolve("./src/views/Details.js"),
      context: { hairdresser },
    })
  })
}
