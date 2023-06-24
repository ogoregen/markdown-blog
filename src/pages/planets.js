
import * as React from "react"
import { withPrefix } from "gatsby"

const Comments = () => {

    return(
        <>
        </>
    )
}

export default Comments

export const Head = () => (
    <>
    <title>hey</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js"></script>
    <script src={withPrefix("planet.js")} ></script>
    </>
)