
import React from "react";

const Footer = () => {

    return(

        <footer className="fly-flex fly-flex-space-around fly-margin-horizontal-auto fly-margin-bottom fly-width-1-1 fly-footer">
            <div>
                <span>&copy; {new Date().getFullYear()} flighty</span>
            </div>
        </footer>
    );
};

export default Footer;
