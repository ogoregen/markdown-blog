
import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../style/style.css";

const Layout = ({title, subtitle, children}) => {

    return(

        <div className="fly-container">
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',  minHeight: '100vh'}}>
                <div style={{padding: '1rem'}}>
                    <Header/>
                    <main className="fly-width-2-3 fly-margin-horizontal-auto">
                        <div className="fly-text-center">
                            <h1 className="fly-margin-small-bottom">{title}</h1>
                            {subtitle ? <span className="fly-text-muted">{subtitle}</span> : null}
                        </div>
                        <div className="fly-margin-large-top">
                            {children}
                        </div>
                    </main>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;
