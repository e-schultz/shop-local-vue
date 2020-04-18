// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const businessData = require('./data/businesses.js');
module.exports = function(api) {
  api.loadSource(async ({ addCollection }) => {
    const collection = addCollection('Businesses');
    businessData.forEach(
      ({
        name,
        id,
        url,
        goods,
        image,
        alt,
        pickup,
        delivery,
        neighbourhood,
        details,
      }) => {
        collection.addNode({
          name,
          id,
          url,
          goods,
          image,
          alt,
          pickup,
          delivery,
          neighbourhood,
          details,
        });
      }
    );
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
