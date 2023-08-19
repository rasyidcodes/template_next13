'use client'
import 'aos/dist/aos.css'

import AOS from 'aos'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SiYoutube } from 'react-icons/si'

import { Button } from '../../element/button/Page'

export function Section1() {
  const [click1, setClick1] = useState(false)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div
      style={{
        backgroundImage: 'url("/2023/porsenigama/assets/homepage/welcome-bg.png")',
        backgroundSize: 'cover, contain',
        overflow: 'hidden',
      }}
      className=" h-full w-full bg-no-repeat py-[270px]"
    >
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mt-16 flex justify-center font-rubik text-2xl font-medium text-blue-900 sm:text-3xl md:text-4xl lg:text-[48px]"
      >
        BLOGS
      </h1>
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-outline-white relative -top-5 flex justify-center text-center font-damion text-[40px] font-normal  text-blue-400 sm:-top-6 md:-top-4 md:text-5xl lg:text-left lg:text-[64px]"
      >
        BLOGS
      </h1>
     

    
      {/* Tentang */}
     
    </div>
  )
}

export default Section1
