import React from 'react';
import './footer.sass';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className='footer-container'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0047FF" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,112C672,117,768,203,864,240C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <footer>
                <h1>Like it? Share it!</h1>
                <div className="social-icons">
                    <a href="http://github.com/0me9a" target='blank' rel='noopener'>
                        <FaGithub className='icons-tag' />
                    </a>
                    <a href="https://www.linkedin.com/in/baliram-kumar-0a9a0a214/" target='_blank' rel='noreferrer'>
                        <FaLinkedin className='icons-tag' />
                    </a>
                    <a href="https://twitter.com/omega86735940" target='_blank' rel='noreferrer'>
                        <FaTwitter className='icons-tag' />
                    </a>
                </div>
                <p>We do not store uploaded data anywhere.</p>
                <span>&copy; Copyright 2022 sizeReducer |<Link to='/sizeReducer/terms-privacy/' className='btn btn-link'>Terms and Privacy</Link></span>
            </footer>
        </div>
    );
}

export default Footer;
