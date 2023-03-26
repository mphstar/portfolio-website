import CanvasControl from '@/components/CanvasControl'
import Main from '@/components/Template'
import clsx from 'clsx';
import Lottie from 'lottie-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas'
import Typed from 'react-typed'
import animationData from '../components/lottie/loading.json'

export default function Index() {
  const canvasRef = useRef(null);

  const clearHandler = () => {
    // @ts-ignore
    const clearCanvas = canvasRef.current?.clearCanvas;

    if (clearCanvas) {
      clearCanvas();
    }
  };

  


  const [color, setColor] = useState('rgba(99, 102, 241, 0.6)');
  return (
    <Main selectedNav='Home' title='Mphstar | Home'>
      
      <ReactSketchCanvas
        ref={canvasRef}
        style={{ zIndex: 5, }}
        canvasColor='transparent'
        className='bg-transparent absolute top-0 left-0 h-screen w-full'
        strokeWidth={5}
        strokeColor={color}
      />
      <div className='flex flex-col mt-16 h-[80vh] items-center justify-center md:flex-row md:gap-36 select-none'>
        <div className='flex justify-center md:order-2 relative'>
          <div className='absolute animate-spin h-56 w-56 -bottom-2 -z-10 bg-red-400 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-500'></div>
          <Image className='rounded-full h-52 w-52' height={100} width={100} src="/profile.png" alt='profile' />
        </div>
        <div className='order-1'>
          <div className='mt-4'>
            <p className='text-center md:text-left poppins-regular text-3xl'><b>Hi'</b> Im here! 👋</p>
          </div>
          <div>
            <p className='poppins-semibold text-center text-2xl bg-gradient-to-br from-blue-400 via-fuchsia-600 to-cyan-200 text-transparent bg-clip-text md:text-left'>Bintang Malindo Eka Putra</p>
          </div>
          <div>
            <Typed
              className='text-center w-full px-4 md:px-0 flex items-center justify-center text-lg poppins-regular md:text-left md:justify-start'
              strings={[
                "An Informatics Engineering Student",
                "I Love Software Development",
                "Lets be Friend",
              ]}
              typeSpeed={50}
              backSpeed={70}
              loop
            />
          </div>
        </div>
      </div>
      <CanvasControl
        clearCanvas={clearHandler}
        color={color}
        setColor={setColor}
      />
      
    </Main>
  )
}
