import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Theme} from "../../../../styles/Theme";
import {StyledButton} from "../../../../components/SuperButton/Button";


type ProjectPropsType = {
    name?: string;
    text?: string;
    src?: string;
    button?: string;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper justify={'center'} align={'center'}>
                <ContentText>
                    <ProjectName>{props.name}</ProjectName>
                    <ProjectText>{props.text}</ProjectText>
                    <StyledButton>{props.button}</StyledButton>
                </ContentText>
                <Image src={props.src} alt=""/>
            </FlexWrapper>
        </StyledProject>
    );
};


const Image = styled.img`
    width: 496px;
    height: 526px;
    border-radius: 0 30px 30px 0;
`

const StyledProject = styled.div`
    &:nth-child(even) {
        ${FlexWrapper} {
            flex-direction: row-reverse;
        };

        ${Image} {
            border-radius:  30px 0 0 30px;
        }
    }
    ${FlexWrapper} {
        width: 100%;
        border-radius: 30px;
        background-color: ${Theme.colors.secondaryBg};
    }
`

const ProjectName = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 150%;`

const ProjectText = styled.p`
    font-family: Nunito, sans-serif;
    color: ${Theme.colors.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    padding: 24px 0;
`

const ContentText = styled.div`
    width: 496px;
    height: 526px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 160px 38px 160px 50px;

    ${StyledButton}{
        width: 38%;
        border-radius: 24px;
    }
`