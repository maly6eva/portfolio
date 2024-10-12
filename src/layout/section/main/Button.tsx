import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";


type ButtonPropsType = {
    button?: string
    type?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <ButtonText>
            <Link href="">{props.button}</Link>
        </ButtonText>
    );
};

const ButtonText = styled.button`
    margin: 0 12px 0 0;
    padding: 8px 24px;
    border-radius: 8px;
    
    &:hover {
        background-color: ${Theme.colors.accent};
    }
`

const Link = styled.a`
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    color: ${Theme.colors.spanCl};
`