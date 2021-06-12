import React, {Fragment} from 'react'
import Banner from './components/Banner.js';
import './assets/styles.css'
import DocList from './components/DocList.js';
import Footer from './components/Footer.js';
const App = () => {
    return(
        <Fragment>
            <div className="popup__base">
            <Banner/>
            <DocList/>
            <Footer></Footer>
            </div>
        </Fragment>
    )
}

export default App;