exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig()
    // Revert https://github.com/gatsbyjs/gatsby/pull/11800
    delete config.optimization.splitChunks.cacheGroups
    actions.replaceWebpackConfig(config)
  }
}
