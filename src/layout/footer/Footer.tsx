import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import vector from "../../assets/images/vector.svg"
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";
import {Container} from "../../components/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'48px'} height={'48px'} viewBox={'0 0 48px 48px'} iconId={'instagram'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'48px'} height={'48px'} viewBox={'0 0 48px 48px'} iconId={'group'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon width={'48px'} height={'48px'} viewBox={'0 0 48px 48px'} iconId={'linked'}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright>Madelyn Torff 2021 </Copyright>
                </FlexWrapper>
            </Container>



                <FooterImg src={vector} alt=""/>



        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    padding: 56px 0 0 0;
    position: relative;
    
    ${Container} {
        
    
    }
`

const SocialList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 24px;
    margin: 56px 0 32px 0;
    
  
`
const SocialItem = styled.li`
    z-index: 9;
    align-self: center;
  
`


const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Theme.colors.font};
    
    &:hover{
        color: ${Theme.colors.text};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-family: Nunito, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${Theme.colors.text};
    z-index: 9;
`

const FooterImg = styled.img`
    width: 100%;
    position: absolute;
    top: 100px;
    background-color: ${Theme.colors.primaryBg};

    // z-index: -3;
`
