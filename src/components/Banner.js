import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/logo.svg'
import {FaGithub} from 'react-icons/fa'

const Banner = () => {
    return(
        <Fragment>
            <div className="credit_banner">
                <Container>
                    <Row md={3}>
                        <Col>
                           <img src={Logo} className="logo"></img>
                        </Col>
                            <Col>
                            <a href="https://github.com/shashankbhat2" target="_blank">
                                <FaGithub size="24px" className="git_icon"></FaGithub>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default Banner;