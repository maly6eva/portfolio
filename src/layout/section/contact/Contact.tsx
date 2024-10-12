import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../main/Button";
import {Container} from "../../../components/Container";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <StyledFrom>
                    <FormLabel htmlFor="username">Name</FormLabel>
                    <Field/>
                    <FormLabel htmlFor="username">Email</FormLabel>
                    <Field/>
                    <FormLabel htmlFor="username">Message</FormLabel>
                    <Field as={'textarea'}/>
                    <Button type={'submit'} button={'Send'}/>

                </StyledFrom>
            </Container>


        </StyledContact>
    );
};

const StyledContact = styled.section`
 
    min-height: 50vh;
`

const StyledFrom = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 auto;


    textarea {
        resize: none;
       
    }
    
`

const FormLabel = styled.label`
`
const Field = styled.input`
   
`