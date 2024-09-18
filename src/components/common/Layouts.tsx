import React from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutsTypes = {
    children: React.ReactNode
}

const Layouts = ({ children }: LayoutsTypes) => {
    return (
        <div className='flex flex-col w-full relative h-fit overflow-x-hidden'>
            <div className='absolute top-0 right-0 left-0 bg-white'>
                <Header />
            </div>
            <div className={`mt-[83px]  h-[calc(100vh-83px)] flex overflow-hidden overflow-y-auto flex-col`}>
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layouts