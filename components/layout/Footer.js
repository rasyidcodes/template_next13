import Link from 'next/link'
import PropTypes from 'prop-types'
import { IoCall, IoLocationSharp, IoTime } from 'react-icons/io5'

import { KotakMedsos } from '../element/kotakMedsos/KotakMedsos'

const medsos = [
  {
    type: 'youtube',
    link: 'https://www.youtube.com/@ppsmbpalapa_gplus',
  },
  {
    type: 'line',
    link: 'https://page.line.me/mlo6507f?openQrModal=true',
  },
  {
    type: 'instagram',
    link: 'https://instagram.com/ppsmb_ugm?igshid=MzRlODBiNWFlZA==',
  },
  {
    type: 'twitter',
    link: 'https://twitter.com/ppsmb_ugm?s=21&t=pMP8WibsK2OMwTtjInLGJQ',
  },
  {
    type: 'tiktok',
    link: 'https://www.tiktok.com/@ppsmb_ugm?_t=8drAYil7UaV&_r=1',
  },
  {
    type: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100025026175867',
  },
]

const Eksplorasi = [
  {
    name: 'Beranda',
    link: '/',
  },
  {
    name: 'Galeri',
    link: '/galeri/galeri-ppsmb',
  },
  {
    name: 'Palapedia',
    link: '/palapedia/artikel',
  },
  {
    name: 'FAQ',
    link: '/faq',
  },
  {
    name: 'AR',
    link: '/lensagama',
  },
]

const Kegiatan = [
  {
    name: 'PPSMB Universitas',
    link: '/kegiatan/ppsmb-universitas',
  },
  {
    name: 'PPSMB Fakultas',
    link: '/kegiatan/ppsmb-fakultas',
  },
  {
    name: 'PPSMB Softskill',
    link: '/kegiatan/ppsmb-softskills',
  },
  {
    name: 'Action Plan',
    link: '/kegiatan/action-plan',
  },
]

const Petunjuk = [
  {
    name: 'Ketentuan Keikutsertaan  Mahasiswa',
    link: '/kegiatan/ketentuan/ketentuan-keikutsertaan-mahasiswa/',
  },
  {
    name: 'Mekanisme Perizinan',
    link: '/kegiatan/ketentuan/mekanisme-perizinan/',
  },
  {
    name: 'SOP Medis',
    link: '/kegiatan/ketentuan/standar-operating-procedure-medis/',
  },
  {
    name: 'Peta UGM',
    link: 'https://ppsmb.ugm.ac.id/2022/kembara-loka/',
  },
]

export function Footer({ background, bgKegiatan, bgPalapedia }) {
  // bg-blue-600 bg-blue-500
  // bg-green-600 bg-green-500
  let data = 'bg-green-700'
  if (bgPalapedia) {
    data = 'bg-[#5D30A6]'
  }
  return (
    // bg-blue-600 bg-blue-400
    // bg-purple-600 bg-purple-400
    // bg-yellow-600 bg-yellow-400
    // bg-green-600 bg-green-400
    // bg-red-600 bg-red-400
    // bg-pink-600 bg-pink-400
    // bg-indigo-600 bg-indigo-400
    // bg-gray-600 bg-gray-400
    // bg-neutral-600 bg-neutral-400
    // bg-white

    <footer
      className={`footer flex w-full flex-col justify-center ${
        bgKegiatan || bgPalapedia ? data : `bg-${background}-600`
      } z-[9999]`}
    >
      <div className="flex w-full justify-center">
        <div className=" flex w-full max-w-[1560px] flex-col justify-center p-4 pt-8 lg:p-16">
          <h1 className="font-rubik text-2xl font-bold text-white md:text-4xl">
            PORSENIGAMA <span className="lg:block xl:inline">UGM</span>
          </h1>
          <div className="flex h-full w-full flex-col items-start justify-center lg:flex-row">
            <div className="flex w-full flex-col justify-center lg:w-1/2">
              <h2 className="mt-6 font-rubik text-base font-medium text-white md:text-lg">
                Subdit. Pengembangan Karakter Mahasiswa Ditmawa Universitas Gadjah Mada
              </h2>
              <div className="mt-6 flex flex-row text-neutral-300">
                <IoLocationSharp className=" mr-2 h-5 w-5 text-xs md:mr-5 md:h-8 md:w-8 md:text-lg" />
                <Link href="https://maps.app.goo.gl/3SBmXTsczuZd8HDq7?g_st=ic" target="_blank">
                  <p className=" flex font-rubik text-xs text-neutral-300 hover:text-orange-300 md:text-lg">
                    Jl. Asem Kranji Blok K-8 Sekip, Sendowo, Sinduadi, Mlati, Sleman, Yogyakarta
                    55281
                  </p>
                </Link>
              </div>
              <div className="mt-6 flex flex-row text-neutral-300">
                <IoTime className=" mr-2 h-5 w-5 text-xs md:mr-5 md:h-8 md:w-8 md:text-lg" />
                <p className="flex font-rubik text-xs text-neutral-300 md:text-lg">
                  08:00 - 16:00 WIB
                </p>
              </div>
              <div className="mt-6 flex flex-row text-xs text-neutral-300">
                <IoCall className=" mr-2 h-5 w-5 text-xs md:mr-5 md:h-8 md:w-8 md:text-lg" />
                <p className="flex font-rubik text-xs text-neutral-300 md:text-lg">
                  Help Desk PPSMB: +62-822-8433-1119
                </p>
              </div>
              <div className="mt-6 flex w-full">
                <div className="grid grid-cols-6 gap-5 text-white md:gap-9">
                  {medsos.map((item) => (
                    <KotakMedsos type={item.type} href={item.link} key={item.type} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-rol mb-10 mt-10 flex w-full lg:ml-5 lg:mt-6 lg:w-1/2 lg:justify-end">
              <div className="flex flex-col">
                <h2 className="font-rubik text-base font-medium text-white md:text-lg">
                  Eksplorasi
                </h2>
                {Eksplorasi.map((item) => (
                  <Link href={item.link} key={item.name}>
                    <p className="mt-5 font-rubik text-xs text-neutral-300 hover:text-orange-300 md:text-lg">
                      {item.name}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="mx-10 flex flex-col md:mx-24 lg:mx-10 xl:mx-24">
                <h2 className="font-rubik text-base font-medium text-white md:text-lg">Kegiatan</h2>
                {Kegiatan.map((item) => (
                  <Link href={item.link} key={item.name}>
                    <p className="mt-5 font-rubik text-xs text-neutral-300 hover:text-orange-300 md:text-lg">
                      {item.name}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col">
                <h2 className="font-rubik text-base font-medium text-white md:text-lg">Petunjuk</h2>
                {Petunjuk.map((item) => (
                  <Link href={item.link} key={item.name}>
                    <p className="mt-5 font-rubik text-xs text-neutral-300 hover:text-orange-300 md:text-lg">
                      {item.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex h-12 w-full items-center justify-center bg-${background}-400 text-center`}
      >
        <h4 className="font-rubik text-sm text-white">PPSMB 2023. All rights reserved.</h4>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  background: PropTypes.string,
  bgKegiatan: PropTypes.bool,
  bgPalapedia: PropTypes.bool,
}

Footer.defaultProps = {
  background: 'blue',
  bgKegiatan: false,
  bgPalapedia: false,
}

export default Footer
