import React, { Fragment } from 'react';
import { Container, Box, SimpleGrid, Text } from '@chakra-ui/react'
import ext_metadata from '../../package.json'

const Footer = () => {
    return(
        <Fragment>
            <div className="popup_footer">
                <Container maxW="container.xl">
                    <SimpleGrid columns={2}>
                    <Box height="30px" m={2}>
                     <p className="ext_credits">
                        Made with ❤ by 
                        <a href="https://shashankbhat.co.in" target="_blank">
                           <strong>
                            Bhat
                           </strong>
                        </a>
                     </p>
                    </Box>
                    <Box>
                        <Text className="ext_version">
                           {ext_metadata.version}
                        </Text>
                    </Box>
                    </SimpleGrid>
                </Container>
            </div>
        </Fragment>
    )
}

export default Footer;