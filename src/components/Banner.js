import React, { Fragment } from 'react';
import Logo from '../assets/logo.svg'
import {FaGithub} from 'react-icons/fa'
import {SimpleGrid, Box } from "@chakra-ui/react"

const Banner = () => {
    return(
        <Fragment>
            <Box className="credit_banner">
                <SimpleGrid columns={2}>
                        <Box m={3}>
                            <img src={Logo} className="logo"></img>
                        </Box>
                        <Box>
                            <a href="https://github.com/shashankbhat2" target="_blank">
                                <FaGithub size="24px" className="git_icon"></FaGithub>
                            </a>
                        </Box>
                </SimpleGrid>
            </Box>
        </Fragment>
    )
}

export default Banner;