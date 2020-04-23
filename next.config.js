const withSass = require('@zeit/next-sass')

module.exports = withSass({
  exportPathMap: async () => {
    const fileList = await require('./walk');
    return {
      '/': { page: '/' },
      '/blogs': { page: '/blogs' },
      '/blogs/articles': {
        page: '/articleHomepage',
        query: fileList
      },
      '/online': {
        page: '/online'
      },
      ...fileList.reduce(
        require('./utils/dynamicMapGenerator'), {}
      )
    };
  },
  useFileSystemPublicRoutes: false,
  poweredByHeader: false
});
