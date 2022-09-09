// import React, { useState } from 'react';
import './upload.sass'


function Upload({setFileToReducer}) {
    return (
        <div className="upload-container">
            <div className="input-box">
                <input type="file" name="upload" id="Upload" accept='jpg, png, jpeg' onChange={(e)=>{
                    setFileToReducer(e.target.files[0]);
                }}/>
            </div>
        </div>
    );
}

export default Upload;