import React from 'react';
import {Button} from "./Button";
import {Icon} from "../../../components/icon/Icon";
import ksenia from "../../../assets/images/ksenia.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
              <div>
                <MainTitle>Software Developer</MainTitle>
                <MainName>Hello, my name is Ksenia Malysheva</MainName>
                <MainText>Short text with details about you, what you do or your professional career. You can add more
                    information on the about page.</MainText>
                <Button button={'Projects'}/>
                <Button button={'LinkedIn'}/>
              </div>

                <Icon iconId={'yellow-bg'} width="720" height="629" viewBox="0 0 720 629"/>
                <Photo src={ksenia} alt=""/>

            </FlexWrapper>
        </StyledMain>
);
};



const StyledMain = styled.div`
    min-height: 100vh;
`

const MainText = styled.p`
   
`
const MainTitle = styled.h1`
   
`

const MainName = styled.h2`
    font-family: Roboto, sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
`

const Photo = styled.img`
    position: absolute;
    right: 50px;
    top: 130px;
`

