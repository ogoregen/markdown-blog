
import React from "react"
import {StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Metadata from "../components/metadata";

const About = () => {

	return(

		<Layout title="About">
			<p>I'm an embedded software developer who likes having a corner on the web, although I don't do much with it. You can reach me at vrtxrry@pm.me to say hi. I would love to hear from you.</p>
			<h2>Birb</h2>
			<p>Here's my late cockatiel friend Birb. He always sung and loved a branch of millet. He would accompany me on the computer and rest under the monitor. He was with me in a time I never wish to forget.</p>
			<div style={{display: "flex", "justifyContent": "space-around"}}>
				<StaticImage src="../images/birb.jpg" class="fly-1-2-desktop"/>
			</div>
		</Layout>
	);
};

export default About;

export const Head = () => (

	<Metadata
		title="about flighty"
		description="flighty is an embedded software developer who makes open source projects. This is their corner on the web."
	/>
);
