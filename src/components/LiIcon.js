import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {
    const {scrollYProgress} = useScroll({
        target: reference,
        offset: ["start end", "center center"]
    })

  return (
    <figure className='absolute left-0 stroke-black dark:stroke-light '>
        <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[42px] xs:h-[42px]' width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className='stroke-1 stroke-navBlue fill-none' />
            <motion.circle cx="75" cy="50" r="20" className='stroke-[3px] fill-light dark:fill-dark'
            style={{pathLength: scrollYProgress}}/>
            <circle cx="75" cy="50" r="10" className='animte-poulse stroke-1 fill-navBlue'/>
        </svg>
    </figure>
  )
}

export default LiIcon