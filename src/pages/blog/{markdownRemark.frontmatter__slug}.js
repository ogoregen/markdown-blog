
import * as React from "react"
import {graphql} from "gatsby"
import PageTemplate from "../../components/pagetemplate"
import Comments from "../../components/comments"

export const query = graphql`
    query($id: String){
        markdownRemark(id: {eq: $id}){

            html
            excerpt
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }

        }
    }`

const BlogPost = ({data, children}) => {

    const post = data.markdownRemark

    return(

        <PageTemplate title={post.frontmatter.title} subtitle={post.frontmatter.date}>
            <article
                dangerouslySetInnerHTML={{ __html: post.html }}
            >
                {children}
            </article>
            <Comments/>
        </PageTemplate>
    )
}

export default BlogPost

export const Head = ({data}) => <title>{data.markdownRemark.frontmatter.title}</title>
