import {SimpleGrid, Container, Heading} from "@chakra-ui/react";
import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({heading, docs = [], handleRemove, handlePin, handleUnpin}) => {
    return(
        <Fragment>
        <Heading p={10} as="h6" size="xs" className="popup_heading">
            {heading}
        </Heading>
        <Container maxW="container.xl">
            <SimpleGrid columns={2}>
                {docs.map((doc, i) => (
                    <Card key={i} doc={doc} handlePin={handlePin} handleRemove={handleRemove} handleUnpin={handleUnpin}/>
                ))}
            </SimpleGrid>
        </Container>
        </Fragment>
    )
}

export default CardList