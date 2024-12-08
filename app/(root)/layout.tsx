import React from 'react'
import Navbar from '../components/navbar'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>)
}

export default Layout