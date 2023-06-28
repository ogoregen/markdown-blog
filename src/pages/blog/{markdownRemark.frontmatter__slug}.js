
import * as React from "react"
import {graphql} from "gatsby"
import Layout from "../../components/layout"
import Comments from "../../components/comments"
import Metadata from "../components/metadata";

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

        <Layout title={post.frontmatter.title} subtitle={post.frontmatter.date}>
            <article
                dangerouslySetInnerHTML={{ __html: post.html }}
            >
                {children}
            </article>
            <Comments/>
        </Layout>
    )
}

export default BlogPost;

export const Head = ({data}) => (

    <Metadata
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.excerpt}
    />
);
