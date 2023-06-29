
import React from "react";
import {useEffect} from "react";

const Comments = () => {

	useEffect(() => {

		const commentsSection = document.getElementById("comments");
		const commentsScript = document.createElement("script");

		commentsScript.async = true;
		commentsScript.src = "https://utteranc.es/client.js";
		commentsScript.setAttribute("repo", "ogoregen/blog-comments");
		commentsScript.setAttribute("issue-term", "pathname");
		commentsScript.setAttribute("id", "utterances");
		commentsScript.setAttribute("theme", "boxy-light");
		commentsScript.setAttribute("crossorigin", "anonymous");

		commentsSection.appendChild(commentsScript);
	});

	return(

		<section id="comments">
			<h2 className="fly-margin-none fly-text-center">Comments</h2>
		</section>
	);
};

export default Comments;
