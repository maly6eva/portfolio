import React from 'react';
import {Button, StyledButton} from "../../../components/SuperButton/Button";
import {Icon} from "../../../components/icon/Icon";
import ksenia from "../../../assets/images/ksenia.webp"
import yellow from "../../../assets/images/yellow.svg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={'reverse-wrap'}>
                    <ContainMain>
                        <MainTitle>Software Developer</MainTitle>
                        <MainName>Hello, my name is <span> Ksenia Malysheva</span></MainName>
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
    position: relative;
    display: flex;
    min-height: 100vh;
   
`

const ContainMain = styled.div`
    position: absolute;
    flex-wrap: wrap;
    width: 610px;
    
    
    ${StyledButton} {
        &:hover {
            background-color: ${Theme.colors.accent};
        }
    }
}


@media ${Theme.media.contText} {
    top: 700px;
    width: 100%;
}
@media ${Theme.media.mobile} {
    top: 600px;
    width: 100%;
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
    ${font({family: 'Roboto, sans-serif', weight: 700, Fmax: 64, Fmin: 42, color: Theme.colors.title})}
    line-height: 120%;
    padding-top: 12px;
    
    span{
        white-space: nowrap;   
    }
   
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
`

const PhotoWrapper = styled.div`

`

const Yellow = styled.img`
    position: absolute;
    background-size: contain;
    top: -220px;
    right: 0;
    max-width: 780px;
    min-height: 880px;
    width: 100%;
    z-index: 0;
    
    @media ${Theme.media.tab} {
        width: 100%;
    }
    
    @media ${Theme.media.mobile} {
        width: 100%;
    }
    
`
const Photo = styled.img`
    position: absolute;
    background-size: contain;
 
    min-height:  612px;
    max-width: 410px;
    width: 100%;
    right: 250px;
    top: 150px;
    
    clip-path: circle(60% at 70% 40%);
    object-fit: cover;

    
     @media ${Theme.media.tab} {
         min-height:  550px;
         max-width: 440px;
         right: 0px;
         left: 150px;
         width: 100%;
     }
    
     @media ${Theme.media.mobile} {
         min-height:  400px;
         max-width: 345px;
         right: 0px;
         left: 20px;
         width: 100%;
         top: 200px;
     }
`



