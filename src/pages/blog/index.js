
import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../../components/layout"

export const query = graphql`
    query{
        allMarkdownRemark(sort: {frontmatter: { date: DESC }}){
            nodes {
                frontmatter{
                    title
                    date(formatString: "MMM. D, YYYY")
                    slug
                    description
                }
                id
            }
        }
    }
    `

const Blog = ({data}) => {

    return(
        <Layout title="Blog">
            {
                data.allMarkdownRemark.nodes.map(node => (
                    <div className="fly-flex fly-flex-space-between fly-margin-bottom" key={node.id}>
                        <div>
                            <Link to={`/blog/${node.frontmatter.slug}`} className="fly-text-lead">{node.frontmatter.title}</Link>
                            <p className="fly-margin-none-top">{node.frontmatter.description}</p>
                        </div>
                        <p className="fly-margin-none-top fly-mobile-only">{node.frontmatter.date}</p>
                    </div>
                ))
            }
        </Layout>
    )
}

export default Blog;

export const Head = () => (
    
	<Metadata
		title="flighty's blog"
		description="Tutorials about computer science and other miscellaneous writing"
	/>
);
