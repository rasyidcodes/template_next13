import Link from 'next/link'
import PropTypes from 'prop-types'

import { KotakMedsos } from '../../../element/kotakMedsos'
import { TabletTemplateIsi } from '../../../element/tablet/isi'
import dataLengkap from '../data/PpsmbFakultasData'

export function PpsmbFakultasIsi({ fakultas }) {
  const data = dataLengkap[fakultas]
  const listMedsos = {
    youtube: { link: 'https://www.youtube.com/', bgColor: 'bg-orange-500' },
    line: { link: 'http://line.me/ti/p/', bgColor: 'bg-green-500' },
    instagram: { link: 'https://www.instagram.com/', bgColor: 'bg-pink-500' },
    twitter: { link: 'https://twitter.com/', bgColor: 'bg-blue-500' },
    tiktok: { link: 'https://www.tiktok.com/', bgColor: 'bg-purple-500' },
    facebook: { link: 'https://web.facebook.com/', bgColor: 'bg-yellow-500' },
    linkedin: { link: 'https://www.linkedin.com/', bgColor: 'bg-blue-400' },
  }
  return (
    <TabletTemplateIsi
      title={<span className="text-green-900">PPSMB {data.nama}</span>}
      subtitle={<span className="text-green-600">{data.fakultas}</span>}
      color="Fakultas"
      hrefKembali="/kegiatan/ppsmb-fakultas"
      srcLogo={`/assets/PPSMBFakultas/${fakultas}.png`}
      titleScrollable
    >
      <div className="w-full rounded-[12px] bg-neutral-100 px-[20px] py-[40px] font-rubik max-lg:pt-[30px] lg:rounded-[16px] lg:px-[40px]">
        <div className="break-words text-justify text-[12px] xs:text-[14px] lg:text-[16px]">
          {data.isi}
        </div>
        {data.link && (
          <div className="flex w-full flex-col items-center gap-[20px] lg:gap-[30px]">
            <div className="w-full rounded-[12px] bg-neutral-100 p-[12px] lg:rounded-[16px] lg:p-[20px]">
              <div className="h-[50vh] w-full rounded-[12px] bg-neutral-50">
                <iframe src={data.link} className="h-full w-full" title="pdf" />
              </div>
            </div>
          </div>
        )}
        <div className="text-[12px] font-medium lg:text-[14px]">
          {(data.line || data.whatsapp) && (
            <>
              <br />
              <div className="flex items-center gap-[7px] lg:gap-[16px]">
                <KotakMedsos type="chat" className="flex-none" />
                <div className="flex min-w-0 flex-col break-words">
                  {data.line && (
                    <div>
                      Nerpati Line:{' '}
                      <Link href={`http://line.me/ti/p/${data.line}`}>{data.line}</Link>
                    </div>
                  )}
                  {data.whatsapp && (
                    <div>
                      WhatsApp: <Link href={`https://wa.me/${data.whatsapp}`}>{data.whatsapp}</Link>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          {data.email && (
            <>
              <br />
              <div className="flex items-center gap-[7px] lg:gap-[16px]">
                <KotakMedsos type="mail" className="flex-none" />
                <div className="min-w-0 break-words">
                  Email: <Link href={`mailto:${data.email}`}>{data.email}</Link>
                </div>
              </div>
            </>
          )}
          {data.website && (
            <>
              <br />
              <div className="flex items-center gap-[7px] lg:gap-[16px]">
                <KotakMedsos type="browse" className="flex-none" />
                <div className="min-w-0 break-words">
                  <Link href={data.website}>{data.website}</Link>
                </div>
              </div>
            </>
          )}
        </div>

        {Object.keys(listMedsos).some((medsos) => data[medsos]) && (
          <div className="mt-[20px] flex flex-col gap-[16px] lg:mt-[30px]">
            <div className="w-full text-center text-[14px] font-bold lg:text-[16px]">
              Media Sosial
            </div>
            <div className="flex justify-center gap-[10px] lg:gap-[36px]">
              {Object.keys(listMedsos)
                .filter((medsos) => data[medsos])
                .map((medsos) => (
                  <KotakMedsos
                    key={medsos}
                    type={medsos}
                    href={listMedsos[medsos].link + data[medsos]}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </TabletTemplateIsi>
  )
}
PpsmbFakultasIsi.propTypes = {
  fakultas: PropTypes.string.isRequired,
}
export default PpsmbFakultasIsi
