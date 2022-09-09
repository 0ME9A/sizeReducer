import './reducer.sass'
import React, { useEffect, useState } from 'react';

function Reducer(props) {
    const [W, setW] = useState(0)
    const [H, setH] = useState(0)
    const [imgSize, setImgSize] = useState({ width: 0, height: 0 })
    const [inputSrc, setInputSrc] = useState(null);
    const [imgElement, setImgElement] = useState(null);
    const [outputSrc, setOutputSrc] = useState(null)


    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext('2d');
        if (canvas.width > 0 && canvas.height > 0) {
            ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
            const srcEncoded = ctx.canvas.toDataURL(imgElement, 'image/png');
            setOutputSrc(srcEncoded)
        }
    }, [W, H])


    useEffect(()=>{
        console.log(props.fileToReducer = 'null')
    })

    if (props.fileToReducer === null) {
        return null
    }



    const reader = new FileReader();
    reader.readAsDataURL(props.fileToReducer)



    reader.onload = (e) => {
        setInputSrc(e.target.result);
        const newElement = document.getElementById('img-input')
        newElement.onload = function (e) {

            let imgHeight = e.path[0].naturalHeight
            let imgWidth = e.path[0].naturalWidth
            setImgSize({ width: imgWidth, height: imgHeight })
            setH(imgHeight)
            setW(imgWidth)
            setImgElement(e.target)

        }

    }




    return (
        <div className='sections-container'>
            <section className='settings-section'>
                <h1 id='img-name'>{props.fileToReducer.name}</h1>
                <div className="slider">
                    <label htmlFor="width">Width</label>
                    <input
                        id="width"
                        type="range"
                        min="1"
                        max={imgSize.width}
                        step="1"
                        value={W}
                        onChange={(e) => setW(e.target.value)}
                    />
                    <span className="valueInKb">{W}
                        <strong>PX</strong>
                    </span>
                </div>
                <div className="slider">
                    <label htmlFor="height">Height</label>
                    <input
                        id="height"
                        type="range"
                        min="1"
                        max={imgSize.height}
                        step="1"
                        value={H}
                        onChange={(e) => setH(e.target.value)}
                    />
                    <span className="valueInKb">{H}
                        <strong>PX</strong>
                    </span>
                </div>
                <div className="btn-group">
                    <button className="btn" type='button' id='delete'>Delete</button>
                    <button className="btn" type='button' id='reset' onClick={() => {
                        setH(imgSize.height)
                        setW(imgSize.width)
                    }}>Reset</button>
                </div>
            </section>
            <section className='preview-section'>
                <figure>
                    <img src={inputSrc} alt="input" id='img-input' />
                    <figcaption>input</figcaption>
                </figure>
                <figure>
                    <img src={outputSrc} alt="output" id='img-output' />
                    <figcaption>output</figcaption>
                </figure>
            </section>
            <section className='download-section'>
                <a href={outputSrc} download="sizeReducer" className='img-download max btn'>Download</a>
            </section>

        </div>
    );
}

export default Reducer;