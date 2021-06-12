import React, { Fragment, useEffect, useState } from 'react'
import { Container, CardDeck, Card, Form, Row,Col, Button } from 'react-bootstrap'
import {FaHeart} from 'react-icons/fa'
const DocList = () => {
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
            <div className="doclist_base">
                <Container>
                    <Row>
                    <Col md={6}>
                        <h6 className="popup_heading">Add Your Documentation Link</h6>
                    </Col>
                    <Col md={6}>
                         <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" className="popup_input" />
                         <Form.Control type="url" onChange={(e) => setLink(e.target.value)} placeholder="Url" className="popup_input" />
                         <Button variant="primary" onClick={handleAdd} className="add_button">
                             Add 
                         </Button>
                    </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="pinned__base">
                        <h6 className="popup_heading">Your Pinned Docs</h6>
                        <CardDeck>
                            {pinnedDocs.length !== 0 ? docs.map((doc, i) => (
                                <Card key={i}>
                                    <Card.Body>
                                        <Card.Title>
                                        {doc.name}
                                        </Card.Title>
                                        <Button href={doc.link} className="doc_btn" variant="primary" target="_blank">Check</Button>
                                        <Button variant="danger" onClick={() => handleRemove(doc)}>
                                            Remove
                                        </Button>
                                        <Button onClick={() => handlePinning(doc)}>
                                            <FaHeart />
                                        </Button>
                                    </Card.Body>
                                </Card>
                            )):(
                                <div>
                                    <Container>
                                        <p className="docs_fallback">No Pinned Docs</p>
                                    </Container>
                                </div>
                            )}
                        </CardDeck>
                    </div>
                </Container>
                <Container>
                    <div className="pinned__base">
                        <h6 className="popup_heading">Other Docs</h6>
                        <CardDeck>
                            {docs.length !== 0 ? docs.map((doc, i) => (
                                <Card key={i}>
                                    <Card.Body>
                                        <Card.Title>
                                        {doc.name}
                                        </Card.Title>
                                        <Button href={doc.link} className="doc_btn" variant="primary" target="_blank">Check</Button>
                                        <Button className="doc_btn" variant="danger" onClick={() => handleRemove(doc)}>
                                            Remove
                                        </Button>
                                        <Button  className="doc_btn" onClick={() => handlePinning(doc)}>
                                            <FaHeart />
                                        </Button>
                                    </Card.Body>
                                </Card>
                            )):(
                                <div>
                                    <Container>
                                        <p className="docs_fallback">No Docs</p>
                                    </Container>
                                </div>
                            )}
                        </CardDeck>
                    </div>
                </Container>
            </div> 
        </Fragment>
    )
}

export default DocList