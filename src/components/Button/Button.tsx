import React from 'react';
import {ButtonProps} from "./types";
import './Button.scss';

const Button = ({disabled, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick} className="btn text-neutral-500 text-2xl mt-8" disabled={disabled}>
            Submit form
        </button>
    );
};

export default React.memo(Button);