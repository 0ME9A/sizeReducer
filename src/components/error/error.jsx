import React from 'react';
import './error.sass'

function Error(props) {
    return (
        <div className='error-container container'>
            <div className="error">
                <h1>Error occurred!</h1>
                <h2>Incorrect file type given or some internal error happened.</h2>
                <h2 id='error-title'>Troblshoot</h2>
                <ol>
                    <li>Reload window.</li>
                    <li>Upload only image file.</li>
                    <li>Try uploading another image.</li>
                    <li>If you still getting an error, please contact us: <a href='mailto:heyome9a@gmail.com'>Heyomega@gmail.com</a></li>
                </ol>
                <p>
                    Note: We only support Image file such as:
                    <code>.jpg</code>
                    <code>.jpeg</code>
                    <code>.png</code>
                </p>
            </div>
        </div>
    );
}

export default Error;