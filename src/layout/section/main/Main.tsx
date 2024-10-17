import React from 'react';
import {Button, StyledButton} from "../../../components/SuperButton/Button";
import {Icon} from "../../../components/icon/Icon";
import ksenia from "../../../assets/images/ksenia.webp"
import yellow from "../../../assets/images/yellow.svg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <ContainMain>
                        <MainTitle>Software Developer</MainTitle>
                        <MainName>Hello, my name is Ksenia Malysheva</MainName>
                        <MainText>Short text with details about you, what you do or your professional career. You can
                            add more
                            information on the about page.</MainText>
                        <StyledButton>Projects</StyledButton>
                        <StyledButton>LinkedIn</StyledButton>
                    </ContainMain>
                    <ContainPhoto>
                        <Yellow src={yellow} alt=""/>
                        <PhotoWrapper>
                            <Photo src={ksenia} alt=""/>
                        </PhotoWrapper>
                    </ContainPhoto>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 100vh;
    position: relative;
    display: flex;
`

const ContainMain = styled.div`
    flex-wrap: wrap;
    padding-top: 50px;
    ${StyledButton} {
        &:hover {
            background-color: ${Theme.colors.accent};
        }
    }

    @media ${Theme.media.maxWidth} {
        width: 100%;
        padding-top: 450px;

    }
}

`




const MainTitle = styled.h1`
    font-family: Nunito, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    color: ${Theme.colors.accent}
`

const MainName = styled.h2`
    font-family: Roboto, sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    color: ${Theme.colors.title};
    padding-top: 12px;
`

const MainText = styled.p`
    font-family: Nunito, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    color: ${Theme.colors.text};
    padding: 32px 0;
`

const ContainPhoto = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 720px;
    height: 629px;

 
`
const Yellow = styled.img`
    position: absolute;
    right: 0;
    top: -120px;
    width: 920px;
    height: 830px;
    z-index: 0;
    flex-shrink: 5;
    flex-grow: 2;
    background-size: cover;
    @media ${Theme.media.tab} {
        max-width: 600px;
        min-height: 390px;
        width: 100%;
        margin-bottom: 50px;
    }


    @media ${Theme.media.mobile} {
        top: -220px;
        width: 100%;
        max-width: 550px;
        min-height: 390px;
    }
`

const Photo = styled.img`
    position: absolute;
    z-index: -10;
    clip-path: circle(60% at 70% 40%);
    flex-wrap: wrap-reverse;
    //background-size: cover;
   
    @media ${Theme.media.tab} {
        width: 100%;
        max-width: 450px;
        min-height: 390px;
        margin-bottom: 50px;

    
        
       
    }
    @media ${Theme.media.mobile} {
        
        width: 100%;
        
        height: 390px;
    }


`
const PhotoWrapper = styled.div`
    position: relative;


    &::before {
        content: '';
        width: 512px;
        height: 642px;
        border: 40px dotted ${Theme.colors.accent};
        direction: rtl;
        border-radius: 10% 30% 50% 70%;
        z-index: 0;

        position: absolute;
        top: -65px;
        left: 20px;
        right: 120px;
        @media ${Theme.media.tab} {
            width: 100%;
            max-width: 450px;
            min-height: 390px;

        }
    }



`



