import Link from 'next/link'
import PropTypes from 'prop-types'
import { IoCaretForward } from 'react-icons/io5'

export function TabletLink({ judul, href, color, textColor }) {
  const bgColorMap = {
    Hijau: 'bg-neutral-50 hover:bg-green-300 active:bg-green-500',
    Orange: 'bg-neutral-50 hover:bg-purple-300 active:bg-purple-500',
  }
  const dotColorMap = {
    Hijau: 'bg-green-500 group-hover:bg-white group-active:bg-white',
    Orange: 'bg-orange-500 group-hover:bg-white group-active:bg-white',
  }
  const textColorMap = {
    Black: 'text-black',
    Ungu: 'text-purple-900',
  }
  const iconColorMap = {
    Hijau: 'text-green-400 group-hover:text-white group-active:text-white',
    Orange: 'text-orange-400 group-hover:text-white group-active:text-white',
  }
  const bgClassName = bgColorMap[color]
  const dotClassName = dotColorMap[color]
  const textClassName = textColorMap[textColor]
  const iconClassName = iconColorMap[color]
  return (
    <Link href={href}>
      <button
        type="button"
        className={`group flex w-full items-center gap-[10px] rounded-[8px] ${bgClassName} px-[10px] py-[15px] text-left lg:gap-[20px] lg:px-[20px] lg:py-[18px]`}
      >
        <div className={`h-[12px] w-[12px] rounded-full ${dotClassName} lg:h-[16px] lg:w-[16px]`} />
        <h1
          className={`grow font-rubik text-[10px] font-medium ${textClassName} md:text-[12px] lg:text-[16px]`}
        >
          {judul}
        </h1>
        <div className={`text-base ${iconClassName} lg:text-xl`}>
          <IoCaretForward />
        </div>
      </button>
    </Link>
  )
}
TabletLink.propTypes = {
  judul: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string,
}
TabletLink.defaultProps = {
  judul: '',
  href: '',
  textColor: 'Black',
}
export default TabletLink
