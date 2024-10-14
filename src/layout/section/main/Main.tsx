import React from 'react';
import {Button} from "../../../components/SuperButton/Button";
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
                    <div>
                        <MainTitle>Software Developer</MainTitle>
                        <MainName>Hello, my name is Ksenia Malysheva</MainName>
                        <MainText>Short text with details about you, what you do or your professional career. You can
                            add more
                            information on the about page.</MainText>
                        <Button>Projects</Button>
                        <Button>LinkedIn</Button>
                    </div>
                    <Yellow src={yellow} alt=""/>
                    <PhotoWrapper>
                        <Photo src={ksenia} alt=""/>
                    </PhotoWrapper>
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
const Yellow = styled.img`
    position: absolute;
    right: 0;
    top: -80px;
    width: 920px;
    height: 830px;
    z-index: 0;
`

const Photo = styled.img`
    z-index: 999;
    clip-path: circle(60% at 70% 40%);


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
        z-index: 999;

        position: absolute;
        top: -65px;
        left: 20px;
        right: 120px;
    }
`



