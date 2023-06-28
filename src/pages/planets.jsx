
import * as React from "react";
import {withPrefix} from "gatsby";
import "../style/style.css";
import Metadata from "../components/metadata";

const Planets = () => {

    return(

        <>
        </>
    );
};

export default Planets;

export const Head = () => (

	<Metadata
		title="planets"
		description="2D gravitational attraction simulation"
	>
        <script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js"></script>
        <script src={withPrefix("planet.js")}></script>
    </Metadata>
);
