import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import gerl from "../../../assets/images/gerl.webp"
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'} justify={'space-between'} gap={'78px'}>
                    <Project name={'Project Name'} text={'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'} src={gerl} button={'View Project'}/>
                    <Project name={'Project Name'} text={'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'} src={gerl} button={'View Project'}/>
                    <Project name={'Project Name'} text={'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'} src={gerl} button={'View Project'}/>
                </FlexWrapper>

            </Container>

        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
`

