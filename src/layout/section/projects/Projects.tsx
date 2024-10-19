import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import gerl from "../../../assets/images/gerl.webp"
import marker from "../../../assets/images/marker.webp"
import tel from "../../../assets/images/tel.webp"
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'} gap={'78px'}>
                    <Project name={'Project Name'}
                             text={'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'}
                             src={gerl} button={'View Project'}/>
                    <Project name={'Project Name'}
                             text={'What was your role, your deliverables, if the project was personal, freelancing.'}
                             src={marker} button={'View Project'}/>
                    <Project name={'Project Name'}
                             text={'You can also add in this description the type of the project, if it was for web, mobile, electron.'}
                             src={tel} button={'View Project'}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;

  
    ${FlexWrapper} {
        
    }
`

