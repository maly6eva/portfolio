import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Theme} from "../../../../styles/Theme";



type SkillPropsType = {
    iconId: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper justify={'center'} align={'center'} wrap={'wrap'}>
                <Icon iconId={props.iconId}/>
            </FlexWrapper>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    min-width: 120px;
    flex-grow: 1;
    padding: 74px 30px;
    
    @media ${Theme.media.mobile} {
        min-width: 112px;
        padding: 50px 30px;
    }
`