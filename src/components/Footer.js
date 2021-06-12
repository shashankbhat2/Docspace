import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return(
        <Fragment>
            <div className="popup_footer">
                <Container>
                    <Row md={3}>
                    <Col>
                     <p className="ext_credits">
                        Made with ❤ by 
                        <a href="https://shashankbhat.co.in" target="_blank">
                           <strong>
                            Bhat
                           </strong>
                        </a>
                     </p>
                    </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default Footer;