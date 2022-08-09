import React from "react";

export type TextareaProps = {
    value: string,
    title?: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}