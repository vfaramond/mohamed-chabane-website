const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(
      `
      {
        allContentfulProject {
          edges {
            node {
              id
              order
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      // Create Product pages
      const projectTemplate = path.resolve(`./src/templates/project.js`);
      // We want to create a detailed page for each
      // product node. We'll just use the Contentful id for the slug.
      const projectEdges = _.orderBy(
        result.data.allContentfulProject.edges,
        [edge => edge.node.order],
        ['asc']
      );

      _.each(projectEdges, (edge, index) => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/projects/${edge.node.id}/`,
          component: slash(projectTemplate),
          context: {
            id: edge.node.id,
            previousId: index > 0 ? projectEdges[index - 1].node.id : null,
            nextId:
              index < projectEdges.length - 1
                ? projectEdges[index + 1].node.id
                : null,
          },
        });
      });

      resolve();
    });
  });
};
