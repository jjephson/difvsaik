import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css"

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/feedback">Feedback</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header