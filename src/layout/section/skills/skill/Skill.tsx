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
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Icon iconId={props.iconId}/>
            </FlexWrapper>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 15%;
    margin: 20px 0 120px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`