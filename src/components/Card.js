import { Box, Button, Text } from "@chakra-ui/react";
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import React from 'react'

const Card = ({doc, handleRemove, handlePin, handleUnpin}) => {
    return(
        <Box key={doc.id}>
            <Text>
                {doc.name}
            </Text>
            <Button as="a" href={doc.link} target="_blank">
                Check
            </Button>
            <Button onClick={() => handleRemove(doc)}></Button>
            {doc.pinned ? 
                <FaHeart size="24px" onClick={() => handleUnpin(doc)}/> 
                : 
                <FaRegHeart size="24px" onClick={() => handleUnpin(doc)} />
            }
        </Box>
    )
}

export default Card;