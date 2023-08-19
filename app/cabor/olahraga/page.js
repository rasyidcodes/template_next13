// 'use client'
// import { OlahragaList } from '@/components/app/cabor/olahraga/OlahragaList'
// import DefaultLayout from '@/components/layout/DefaultLayout'
// import Footer from '@/components/layout/Footer'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'

// export default function Olahraga() {
  
//     return(
//         <DefaultLayout>
//             <OlahragaList/>
//             <Footer/>
//         </DefaultLayout>   
//     )
// }

'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function KegiatanPage() {
  const { push } = useRouter()

  useEffect(() => {
    push('/cabor/olahraga')
  }, [push])
  return <div />
}
