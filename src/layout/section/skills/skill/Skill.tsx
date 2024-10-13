import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";



type SkillPropsType = {
    iconId: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper wrap={'wrap'} justify={'center'} align={'center'}>
                <Icon iconId={props.iconId}/>
            </FlexWrapper>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 15%;
    padding: 20px 0 95px 0;
    
    &::first-line{
        content: '';
        padding: 300px;
    }



`