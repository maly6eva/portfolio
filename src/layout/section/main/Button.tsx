import React from 'react';



type ButtonPropsType = {
    button?: string
    type?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button>
            <a href="">{props.button}</a>
        </button>
    );
};

