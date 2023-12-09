import React from 'react'
import Main from '@/components/Template'
import Lottie from 'lottie-react'
import animationData from '../components/lottie/maintenance.json'

export default function achievements() {
    return (
        <Main selectedNav='Achievements' title='Mphstar | Achievements'>
            <div className='flex flex-col w-full flex-1  mt-16 justify-start  items-center overflow-hidden'>
                <div className='flex flex-col items-center h-full flex-shrink mt-10 mb-20'>
                    <Lottie
                        animationData={animationData}
                        autoplay={true}
                        loop={true}
                        className="h-[400px]"
                    />
                <p className='poppins-semibold text-2xl flex text-center'>Comming Soon 👋</p>
                </div>
            </div>
        </Main>
    )
}
