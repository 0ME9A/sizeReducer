import React, { useState } from 'react';
import Upload from '../components/upload/upload';
import Reducer from '../components/reducer/reducer';
// import Absolue from '../components/absolute/absolute';
// import {FaGithubAlt} from 'react-icons/fa'

function Home(props) {
    const [fileToReducer, setFileToReducer] = useState(null)
    return (
        <>
            <Upload setFileToReducer={setFileToReducer}/>
            <Reducer fileToReducer={fileToReducer}/>
        </>
    );
}





export default Home;