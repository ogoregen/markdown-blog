
import * as React from "react"
import Layout from "../components/layout"

const Home = () => {

    return(
        <>
            <iframe src="/planets"
                title="planets"
                width={'100%'}
                height={'100%'}
                style={{borderStyle: "none", position: "fixed", overflow: 'hidden', zIndex: 0}}
            />
            <Layout/>
        </>
    )
}

export default Home

export const Head = () => (
    <>
        <title>flighty</title>
    </>
)
