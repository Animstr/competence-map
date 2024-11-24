interface Props {
    theme: string,
    children?: React.ReactNode
}
export const Sphere = ({children, theme}: Props) => {
    return (
        <div className={theme}>
            {children}
        </div>
    )
}