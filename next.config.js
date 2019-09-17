const withSass = require('@zeit/next-sass')

module.exports = withSass({
  exportPathMap: async () => {
    const fileList = await require('./walk.js');
    return fileList.reduce((acc, file) => {
      acc[`/blogs/articles${file.location}`] = {
        page: '/articles',
        query: file.query
      };
      return acc;
    }, {});
  }
});
