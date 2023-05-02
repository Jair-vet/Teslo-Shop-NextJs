import Head from "next/head"
import { PropsWithChildren, FC } from "react"
import { Navbar, SideMenu } from "../ui"

interface Props extends PropsWithChildren {
    title: string
    pageDescription: string
    imageFullUrl?: string
}

export const ShopLayout:FC<Props> = ({ children, imageFullUrl, pageDescription, title}) => {
  return (
    <>
        <Head>
            <title>{ title }</title>

            <meta name="description" content={ pageDescription }/>
            <meta name="og:title" content={ title }/>
            <meta name="og:description" content={ pageDescription }/>

            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl }/>
                )
            }
        </Head>

        {/* {Navbar } */}
        <nav>
            <Navbar />
        </nav>

        {/* Sidebar */}
        <SideMenu />

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>


        {/* FOOTER */}
        <footer>
            {/* { TODO: Footer } */}
        </footer>
    </>
  )
}
