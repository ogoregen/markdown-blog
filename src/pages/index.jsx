
import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata";

const Home = () => {

	return(

		<>
			<iframe
				src="/planets"
				title="planets"
				width="100%"
				height="100%"
				style={
					{
						borderStyle: "none",
						position: "fixed",
						overflow: 'hidden',
						zIndex: 0
					}
				}
			/>
			<Layout/>
		</>
	);
};

export default Home;

export const Head = () => (

	<Metadata
		title="flighty"
		description="Blog of a software developer"
	/>
);
