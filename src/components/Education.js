import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ type, place, info, time,}) => {
    const ref = useRef(null)
    return (
        <li ref = {ref}
        className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <div>
                <h3 className='capitalize font-bold text-xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 md:text-sm sm:text-sm'>
                    {time} | {place}
                </span>
                <p className='capitalize font-medium text-dark dark:text-light/75 md:text-sm sm:text-sm'>
                    {info}
                </p>
            </div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center
        md:!text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]'/>

            <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
                <Details
                type="Professional Diploma in Cross-platform Applications
                Development (Web Development / Mobile Applications)"
                time="Nov 2022 - Jul 2023"
                place="Hong Kong Institute of Vocational Education (IVE)"
                info="From designs to build mobile applications, web infrastructure and websites. Build, test, troubleshoot, operate and optimize various tiers of a software solution from the frontend,
                to the backend, to the database and notwithstanding troubleshooting and testing. To switch between frontend and backend development based on the requirement of the project."
                />
                <Details
                type="Alibaba Cloud Certification"
                time="May 2023"
                place="Alibaba Cloud"
                info="The certifications are designed to test the knowledge and skills of individuals in using Alibaba Cloud services and solutions.
                The program offers a range of certifications that cover various aspects of cloud computing, such as cloud infrastructure, security, Server Guard."
                />
                <Details
                type="Toeic-Bridge Test"
                time="Oct 2009"
                place="HK Institute of Education"
                info="A standardized English language proficiency test that measures the ability of non-native English speakers to understand and communicate in the English language in everyday situations"
                />
                <Details
                type="Certificate in Hotel and Catering Operations"
                time="Nov 2008 - Oct 2009"
                place="Vocational Training Council"
                info="One year in Hospitality Industry Training & Development Centre offers programs for hospitality industry training. "
                />
                <Details
                type="F5 graduate"
                time="Sep 2003 - Jun 2008"
                place="Tin Shui Wai Government Secondary School"
                info="Hong Kong Certificate of Education Examination (HKCEE)"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education