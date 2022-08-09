import React, {memo, useEffect, useState, useRef} from 'react';
import {SelectProps} from "./types";
import arrow from '../../assets/images/arrow.svg';
import {useOutsideClick} from "../../hooks/useOutsideClick";

const Select = ({placeholder, required, options, onSelect}: SelectProps) => {
    const [selectValue, setSelectValue] = useState('')
    const [selectOptions, setSelectOptions] = useState(options)
    const [isShowDropdown, setShowDropdown] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null)
    const onSelectValue = (item: string) => {
        onSelect(item)
        setSelectValue(item)
        setShowDropdown(false)
    }

    const onChangeSelectOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectValue(e.target.value)
    }

    useEffect(() => {
        const filteredOptions = options.filter(item => (item as any).name?.toLocaleLowerCase().indexOf(selectValue.toLocaleLowerCase()) !== -1)
        setSelectOptions(filteredOptions)
    }, [selectValue])

    useEffect(() => {
        setSelectOptions(options)
    }, [options])

    const handleClickOutside = () => {
        setShowDropdown(false)
    }

    useOutsideClick(selectRef, handleClickOutside)

    return (
        <div className="relative w-full sm:w-[calc(50%-16px)]"
             ref={selectRef}
        >
            <input type="text"
                   placeholder={placeholder}
                   value={selectValue}
                   onChange={onChangeSelectOptions}
                   required={required}
                   onClick={() => setShowDropdown(true)}
                   className="bg-transparent outline-none border-b-2 border-gray-500 py-2 w-full mb-8 pr-4"
            />
            <img src={arrow}
                 className="absolute right-2 top-3 cursor-pointer"
            />
            {isShowDropdown && (
                <div className="absolute top-10 left-0  border-2 border-gray-500 w-full z-2 bg-[#A7D0D8] overflow-y-auto max-h-[320px] z-10">
                    {selectOptions.length > 0 ? (selectOptions.map((item: any) => (
                        <div key={item?.name}
                             className="p-2 hover:bg-neutral-500 cursor-pointer"
                             onClick={() => onSelectValue(item.name)}
                        >{item?.emoji} {item?.name}</div>
                    ))) : (
                        <div className="p-2">no options</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default memo(Select);