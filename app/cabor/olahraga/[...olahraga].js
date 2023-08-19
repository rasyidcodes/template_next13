import PropTypes from 'prop-types'

import { DefaultLayout, Footer } from '../../components/layout'
import { Kegiatan } from '../../components/pages/kegiatan'
import { OlahragaList } from '@/components/app/cabor/olahraga/OlahragaList'

export async function getStaticPaths() {
  const ppsmbFakultas = [
    'sepakbola',
    'bulutangkis',
    'metamorphoself',
    'simfoni',
    'papyrus',
    'dialektika',
    'geospace',
    'justicia',
    'kampung-budaya',
    'society',
    'identistry',
    'vetebrae',
    'pionir-morfogenesis',
    'pelestari',
    'pascal',
    'organik',
    'pionir-rancher',
    'prk',
    'kesatria',
    'agrophoria',
    'permadani',
  ]
  const routes = [
    'agenda',
    'ppsmb-universitas',
    'ppsmb-fakultas',
    'ppsmb-softskills',
    'action-plan',
    'atribut',
    'ketentuan',
    'panduan',
    'olahraga',
    ...ppsmbFakultas.map((route) => `ppsmb-fakultas/${route}`),
  ]
  const paths = routes.map((route) => {
    return { params: { kegiatan: route.split('/') } }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return { props: { kegiatan: params.kegiatan } }
}

export default function KegiatanPage({ kegiatan }) {
 
  return (
    <DefaultLayout title="Kegiatan">
      <OlahragaList/>
      <Footer background="green" bgKegiatan />
    </DefaultLayout>
  )
}

