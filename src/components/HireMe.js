import Link from 'next/link'
import React from 'react'
import { CircularText } from './Icons'

//hireme css : left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
//handle-pic-dark dark:fill-light"

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden 
    md:right-6 md:left-auto md:-top-1 md:bottom-auto md:w-28 md:absolute'>
        <div className='w-60 h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
            <Link href='koobuka@gmail.com' target={"_blank"} 
            className='flex items-center justify-center absolute
            bg-dark text-light shadow-medium border border-solid border-dark w-28 h-28 rounded-full font-semibold 
            hover:bg-light hover:text-dark text-xl
            dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
            md:w-14 md:h-14 md:text-[10px]'>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe