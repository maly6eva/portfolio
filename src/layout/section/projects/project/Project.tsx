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
    max-width: 496px;
    width: 100%;
    height: 524px;
    border-radius: 0 30px 30px 0;
    object-fit: cover;
`

const StyledProject = styled.div`
    max-width: 990px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;
    align-content: center;

    &:nth-child(even) {
        ${FlexWrapper} {
            flex-direction: row-reverse;
        }

        ${Image} {
            border-radius: 30px 0 0 30px;

            @media ${Theme.media.tab} {
                max-width: 340px;
                width: 100%;
                height: 526px;
                border-radius: 30px 30px 0 0;
            }
        }
    }

    ${FlexWrapper} {
        border-radius: 30px;
        background-color: ${Theme.colors.secondaryBg};
    }
}

@media ${Theme.media.contProject} {
    max-width: 790px;
    width: 100%;
    flex-wrap: wrap-reverse;
    align-content: center;

    ${Image} {
        max-width: 400px;
        width: 100%;
        height: 426px;
    }

    ${FlexWrapper} {
        max-width: 790px;
        width: 100%;
        height: 426px;
    }
}

@media ${Theme.media.tab} {

    ${FlexWrapper} {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap-reverse;
        align-content: center;
        max-width: 340px;
        width: 100%;
        height: 950px;
    }

    ${Image} {
        max-width: 340px;
        width: 100%;
        height: 526px;
        border-radius: 30px 30px 0 0;
    }
}
`
const ContentText = styled.div`
    width: 496px;
    height: 526px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 160px 38px 160px 50px;

    ${StyledButton} {
        max-width: 155px;
        height: 45px;
        width: 100%;
        border-radius: 24px;
    }
`

const ProjectName = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 150%;
`

const ProjectText = styled.p`
    font-family: Nunito, sans-serif;
    color: ${Theme.colors.text};
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    padding: 24px 0;
`


