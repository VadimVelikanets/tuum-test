import React from "react";

export const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, callback: () => void) => {

    React.useEffect(() => {
        const handleClick = ({target}: MouseEvent ) => {
            if (ref?.current && !ref?.current?.contains(target as Node)) {
                callback();
            }
        };

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [ref]);
};