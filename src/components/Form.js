import { Input, Stack, InputGroup, Button } from '@chakra-ui/react';
import React, { Fragment } from 'react';

const Form = ({handleAdd, setName, setLink}) => {
    return(
        <Fragment>
            <Stack spacing={4}>
                <InputGroup>
                    <Input type="url" onChange={(e) => setLink(e.target.value)} placeholder="url" />
                </InputGroup>
                <InputGroup>
                    <Input onChange={(e) => setName(e.target.value)} placeholder="name"/>
                </InputGroup>
                <Button onClick={handleAdd} placeholder="name"/>
          </Stack>
        </Fragment>
    )
}

export default Form
