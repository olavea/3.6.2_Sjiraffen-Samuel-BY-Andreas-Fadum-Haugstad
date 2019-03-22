// const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//   return new Promise((resolve, reject) =>{
//     graphql(`
//     {
//         allMarkdownRemark {
//           edges {
//             node {
//               frontmatter {
//                 slug
//               }
//             }
//           }
//         }
//       }

//     `)TouchEvent(results => {
//         results.data.allMarkdownRemark.edges.forEach(({node}) => {
//             createPage({
//                 path: node.fronmatter.slug,
//                 component: path.resolve(`./src/templates/blog-post.js`);
//                 context: {
//                     slug: node.fronmatter.slug,
//                 }
//             });
//         })
//     })
//     resolve();
//   });

// }
