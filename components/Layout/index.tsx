import { ReactNode } from "react";
import Menu from "../Menu";

interface LayoutProps {
    children: ReactNode
}

export default function Layout(props: LayoutProps) {
    const { children } = props
    return (
        <div className="container">
            <Menu/>
            <div className="element">{children}</div>
        </div>
    )
}
