import React, {Fragment, useState, useEffect} from 'react'
import Banner from './components/Banner.js';
import './assets/styles.css'
import DocList from './components/DocList.js';
import Footer from './components/Footer.js';
import CardList from './components/CardList.js';
import Form from './components/Form.js';

const App = () => {
    const [docs, setDocs] = useState([]);
    const [pinnedDocs, setPinnedDocs] = useState([]);
    const [link, setLink] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const existingDocs = JSON.parse(localStorage.getItem('storedDocs')) || [];
        const existingPinnedDocs = JSON.parse(localStorage.getItem('pinnedDocs')) || [];
        setDocs(existingDocs)
        setPinnedDocs(existingPinnedDocs)
    }, [])

    const handleAdd = () => {
            var doc = {
                link: link,
                name: name,
                pinned: false,
            }
            var newDocs = [doc, ...docs];
            setDocs(newDocs)
            localStorage.setItem('storedDocs', JSON.stringify(newDocs))
    }

    const handlePinning = (doc) => {
        var pinnedDoc = {
            ...doc,
            pinned: true
        }
        console.log(pinnedDoc);
        var newDocs = [pinnedDoc, ...pinnedDocs];
        setPinnedDocs(newDocs)
        localStorage.setItem('pinnedDocs', JSON.stringify(newDocs))
    }

    const handleRemove = (doc) =>{
        console.log(doc)
        var newDocs = [docs.splice(doc, 1), ...docs];
        console.log(newDocs)
        // localStorage.setItem('storedDocs', JSON.stringify(newDocs))
        // setDocs(newDocs)
    }
    return(
        <Fragment>
            <div className="popup__base">
            <Banner/>
            <Form handleAdd={handleAdd} setLink={setLink} setName={setName} />
            <CardList docs={pinnedDocs} heading='Pinned Docs'></CardList>
            <CardList docs={docs} heading='Other Docs'></CardList>
            <Footer></Footer>
            </div>
        </Fragment>
    )
}

export default App;