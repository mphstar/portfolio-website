
import Head from 'next/head'
import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {
    AnimatePresence,
    domAnimation,
    LazyMotion,
    m,
} from 'framer-motion';
import { Router, useRouter } from 'next/router';
import { variants } from './anim'

interface templateType {
    children: ReactNode
    title: string
    selectedNav: string

}

export default function Template(props: templateType) {
    const { children, title, selectedNav } = props
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Navbar selectedNav={selectedNav} title='Mphstar' />
            <LazyMotion features={domAnimation}>
                <m.div
                    key={router.asPath}
                    variants={variants}
                    initial='hidden'
                    animate='enter'
                    exit='exit'
                    transition={{ ease: 'easeInOut', duration: 0.5 }}
                    className={('flex flex-col h-full flex-grow')}
                >
                    <div className='flex flex-col justify-start px-4'>

                        {children}
                        <Footer />
                    </div>
                </m.div>
            </LazyMotion>
        </>
    )
}
