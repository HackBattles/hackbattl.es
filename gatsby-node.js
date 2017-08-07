const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const eventTemplate = path.resolve('src/layouts/event.js');

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
            location
          }
        }
      }
    }
  }`)
    .then((result) => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      return result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: eventTemplate,
            context: {},
          });
        });
    });
};
