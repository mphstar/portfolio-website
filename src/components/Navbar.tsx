import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import clsx from 'clsx';

interface typeTitle {
    title: string
    selectedNav: string

}
export default function Navbar(props: typeTitle) {

    const { title, selectedNav } = props
    const { theme, setTheme } = useTheme()

    const [statusDrawer, setStatus] = useState(false)
    const [icon, setIcon] = useState('/assets/icons/menu-white.png')
    const [mode, setMode] = useState('/assets/icons/sun.png')


    useEffect(() => {
        window.addEventListener('resize', function(){
            setStatus(false)
        });

        if (theme === "dark") {
            setIcon('/assets/icons/menu-white.png')
            setMode('/assets/icons/sun.png')
        } else {
            setIcon('/assets/icons/menu-black.png')
            setMode('/assets/icons/dark.svg')
        }
    })

    


    return (
        <>
            <div onClick={(prev) => setStatus(!prev)} className={`bg-black transition  z-[101] h-screen w-screen fixed bottom-0 ${statusDrawer ? "opacity-60 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></div>
            <div className=' flex justify-between fixed w-full items-center z-[101] py-4'>
                {/* burger */}
                <div onClick={() => {
                    setStatus(!statusDrawer)
                }} className='px-4 ml-4 py-2 order-1 md:hidden rounded-md hover:bg-slate-200 cursor-default dark:hover:bg-slate-700'>
                    <Image src={icon} className='' width={25} height={25} alt='burger' />

                </div>
                <div className={`${statusDrawer ? "duration-700 w-60 px-6" : "w-0 duration-700"} md:duration-[0ms] fixed top-0 h-screen md:h-fit md:static md:order-2 md:flex md:w-fit bg-bg-light dark:bg-bg-dark md:bg-transparent dark:md:bg-transparent overflow-hidden`}>
                    <ul className={`flex flex-col mt-12 md:mt-0 md:flex-row gap-2`}>
                        <li className={selectedNav == "Home" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 w-full dark:hover:bg-slate-700"}><Link className='w-full flex h-full' key="home" href="/">Home</Link></li>
                        <li className={selectedNav == "Portofolio" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 w-full dark:hover:bg-slate-700"}><Link className='w-ful flex h-full' key="portofolio" href="/portofolio">Portofolio</Link></li>
                        <li className={selectedNav == "Achievements" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 w-full dark:hover:bg-slate-700"}><Link className='w-full flex h-full' key="achievements" href="/achievements">Achievements</Link></li>
                        <li className={selectedNav == "Contact" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 w-full dark:hover:bg-slate-700"}><Link className='w-full flex h-full' key="contact" href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className='ml-4 md:ml-8 px-4 py-2 order-2 md:order-1 h-full hover:bg-slate-200 rounded-md cursor-default dark:hover:bg-slate-700'>
                    <p className='poppins-regular'>{title}</p>
                </div>
                {/* set theme */}
                <div onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                }} className='mr-4 md:mr-8 px-4 py-2 order-3 hover:bg-slate-200 rounded-md cursor-default dark:hover:bg-slate-700'>
                    <Image className='dark:fill-white' width={25} height={25} src={mode} alt='burger' />
                </div>
            </div>
        </>
    )
}
