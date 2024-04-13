
import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata";

const About = () => {

	return(

		<Layout title="About">
			<p>vrtxrry@pm.me, <a href="https://github.com/ogoregen" target="_blank">github.com/ogoregen</a></p>
		</Layout>
	);
};

export default About;

export const Head = () => (

	<Metadata
		title="about flighty"
		description="flighty"
	/>
);
