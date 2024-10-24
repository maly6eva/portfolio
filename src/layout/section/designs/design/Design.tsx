import React from 'react';
import styled, {CSSObject} from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";



type DesignPropsType = {
    src?: string
    width?: string
    height?: string

}

export const Design = (props: DesignPropsType) => {
    return (
        <StyledDesign>
                <Image src={props.src}alt=""/>
        </StyledDesign>
    );
};

const StyledDesign = styled.div`
  
    
`

const Image = styled.img`
    width: 100%;
`
