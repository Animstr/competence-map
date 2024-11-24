interface Props {
    text: string,
    theme: string,
}

export const TextArea = ({text, theme}: Props) => {

    return (
        <div className={theme}>
            {text}
        </div>
    )
}