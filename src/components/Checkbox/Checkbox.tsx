import React from 'react';
import {CheckboxProps} from "./types";

const Checkbox = ({checked, label, onChange}: CheckboxProps) => {
    return (
        <div className="flex justify-start items-center mr-4 pt-8 w-full">
            <input type="checkbox"
                checked={checked}
                onChange={onChange}
                className="mr-4 min-w-[20px] min-h-[20px]"
            />
            <label>{label}</label>
        </div>
    );
};

export default Checkbox;