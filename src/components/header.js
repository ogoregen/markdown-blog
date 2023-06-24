
import * as React from "react"
import {Link} from "gatsby"

const navigationItems = [
    {url: "/", label: "Home"},
    {url: "/me", label: "About"},
    {url: "/work", label: "Projects"},
    {url: "/blog", label: "Blog"},
  ]

const Header = () => {

    return(
        
        <header className="fly-header">
            <Link to="/" className="fly-title">flighty</Link>
            <nav>
                <ul class="fly-nav">
                    {
                        navigationItems.map(
                            (item) => (
                                <li>
                                    <Link to={item.url}
                                          key={item.label}
                                          activeClassName="fly-nav-active"
                                    >{item.label}</Link>
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>
        </header>
    )    
}

export default Header
