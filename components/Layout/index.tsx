import { ReactNode } from "react";
import Menu from "../Menu";
import Head from 'next/head'

interface Layout {
    children: ReactNode
    pageTitle: string
}

export default function Layout(props: Layout) {
    const { children, pageTitle } = props
    return (
        <div className="container">
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Welcome to my Next JS trial" />
            </Head>
            <Menu />
            <div className="element">{children}</div>
        </div>
    )
}
