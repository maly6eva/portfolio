import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'center'}>
                    <Skill iconId={'vscode'}/>
                    <Skill iconId={'js'}/>
                    <Skill iconId={'css'}/>
                    <Skill iconId={'html'}/>
                    <Skill iconId={'gsap'}/>
                    <Skill iconId={'vector'}/>
                    <Skill iconId={'github'}/>
                    <Skill iconId={'git'}/>
                    <Skill iconId={'react'}/>
                    <Skill iconId={'sass'}/>
                    <Skill iconId={'bootstrap'}/>
                    <Skill iconId={'tailwind'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
    @media ${Theme.media.contText} {
        margin-top: 140px;
    }

    @media ${Theme.media.mobile} {
        margin-top: 90px;
    }

    ${SectionTitle} {
        margin-bottom: 0;
    }
`


