
import React from "react";
import {Link} from "gatsby"
import Footer from "./footer";
import "../style/style.css";

const Layout = ({title, subtitle, children}) => {

	if(subtitle){

		var subtitleElement = <span className="fly-text-muted">{subtitle}</span>;
	}

	if(title){

		var breadcrumbs = <span> / {title}</span>
	}

	return(

		<div className="fly-container" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',  minHeight: '100vh'}}>
			
			<div style={{padding: '1rem'}}>
				<main className="fly-width-2-3 fly-margin-horizontal-auto">
					<div class="fly-margin-bottom"><Link to="/">ogoregen.com</Link>{breadcrumbs}</div>
					<div className="fly-text-center">
						<h1 className="fly-margin-small-bottom">{title}</h1>
						{subtitleElement}
					</div>
					<div className="fly-margin-large-top">
						{children}
					</div>
				</main>

			</div>

			<Footer/>

		</div>
	);
};

export default Layout;
