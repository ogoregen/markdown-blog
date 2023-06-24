
import React from "react"

export const Meta = ({title, description, pathname, children}) => {

    const {title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername} = useSiteMetadata()

    const metadata = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
    }

    return (
        <>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="image" content={metadata.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:url" content={metadata.url} />
            <meta name="twitter:description" content={metadata.description} />
            <meta name="twitter:image" content={metadata.image} />
            <meta name="twitter:creator" content={metadata.twitterUsername} />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"/>
            {children}
        </>
    )
}
