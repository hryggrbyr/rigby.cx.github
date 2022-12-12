module.exports = config => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/style.css');
  config.addPassthroughCopy('./src/images/**/*.*');


  config.addShortcode('year', () => `${new Date().getFullYear()}`);

  config.addFilter('formatDate', (d) => {
    const x = new Date(d)
    const options = { dateStyle: 'full' }
    return x.toLocaleString('en-GB', options)
  });

  ['Books'].forEach((tag) => {
    config.addCollection(tag, async function (collectionsAPI) {
      const all = collectionsAPI.getAll();
      const articles = all.filter(x => x.data.Collection && x.data.Collection.indexOf(tag) > -1)
      const sorted = articles.sort((a, b) => a.date - b.date)
      return sorted;
    });
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
