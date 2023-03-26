import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
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
    const [icon, setIcon] = useState('')
    const [mode, setMode] = useState('')


    useEffect(() => {
        if (theme === "dark") {
            setIcon('/assets/icons/menu-white.png')
            setMode('/assets/icons/sun.png')
        } else {
            setIcon('/assets/icons/menu-black.png')
            setMode('/assets/icons/dark.svg')
        }

    })


    return (
        <div className=' flex justify-between fixed w-full items-center px-4 md:px-8 z-50  py-4'>
            {/* burger */}
            <div onClick={() => {
                setStatus(!statusDrawer)
            }} className='px-4 py-2 order-1 md:hidden rounded-md hover:bg-slate-200 cursor-default dark:hover:bg-slate-700'>
                <Image src={icon} className='' width={25} height={25} alt='burger' />

            </div>
            <ul className={clsx('md:flex bg-bg-light dark:bg-bg-dark flex-row  gap-2 cursor-default order-2',
                statusDrawer ? 'flex flex-col absolute p-4 rounded-md top-16 left-12 border-2 md:flex-row md:mt-0 md:static md:border-0' : 'hidden'
            )}>
                <li className={selectedNav == "Home" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 dark:hover:bg-slate-700"}><Link key="home" href="/">Home</Link></li>
                <li className={selectedNav == "Portofolio" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 dark:hover:bg-slate-700"}><Link key="portofolio" href="/portofolio">Portofolio</Link></li>
                <li className={selectedNav == "Achievements" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 dark:hover:bg-slate-700"}><Link key="achievements" href="/achievements">Achievements</Link></li>
                <li className={selectedNav == "Contact" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 dark:hover:bg-slate-700"}><Link key="contact" href="/contact">Contact</Link></li>
            </ul>
            <div className='px-4 py-2 order-2 md:order-1 h-full hover:bg-slate-200 rounded-md cursor-default dark:hover:bg-slate-700'>
                <p className='poppins-regular'>{title}</p>
            </div>
            {/* set theme */}
            <div onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }} className='px-4 py-2 order-3 hover:bg-slate-200 rounded-md cursor-default dark:hover:bg-slate-700'>
                <Image className='dark:fill-white' width={25} height={25} src={mode} alt='burger' />
            </div>
        </div>
    )
}
