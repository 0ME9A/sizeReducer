import './upload.sass'

function Upload({ setFileToReducer }) {
    return (
        <div className="upload-container container">
            <div className="input-box">
                <label htmlFor="upload">Upload Image</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    accept='jpg, png, jpeg'
                    onChange={(e) => {
                        setFileToReducer(e.target.files[0]);
                    }}
                    required
                />
            </div>
        </div>
    );
}

export default Upload;