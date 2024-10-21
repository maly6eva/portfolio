import {Theme} from "../../../styles/Theme";
import styled from "styled-components";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href=''>{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 48px;

        @media ${Theme.media.tab} {
            display: none;
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




