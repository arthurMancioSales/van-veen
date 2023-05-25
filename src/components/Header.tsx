'use client'

import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Menu from './Menu'
import Link from 'next/link'

export default function Header() {
    const [menu, setMenu] = useState(false)

    return (
        <>  
            {menu ? (
                <div className="fixed w-[100vw] h-screen z-[90] bg-[#00000060]" onClick={() => setMenu(!menu)}>
                    <Menu></Menu>
                </div>
            ) : ""}

            <header className="sticky top-0 z-50 flex items-center justify-start gap-2 px-6 pt-2 pb-2 bg-blue-200 lg:px-20 lg:py-5">
                <button onClick={() => setMenu(!menu)} className='flex flex-row gap-2 lg:hidden'>
                    <Bars3Icon className='w-8 text-white'></Bars3Icon>
                </button>
                <h1 className="text-xl font-semibold text-white lg:hidden">Dream On</h1>
                <nav className="hidden w-full gap-4 lg:justify-between lg:items-center lg:flex">
                    <Link href={"/"} className="text-xl font-semibold text-white transition-all duration-300 ease-in-out hover:underline hover:text-black">Home</Link>
                    <Link href={"/about-us"} className="text-xl font-semibold text-white transition-all duration-300 ease-in-out hover:underline hover:text-black">Sobre nós</Link>
                    <div className="flex justify-end flex-1">
                        <Link href={"/"} className='p-1 text-xl font-semibold text-white duration-300 ease-in-out bg-orange-400 rounded-md cursor-pointer justify-self-end hover:bg-blue-900'>Entre em contato</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}