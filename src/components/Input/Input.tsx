import React from 'react';
import {InputProps} from "./types";

const Input = ({value, type, placeholder, onChange}: InputProps) => {

    return (
        <>
            <input type={type}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
                   className="bg-transparent outline-none border-b-2 border-gray-500 py-2  w-full sm:w-[calc(50%-16px)] mb-8"
            />
        </>
    );
};

export default React.memo(Input);