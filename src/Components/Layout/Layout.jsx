import React from "react";
import { Link } from "react-router-dom";
import './Layout.css';


const Layout = (props) => {
    

    return(
    <div className='layout'>
        <header>
            <h1> Music shopping app</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home Page</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main id='app-content'>
            {props.children}
        </main>
    </div>
    )
}

export default Layout