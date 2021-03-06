import React from 'react'
import { StaticQuery, Link } from 'gatsby'

const CollectionsAll = () => (
  <StaticQuery
    query={graphql`
      query CollectionIndexQuery {
        allShopifyCollection {
          edges {
            node {
              title
              handle
              products {
                title
                images {
                  localFile {
                    childImageSharp {
                      fixed {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
          {data.allShopifyCollection.edges.map(({ node }) => (
              <div>
                <Link to={"/collections/" + node.handle}>
                  {node.title}
                </Link>
              </div>
            ))}
      </div>
    )}
  />
)

export default CollectionsAll
