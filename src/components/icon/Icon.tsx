import React from 'react';
import sprite from "../../assets/images/sprite.svg";


type IconPropsType = {
    iconId?: string;
    width?: string;
    height?: string;
    viewBox?: string;

}


export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "112"} height={props.height || "112"} viewBox={props.viewBox || "0 0 112 112"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </svg>
    )
}
