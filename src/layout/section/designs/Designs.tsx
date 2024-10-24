import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
// import {Design} from "./design/Design";
import card1 from "../../../assets/images/card1.webp";
import card2 from "../../../assets/images/card2.webp";
import card3 from "../../../assets/images/card3.webp";
import card4 from "../../../assets/images/card4.webp";
import card5 from "../../../assets/images/card5.webp";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Designs = () => {
    return (
        <StyledDesigns>
            <FlexWrapper>
                <Design src={card3} width={310} height={270}/>
                <Design src={card2} width={310} height={380}/>
                <Design src={card3} width={310} height={270}/>
                <Design src={card1}  width={310} height={380}/>
                <Design src={card4} width={310} height={270}/>
                <Design src={card5}  width={310} height={380}/>
            </FlexWrapper>

        </StyledDesigns>
    );
};

const StyledDesigns = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(3, 310px);
    grid-template-rows: 540px 225px 540px;
    column-gap: 10px;
    row-gap: 15px;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;

`

const Design = styled.img`
    :nth-child(2) {
        grid-column: 2/3;
        grid-row: 1/3;
    }

    :nth-child(4) {
        grid-column: 1/2;
        grid-row: 2/4;

    }

    :nth-child(5) {
        grid-column: 2/3;
        grid-row: 3/4;
    }

    :nth-child(6) {
        grid-column: 3/4;
        grid-row: 2/4;

    }


  
`








// const Card = styled.div`
// `
{/*<Card>1</Card>*/}
{/*<Card>2</Card>*/}
{/*<Card>3</Card>*/}
{/*<Card>4</Card>*/}
{/*<Card>5</Card>*/}
{/*<Card>6</Card>*/}