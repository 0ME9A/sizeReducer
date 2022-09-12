import React from 'react';
import { FaGithub } from 'react-icons/fa'
import './nav.sass'
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='nav-container container'>
            <div className="img-filter"></div>
            <nav>
                <span>Made by <a href="https://github/0me9a">OMEGA</a></span>
                <a
                    href="https://github.com/0me9a/size-reducer"
                    target='_blank' rel='noreferrer'
                    className='github-button btn'>
                    Star on Github
                    <FaGithub />
                </a>
            </nav>
            <Link to='/'>
                <h1 id='brand'>sizeReducer</h1>
            </Link>
        </div>
    );
}

export default Nav;