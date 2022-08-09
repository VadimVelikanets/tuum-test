export type SelectProps = {
    placeholder?: string,
    required?: boolean,
    onSelect: (item: string) => void
    options: object[]
}