import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {Button, StyledButton} from "../../../components/SuperButton/Button";

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
                    <Button type={'submit'}>Send</Button>
                </StyledFrom>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`

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
        height: 160px;
    }

    ${StyledButton} {
        background-color: ${Theme.colors.accent};
        align-self: end;
        border: none;
        border-radius: 8px;
    }

    @media ${Theme.media.mobile} {
        max-width: 345px;
    }
`

const FormLabel = styled.label`

`
const Field = styled.input`
    margin-bottom: 24px;
    width: 100%;
    height: 40px;
    border: none;

    &:focus-visible {
        outline: 1px solid ${Theme.colors.accent}
    }
`

