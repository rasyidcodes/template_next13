
import DefaultLayout from '@/components/layout/DefaultLayout'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

import { Welcome , Comp1} from '../components/app/homepage/page'
import Head from 'next/head'


export const metadata = {
  title: 'ppp',
  description: '...',
}

export default function Home() {
  return (
    
    <DefaultLayout title = "psg">
      <Welcome />
      <Comp1 />
      <Welcome />
      <Footer />
    </DefaultLayout>
  )
}
