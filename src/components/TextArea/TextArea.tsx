import React from 'react';
import {TextareaProps} from "./types";

const TextArea = ({title, value, onChange}: TextareaProps) => {

    return (
        <div className="w-full flex flex-col">
            <label className="mb-2">{title}</label>
            <textarea
                className="bg-transparent outline-none border-2 border-gray-500 py-2 resize-none h-[112px] p-2"
                value={value}
                onChange={onChange}
            ></textarea>
        </div>
    );
};

export default React.memo(TextArea);