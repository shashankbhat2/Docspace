import React, { Fragment, useState } from 'react'
import { Container, Alert,  CardDeck, Card, Form, Row,Col, Button } from 'react-bootstrap'

const DocList = () => {
    const [show, setShow] = useState(false);
    const [docs, setDocs] = useState([]);
    const [newDoc, setnewDoc] = useState({link: '', name: ''})
    const [toast, setToast] = useState({error: '', success: ''}) 

    const handleAdd = () => {
        if(validate()){
            setToast({success: "Doc added successfully"})
            var doc = {
                link: newDoc.link,
                name: newDoc.name
            }
            var newDocs = [doc, ...docs];
            setDocs(newDocs)
        }
    }

    const validate = () => {
        var isValid = true;
        if(url === ""){
            setToast({error: 'Please enter a valid url'});
            isValid = false;
        }
        return isValid
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
                         <Form.Control type="text" onChange={(e) => setnewDoc({name: e.target.value})} placeholder="Name" className="popup_input" />
                         <Form.Control type="url" onChange={(e) => setnewDoc({link: e.target.value})} placeholder="Url" className="popup_input" />
                         <Button variant="primary" onClick={handleAdd} className="add_button">
                             Add 
                         </Button>
                         {/* <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Body>{toast.error ? toast.error : toast.success}</Toast.Body>
                        </Toast> */}
                    </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="pinned__base">
                        <h6 className="popup_heading">Your Pinned Docs</h6>
                        <CardDeck>
                            {docs.map((doc, i) => (
                                <Card key={i}>
                                    <Card.Body>
                                        <Card.Title>
                                        {doc.name}
                                        </Card.Title>
                                        <Button as="a" href={doc.link} variant="primary">Check</Button>
                                        <Button variant="danger" onClick={handleAdd}>
                                            Remove
                                        </Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </CardDeck>
                    </div>
                </Container>
            </div> 
        </Fragment>
    )
}

export default DocList