const { createFilePath } = require(`gatsby-source-filesystem`)

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
