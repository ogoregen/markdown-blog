
import * as React from "react";
import PageTemplate from "../components/pagetemplate";

const Home = () => {

    return (
	
		<PageTemplate title="Not found.">
			<p className="fly-text-center">That's a 404.</p>
		</PageTemplate>	
	);
};

export default Home;

export const Head = () => <title>not here</title>;
