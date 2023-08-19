import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { IoArrowBack } from 'react-icons/io5'

import { ScrollStyleDiv } from '../../ScrollStyleDiv'

export function TabletTemplateIsi({
  children,
  title,
  subtitle,
  titleContent,
  color,
  titleScrollable,
  hrefKembali,
  srcLogo,
}) {
  const bgColorMap = {
    Orange: 'bg-orange-500',
    Hijau: 'bg-green-600',
    Pink: 'bg-pink-400',
    Ungu: 'bg-purple-400',
    Kuning: 'bg-yellow-600',
    Biru: 'bg-blue-500',
    Fakultas: 'bg-green-100',
    Booklet: 'bg-purple-100',
  }
  const ColorShadow = {
    Orange: 'drop-shadow-text-orange',
    Hijau: 'drop-shadow-text-orange',
    Pink: 'drop-shadow-text-orange',
    Ungu: 'drop-shadow-text-orange',
    Kuning: 'drop-shadow-text-orange',
    Biru: 'drop-shadow-text-orange',
    Fakultas: 'drop-shadow-text-orange',
    Booklet: 'drop-shadow-text-purple',
  }
  return (
    <div className="flex h-full w-full flex-col overflow-hidden p-[10px] lg:p-[30px]">
      {/* Custom Scrollbar classname: 
      [&_*::-webkit-scrollbar-thumb]:rounded-[50px] [&_*::-webkit-scrollbar-thumb]:bg-orange-500 [&_*::-webkit-scrollbar-track]:rounded-[50px] [&_*::-webkit-scrollbar-track]:bg-neutral-100 [&_*::-webkit-scrollbar-track]:shadow-[inset_0_0_5px_0_#32323220] [&_*::-webkit-scrollbar]:w-[10px]
      */}
      {hrefKembali && (
        <div className="-mt-[5px] font-rubik text-[12px] lg:-mt-[15px] lg:mb-[10px] lg:text-[16px]">
          <Link
            href={hrefKembali}
            className="flex w-fit items-center gap-[6px] px-[3px] pb-[6px] lg:gap-[8px]"
          >
            <IoArrowBack />
            Kembali
          </Link>
        </div>
      )}
      <ScrollStyleDiv
        scrollClassName="pr-[16px] lg:pr-[20px]"
        scrollable={titleScrollable}
        className={`flex max-h-full w-full flex-col ${titleScrollable ? '' : 'overflow-hidden'}`}
      >
        <div
          className={`relative mb-[28px] h-fit w-full flex-none overflow-hidden rounded-[12px] ${bgColorMap[color]} lg:mb-[30px] lg:rounded-[16px]`}
        >
          <Image
            src={`/assets/kegiatan/Hiasan${color}.png`}
            alt=""
            width={1000}
            height={1000}
            className="absolute right-0 top-0 z-0 h-full w-[400px] object-cover opacity-30"
          />
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-start">
            {srcLogo && (
              <Image
                src={srcLogo}
                width={1000}
                height={1000}
                alt="Logo"
                className="relative z-10 mx-[16px] my-[10px] h-[80px] w-[80px] object-contain max-sm:-mb-5 lg:mx-[30px] lg:my-[25px] lg:h-[125px] lg:w-[125px]"
              />
            )}
            <div className="relative z-10 w-full font-rubik text-white">
              <h1
                className={`mx-5 pt-5 text-[24px] font-black lg:text-[32px] ${ColorShadow[color]}`}
              >
                {title}
              </h1>
              {subtitle && (
                <h1 className="mx-5 text-[14px] font-bold lg:text-[18px]">{subtitle}</h1>
              )}
              <p className="w-full p-5 pt-[5px] text-justify text-[12px] lg:pr-[12%] lg:text-[16px]">
                {titleContent}
              </p>
            </div>
          </div>
        </div>
        <ScrollStyleDiv
          scrollClassName="pr-[16px] lg:pr-[20px]"
          scrollable={!titleScrollable}
          className={`w-full ${titleScrollable ? 'h-fit' : 'max-h-full'}`}
        >
          {children}
        </ScrollStyleDiv>
      </ScrollStyleDiv>
    </div>
  )
}
TabletTemplateIsi.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  titleContent: PropTypes.string,
  color: PropTypes.oneOf([
    'Biru',
    'Hijau',
    'Kuning',
    'Orange',
    'Pink',
    'Ungu',
    'Fakultas',
    'Booklet',
  ]).isRequired,
  titleScrollable: PropTypes.bool,
  hrefKembali: PropTypes.string,
  srcLogo: PropTypes.string,
}
TabletTemplateIsi.defaultProps = {
  children: <div />,
  subtitle: '',
  titleContent: '',
  titleScrollable: false,
  hrefKembali: '',
  srcLogo: '',
}
export default TabletTemplateIsi
