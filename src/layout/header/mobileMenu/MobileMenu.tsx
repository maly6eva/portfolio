import {Theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href=''>{item}</Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.nav`
    
    @media ${Theme.media.tablet} {
        display: none;
    }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 10px;
    right: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(31, 31, 32, 0.3);
    display: none;
    
    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 48px;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media ${Theme.media.tablet} {
            display: none;
        }
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99;
    border: none;

    span {
        display: block;
        width: 25px;
        height: 2px;
        background-color: ${Theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 60px;
        
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: darkred;
        `}
        
        &::before {
            content: '';
            display: block;
            width: 25px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 25px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

const ListItem = styled.li`
    
`
const Link = styled.a`
    font-family: Raleway, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    color: ${Theme.colors.spanCl};
    position: relative;
`

