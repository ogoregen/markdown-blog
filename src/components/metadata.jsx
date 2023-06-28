
import React from "react";

const Metadata = ({title, description, children}) => {

	return(

        <>
            <title>{title}</title>
            <meta name="description" content={description}/>                        
            {children}
        </>
	);
};

export default Metadata;
