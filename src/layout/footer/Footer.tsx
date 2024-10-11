import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import vector from "../../assets/images/vector.svg"
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
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
                            <Icon width={'48px'} height={'48px'} viewBox={'0 0 48px 48px'} iconId={'email'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>Madelyn Torff 2021 </Copyright>

            </FlexWrapper>

            <FooterImg src={vector} alt=""/>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer``

const SocialList = styled.ul`
display: flex;
    gap: 24px;
    
    `
const SocialItem = styled.li``


const SocialLink = styled.a``

const Copyright = styled.small``


const FooterImg = styled.img`
width: 100%
`
