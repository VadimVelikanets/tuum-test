import React from "react";

export type InputProps = {
    value: string,
    type: string,
    placeholder?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}