import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import useSWR from 'swr';

interface typeTitle {
    title: string
    selectedNav: string
}



export default function Navbar(props: typeTitle) {

    const fetcher = (url: RequestInfo | URL) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/spotify', fetcher);

    const { title, selectedNav } = props
    const { theme, setTheme } = useTheme()

    const [statusDrawer, setStatus] = useState(false)
    const [icon, setIcon] = useState('/assets/icons/menu-white.png')
    const [mode, setMode] = useState('/assets/icons/sun.png')


    useEffect(() => {
        // console.log(data)
        window.addEventListener('resize', function () {
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
                }} className='px-4 ml-4 py-2 order-1 md:hidden rounded-md md:hover:bg-slate-200 cursor-default md:dark:hover:bg-slate-700'>
                    <Image src={icon} className='' width={25} height={25} alt='burger' />

                </div>
                <div className={`${statusDrawer ? "duration-700 w-60 px-4" : "w-0 duration-700"} md:duration-[0ms] fixed top-0 h-screen md:h-fit md:static md:order-2 md:flex md:w-fit bg-bg-light dark:bg-bg-dark md:bg-transparent dark:md:bg-transparent overflow-x-hidden`}>
                    <div className='flex flex-col justify-between h-full overflow-y-auto'>

                        <ul className={`flex flex-col mt-2 md:mt-0 md:flex-row gap-2`}>
                            <div className='flex flex-col h-fit w-full mt-8   md:hidden'>
                                <div className="flex flex-col h-fit justify-start items-start overflow-hidden w-40">
                                    <Image src={'/profile.png'} alt="Profile" width={30} height={30} className='rounded-full w-24 overflow-hidden h-24' />
                                    <p className='poppins-semibold text-blue-900 text-sm mt-2'>@Mphstar._</p>

                                </div>
                            </div>
                            <p className='poppins-bold text-sm overflow-hidden md:hidden mt-8 mb-2 text-gray-400'>List Pages</p>
                            <div className='h-[1px] w-full bg-gray-300 mb-4 md:hidden'></div>
                            <li className={selectedNav == "Home" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 w-full dark:hover:bg-slate-700"}><Link className='w-full flex h-full' key="home" href="/">Home</Link></li>
                            <li className={selectedNav == "Portofolio" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 w-full dark:hover:bg-slate-700"}><Link className='w-ful flex h-full' key="portofolio" href="/portofolio">Portofolio</Link></li>
                            <li className={selectedNav == "Achievements" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 w-full dark:hover:bg-slate-700"}><Link className='w-full flex h-full' key="achievements" href="/achievements">Achievements</Link></li>
                            <li className={selectedNav == "Contact" ? "bg-[#5F5F5F] text-white px-2 rounded-md py-2 dark:bg-white dark:text-black" : "px-2 rounded-md py-2 hover:bg-slate-200 w-full dark:hover:bg-slate-700"}><Link className='w-full flex h-full' key="contact" href="/contact">Contact</Link></li>

                        
                        </ul>
                        <div className='flex flex-col mb-8 w-full md:hidden'>
                            <div className='h-[1px] w-full bg-gray-300 mb-4'></div>
                            <p className='poppins-regular text-sm overflow-hidden text-gray-400 flex flex-row h-fit w-40'>{data?.isPlaying ? "Listening To Spotify" : "Recently Played Songs"}</p>
                            <div className='flex flex-row gap-2 mt-2 w-40'>
                                <img src={data?.albumImageUrl} alt={data?.album} className='object-cover w-10 rounded-sm' />
                                <div className='flex flex-col justify-center'>
                                    <p className='poppins-semibold text-xs overflow-hidden flex flex-row h-fit w-40'>{data?.artist}</p>
                                    <p className='poppins-regular text-xs overflow-hidden flex flex-row h-fit w-40'>{data?.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='ml-4 md:ml-8 px-4 py-2 order-2 md:order-1 h-full hover:bg-slate-200 rounded-md cursor-default dark:hover:bg-slate-700'>
                    <p className='poppins-regular'>{title}</p>
                </div>
                {/* set theme */}
                <div onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                }} className='mr-4 md:mr-8 px-4 py-2 order-3 md:hover:bg-slate-200 rounded-md cursor-default md:dark:hover:bg-slate-700'>
                    <Image className='dark:fill-white' width={25} height={25} src={mode} alt='burger' />
                </div>
            </div>
        </>
    )
}
