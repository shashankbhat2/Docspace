import React, { Fragment, useEffect, useState } from 'react'
import { Container,Form, Row,Col, Button } from 'react-bootstrap'
import CardList from './CardList';

const DocList = () => {


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
            </div> 
        </Fragment>
    )
}

export default DocList