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
      ...fileList.reduce((acc, file) => {
        const splits = file.location.substring(1, file.location.length - 1).split('/');
        for (let i = 0; i < splits.length; i++) {
          const key = splits.slice(0, i + 1)
            .join('/');
          const leafPage = i + 1 === splits.length;
          acc[`/blogs/articles/${key}/`] = {
            page: leafPage ? '/articles' : '/articleHomepage',
            query: leafPage ? file.markdown : fileList
          };
        }
        return acc;
      }, {})
    };
  },
  useFileSystemPublicRoutes: false,
  poweredByHeader: false
});
