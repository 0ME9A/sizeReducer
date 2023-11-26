import { useState } from 'react';

import Upload from '../components/upload/upload';
import Reducer from '../components/reducer/reducer';

function Home() {
    const [fileToReducer, setFileToReducer] = useState(null)
    return (
        <>
            <Upload setFileToReducer={setFileToReducer}/>
            <Reducer fileToReducer={fileToReducer}/>
        </>
    );
}





export default Home;