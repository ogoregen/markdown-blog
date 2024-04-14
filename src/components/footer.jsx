
import React from "react";
import CONFIG from "../config";

const Footer = () => {

	return(
		<footer className="fly-footer fly-text-center fly-margin-bottom">
			<span>{CONFIG.copyright}</span>
		</footer>
	);
};

export default Footer;
