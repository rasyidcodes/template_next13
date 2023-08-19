import Link from 'next/link'
import PropTypes from 'prop-types'
import { AiFillInstagram } from 'react-icons/ai'
import { IoChatbubbleEllipses, IoGlobeOutline, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import { SiFacebook, SiLine, SiTiktok, SiTwitter, SiYoutube } from 'react-icons/si'

const medsos = {
  chat: {
    icon: <IoChatbubbleEllipses />,
    bgColor: 'bg-green-400 hover:bg-green-300',
  },
  mail: {
    icon: <IoMail />,
    bgColor: 'bg-orange-400 hover:bg-orange-300',
  },
  browse: {
    icon: <IoGlobeOutline />,
    bgColor: 'bg-purple-400 hover:bg-purple-300',
  },
  youtube: {
    icon: <SiYoutube />,
    bgColor: 'bg-orange-500 hover:bg-orange-300',
  },
  line: {
    icon: <SiLine />,
    bgColor: 'bg-green-500 hover:bg-green-300',
  },
  instagram: {
    icon: <AiFillInstagram />,
    bgColor: 'bg-pink-500 hover:bg-pink-300',
  },
  twitter: {
    icon: <SiTwitter />,
    bgColor: 'bg-blue-500 hover:bg-blue-300',
  },
  tiktok: {
    icon: <SiTiktok />,
    bgColor: 'bg-purple-500 hover:bg-purple-300',
  },
  facebook: {
    icon: <SiFacebook />,
    bgColor: 'bg-yellow-500 hover:bg-yellow-300',
  },
  linkedin: {
    icon: <IoLogoLinkedin />,
    bgColor: 'bg-blue-400 hover:bg-blue-500',
  },
}
export function KotakMedsos({ type, bgColor, href, className }) {
  return (
    <div
      className={`relative flex h-[32px] w-[32px] items-center justify-center rounded-[8px] shadow-[inset_2px_0px_2px_0px_#0A242F77] drop-shadow-[2px_4px_8px_#0A242F51] ${
        bgColor === '' ? medsos[type].bgColor : bgColor
      } text-base text-white lg:h-[40px] lg:w-[40px] lg:text-xl ${className}`}
    >
      {medsos[type].icon}
      {href && <Link href={href} target="_blank" className="absolute inset-0" />}
    </div>
  )
}
KotakMedsos.propTypes = {
  type: PropTypes.oneOf(Object.keys(medsos)).isRequired,
  bgColor: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
}
KotakMedsos.defaultProps = {
  href: '',
  className: '',
  bgColor: '',
}
export default KotakMedsos
