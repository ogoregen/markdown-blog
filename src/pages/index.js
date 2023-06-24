
import * as React from "react"
import PageTemplate from "../components/pagetemplate"

const Home = () => {

    return(
        <>
            <iframe src="/planets"
                title="planets"
                width={'100%'}
                height={'100%'}
                style={{borderStyle: "none", position: "fixed", overflow: 'hidden', zIndex: 0}}
            />
            <PageTemplate/>
        </>
    )
}

export default Home

export const Head = () => (
    <>
        <title>flighty</title>
    </>
)
