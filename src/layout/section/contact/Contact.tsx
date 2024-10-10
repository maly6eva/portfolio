import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../main/Button";

export const Contact = () => {
    return (
        <StyledContact>
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

        </StyledContact>
    );
};

const StyledContact = styled.section`
    margin-top: 145px;
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