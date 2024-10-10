import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type ProjectPropsType = {
    name?: string;
    text?: string;
    src?: string;
    button?: string;

}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction={'row'} justify={'center'} align={'center'} >
                <ContentText>
                    <ProjectName>{props.name}</ProjectName>
                    <ProjectText>{props.text}</ProjectText>
                    <ProjectButton>{props.button}</ProjectButton>
                </ContentText>


                <Image src={props.src} alt=""/>
            </FlexWrapper>

        </StyledProject>
    );
};

const StyledProject = styled.div`
   
    ${FlexWrapper} {
        width: 100%;
      


    }
`

const ProjectName = styled.h3``

const ProjectText = styled.p``

const ProjectButton = styled.button`
   width: 35%;
 padding: 8px 24px;
    
`

const Image = styled.img`
    width: 496px;
    height: 526px;
`

const ContentText = styled.div`
    width: 496px;
    height: 526px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`