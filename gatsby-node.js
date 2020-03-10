const hairdressersRaw = require("./src/data/hairdressers.json")

exports.createPages = async ({ actions: { createPage } }) => {
  const hairdressers = Object.values(hairdressersRaw)
  createPage({
    path: `/`,
    component: require.resolve("./src/views/List.js"),
    context: { hairdressers },
  })

  hairdressers.forEach(page => {
    createPage({
      path: page.slug,
      component: require.resolve("./src/views/Details.js"),
      context: { hairdressers, page },
    })
  })
}
