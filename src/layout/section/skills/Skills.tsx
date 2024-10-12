import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} align={'center'} justify={'space-between'} >
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
    margin: 0 120px;
   


    min-height: 514px;
    
  
`


