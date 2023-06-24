
import * as React from "react";
import {withPrefix} from "gatsby";

const Planets = () => {

    return(

        <>
        </>
    );
};

export default Planets;

export const Head = () => (

    <>
        <script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js"></script>
        <script src={withPrefix("planet.js")} ></script>
    </>
);
