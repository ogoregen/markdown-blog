
import React from "react";

const Footer = () => {

	var year = new Date().getFullYear();

	return(

		<footer className="fly-footer fly-text-center fly-margin-bottom">
			<span>&copy; {year} flighty</span>
		</footer>
	);
};

export default Footer;
