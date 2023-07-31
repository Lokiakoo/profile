import React, { useEffect, useRef } from 'react'
import Head from'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/pro3-preview.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '../components/Experience'
import Education from '@/components/Education'

//Number from 0 to target number
// const AnimatedNumbers = ({value}) => {
//     const ref = useRef(null)
//     const motionValue = useMotionValue(0)
//     const springValue = useSpring(motionValue, { duration: 3000})
//     const isInView = useInView(ref, {once: true});

//     useEffect(() => {
//         if(isInView) {
//             motionValue.set(value)
//         }
//     }, [isInView, value, motionValue])
    
//     useEffect(() => {
//         springValue.on("change", (lastest) => {
//             if(ref.current && lastest.toFixed(0) <= value) {
//                 ref.current.textContent = lastest.toFixed(0)
//             }
//         })
//     }, [springValue, value])

//     return <span ref={ref}></span>
// }

const about = () => {
  return (
    <>
        <Head>
            <title>About Page</title>
            <meta name='description' content='About Page'/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16 md:pt-16 sm:pt-8'>
            <AnimatedText className='mb-8
            xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' text='Hi! Here am i'></AnimatedText>
            <div className='grid w-full grid-cols-2 gap-16 lg:inline-block md:inline-block'>
                <div className='col-span-1 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 '>
                        I am
                    </h2>
                    <p className='font-medium md:text-sm sm:text-sm'>
                        Hello, I'm Louis, a web developer and a front-end specialist with passion for creating engaging and user-friendly digital experiences. 
                        My goal is to become a full-time fullstack developer and apply my technical expertise and creativity to build stunning websites.
                    </p><br/>
                    <p className='font-medium md:text-sm sm:text-sm'>
                        I hold a Professional Diploma in Cross-platform Applications Development and I have the basic Cloud service knowledge.
                        I am able to deliver exceptional web projects that meet and exceed client expectations.
                    </p><br/>
                    <p className='font-medium md:text-sm sm:text-sm'>
                        My customer service skillsets developed in my previous experience in the hospitality industry are transferable to user-centric tasks such as UX / UI.
                    </p><br/>
                    <p className='font-medium md:text-sm sm:text-sm'>                          
                        I embrace teamwork and understand that communications skills are essential for smooth collaboration with clients and colleagues.
                    </p><br/>
                    <p className='font-medium md:text-sm sm:text-sm'>
                        If you are looking for a website builder or a front-end developer with customer service skills,
                        please contact me. I am excited to bring my expertise and enthusiasm to your IT project
                    </p>
                </div>

                <div className='col-span-1 relative h-max rounded-xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-dark dark:border-light  xl:mt-2 md:order-1 md:col-span-8 '>
                    <div className='absolute top-2 -right-3 -z-10 w-[100%] h-[100%] rounded-xl bg-dark dark:bg-light'/>
                    <Image src={profilePic} alt="Me" className='w-full h-auto'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                </div>
            </div>
            <Skills />
            <Experience />
            <Education />
            </Layout>
        </main>
    </>
  )
}

export default about