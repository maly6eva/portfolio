import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";


type ButtonPropsType = {
    type?: "button" | "submit" | "reset" | undefined
    children: React.ReactNode
    align?: string | undefined
}


export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton type={props.type}>
            {props.children}
        </StyledButton>
    );
};

export const StyledButton = styled.button`
    margin: 0 12px 0 0;
    padding: 8px 24px;
    border-radius: 8px;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    color: ${Theme.colors.spanCl};
    
   
`