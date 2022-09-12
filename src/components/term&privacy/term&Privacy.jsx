import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'
import './tp.sass'


function Tp(props) {
    return (
        <div className='tp-container container'>
            <div className="tp">

                <h1>Terms And Privacy</h1>
                <p>
                    This agreement describes the conditions and rules under which sizeReducer ("our company", "we") offers you its services at sizereducer.com.

                    This agreement will be governed by the laws of The Republic of India, without reference to conflict of laws principles. You agree that any litigation relating to this agreement may only be brought in, and shall be subject to the jurisdiction of, any Court of India.
                </p>
                <strong>
                    Terms
                </strong>
                <br />
                <p>
                    By using the services of sizereducer.com, you agree to observe all of the following conditions and rules:
                </p>
                <ol>
                    <li>
                        Use of the sizereducer.com service is at your own risk.
                    </li>
                    <li>
                        You bear full responsibility for any data transmitted to sizereducer.com servers.
                    </li>
                    <li>
                        You agree not to use the sizereducer.com service to upload any illegal materials.
                    </li>
                    <li>
                        You agree not to integrate the sizereducer.com service into your own or 3rd party applications.
                    </li>
                    <li>
                        You may use the sizereducer.com service for any purpose, personal or commercial.
                    </li>
                    <li>
                        We reserves the right to change or cease any of services at sizereducer.com, at any time.
                    </li>
                    <li>
                        We reserves the right to change the terms of this agreement without notice.
                    </li>
                    <li>
                        The sizereducer.com service does not provide any guarantees.
                    </li>
                </ol>
                <strong>Privacy</strong>
                <br />
                <ol>
                    <li>
                        Submitted data and the generated files does not go at any server.
                    </li>
                    <li>
                        Submitted data and the generated files will not be shared or accessed by our company.
                    </li>
                    <li>
                        In order to improve the quality of the sizereducer.com service, you can give us a feedback at <a href="mailto:heyome9a@gmail.com">heyome9a@gmail.com</a>
                    </li>
                    <li>
                        Google collects data and uses cookies for ad personalization and measurement for this site. Learn how Google collects and uses data. You can turn off ad personalization at any time in your Google account settings. Also, we use cookies for statistical purposes. By using this site, you consent to our use of cookies.
                    </li>
                </ol>
                <pre>
                    sizeReducer <br />
                    Hydrabad, In <br />
                    India
                </pre>
                <Link to="/sizeReducer" className='btn'>
                    <FaArrowLeft />
                    Home
                </Link>
            </div>
        </div>
    );
}

export default Tp;