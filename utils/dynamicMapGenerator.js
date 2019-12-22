'use strict';

module.exports = (acc, file) => {
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
  }