const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Adicionar um slug para cada postagem
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Verificar se o node que leu é o MarkdownRemark
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    });
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query getSlug {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.fields.slug
        }
      });
    });
  });
}
