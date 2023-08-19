import DefaultLayout from '@/components/layout/DefaultLayout'
import Footer from '@/components/layout/Footer'
import React from 'react'

import { Section1 } from '../../components/app/blogs/page' 


export const metadata = {
    title: 'Blog',
    description: 'penjelasan blogs',
  }
  
  
export default function blogs() {
  return (
    <DefaultLayout title='blogs'>
        <Section1/>
        
        <Footer/>
    </DefaultLayout>


  )
}
