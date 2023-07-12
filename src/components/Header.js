import React from 'react';
import '../index.css';
import {Link} from "react-router-dom";
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function Header() {
  return (
    <header>
        <div className='logo'>
            <ThemeProvider><h1>portfolio</h1></ThemeProvider>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">ホーム</Link>
                </li>
                <li>
                    <Link to="/blog">blog</Link>
                </li>
                <li>
                    <a href='https://twitter.com/kakipi16'>sns</a>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header