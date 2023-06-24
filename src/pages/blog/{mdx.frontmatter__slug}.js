
import * as React from "react"
import {graphql} from "gatsby"
import PageTemplate from "../../components/pagetemplate"
import Comments from "../../components/comments"

export const query = graphql`
    query($id: String){
        mdx(id: {eq: $id}){
            frontmatter{
                title
                date(formatString: "MMMM D, YYYY")
            }
        }
    }`

const BlogPost = ({data, children}) => {

    return(
        <PageTemplate title={data.mdx.frontmatter.title} subtitle={data.mdx.frontmatter.date}>
            <article>
                {children}
            </article>
            <Comments/>
        </PageTemplate>
    )
}

export default BlogPost

export const Head = ({data}) => <title>{data.mdx.frontmatter.title}</title>
