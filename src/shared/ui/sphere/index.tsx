import { useEffect, useState } from "react"

interface Props {
    theme: string,
    children?: React.ReactNode,
    active: string,
    click: Function
}
export const Sphere = ({children, theme, active, click}: Props) => {
    const handleClick = (e: any) => {
        click(e.target)
    }
    return (
        <div className={theme} onClick={handleClick}>
            {children}
        </div>
    )
}