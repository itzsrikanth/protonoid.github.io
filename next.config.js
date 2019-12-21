const withSass = require('@zeit/next-sass')

module.exports = withSass({
  exportPathMap: async () => {
    const fileList = await require('./walk.js');
    return {
      '/': { page: '/' },
      '/blogs': { page: '/blogs' },
      '/blogs/articles': { 
        page: '/articleHomepage',
        query: fileList
       },
      ...fileList.reduce((acc, file) => {
        acc[`/blogs/articles${file.location.replace(/\/$/, '')}`] = {
          page: '/articles',
          query: file.markdown
        };
        return acc;
      }, {})
    };
  },
  useFileSystemPublicRoutes: false,
  poweredByHeader: false
});
