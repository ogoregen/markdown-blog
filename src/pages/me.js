
import * as React from "react"
import PageTemplate from "../components/pagetemplate"
import {StaticImage} from "gatsby-plugin-image"

const Home = () => {

    return(
        <PageTemplate title="About">
            <p>I'm an embedded software developer who makes open source projects. I specialize in computer graphics and networks. I like having a corner on the web although I don't write much. In fact, most of what I do with this page is designing it making it work. Here, you can see me document my projects and write a bit. I do hope to be helpful or inspiring. You can reach me at vrtxrry@pm.me to say hi. I would love to hear from you.</p>
            <h2>Birb</h2>
            <p>Here's my late cockatiel friend Birb. He always sung and loved a branch of millet. He would accompany me on the computer and rest under the monitor. He was with me in a time I never wish to forget.</p>
            <div style={{display: 'flex', 'justifyContent': 'space-around'}}>
                <StaticImage src='../images/birb.jpg' style={{width: '50%'}}/>
            </div>
        </PageTemplate>
    )
}

export default Home

export const Head = () => <title>about flighty</title>
