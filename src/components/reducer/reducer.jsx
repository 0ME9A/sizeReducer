import './reducer.sass'
import React, { useEffect, useState } from 'react';
import Error from '../error/error';

function Reducer(props) {
    const [W, setW] = useState(0)
    const [H, setH] = useState(0)
    const [imgSize, setImgSize] = useState({ width: 0, height: 0 })
    const [inputSrc, setInputSrc] = useState(null);
    const [imgElement, setImgElement] = useState(null);
    const [outputSrc, setOutputSrc] = useState(null)
    const [inputImgLoad, setInputImgLoad] = useState(0);
    const [outputImgLoad, setOutputImgLoad] = useState(0);


    const dataConverter = (num, divide) => {
        if ((num / divide) > 1024) {
            return parseInt((num / divide) / 1024) + "MB";
        }
        if ((num / divide) < 1024) {
            return parseInt(num / divide) + "KB";
        }

    }



    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext('2d');
        if (canvas.width > 0 && canvas.height > 0) {
            ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
            const srcEncoded = ctx.canvas.toDataURL(imgElement, 'image/png');
            setOutputSrc(srcEncoded)
            setOutputImgLoad(srcEncoded.length)
        }
    }, [W, H])


    useEffect(() => {
        console.log(props, '---x')
    }, [props])

    if (props.fileToReducer === null || props.fileToReducer === undefined) {
        return null
    } else {
        if (props.fileToReducer.type === "image/jpeg" || props.fileToReducer.type === "image/jpg" || props.fileToReducer.type === "image/png") {
            const reader = new FileReader();
            reader.readAsDataURL(props.fileToReducer)
            reader.onload = (e) => {
                setInputSrc(e.target.result);
                const newElement = document.getElementById('img-input')
                setInputImgLoad(e.total)

                newElement.onload = function (e) {
                    let imgHeight = e.target.naturalHeight
                    let imgWidth = e.target.naturalWidth
                    setImgSize({ width: imgWidth, height: imgHeight })
                    setH(parseInt(imgHeight/3))
                    setW(parseInt(imgWidth/3))
                    setImgElement(e.target)
                }
            }
        }
        else{
            return <Error/>
        }
    }



    return (
        <div className='sections-container container'>
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
                    <button
                        className="btn"
                        type='button'
                        id='delete'
                        onClick={() => {
                            window.location.reload()
                        }}
                    >Delete</button>
                    <button
                        className="btn"
                        type='button'
                        id='max'
                        onClick={() => {
                            setH(imgSize.height)
                            setW(imgSize.width)
                        }}
                    >Max</button>
                    <button
                        className="btn"
                        type='button'
                        id='reset'
                        onClick={() => {
                            setH(parseInt( imgSize.height /3))
                            setW(parseInt( imgSize.width /3))
                        }}
                    >Reset</button>
         
                </div>
            </section>
            <section className='preview-section'>

                <figure>
                    <img src={inputSrc} alt="input" id='img-input' />
                    <figcaption>
                        Original
                        <strong> {dataConverter(inputImgLoad, 1024)}</strong>
                    </figcaption>
                </figure>
                <figure>
                    <img src={outputSrc} alt="input" id='img-output' />
                    <figcaption>
                        Compressed
                        <strong> {dataConverter(outputImgLoad, 1360)}</strong>
                    </figcaption>
                </figure>
            </section>
            <section className='download-section'>
                <a href={outputSrc} download="sizeReducer" className='img-download max btn'>Download</a>
            </section>
        </div>
    );
}

export default Reducer;