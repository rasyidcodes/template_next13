import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

export function TabletIcon({ title, subtitle, href, image, color }) {
  const bgColorMap = {
    Hijau: 'bg-neutral-50 hover:bg-green-50 active:bg-green-100',
    Ungu: 'bg-neutral-50 hover:bg-purple-50 active:bg-purple-100',
  }
  const titleColorMap = {
    Hijau: 'text-black group-hover:text-green-600 group-active:text-green-700',
    Ungu: 'text-purple-900 group-hover:text-purple-600 group-active:text-purple-700',
  }
  const subtitleColorMap = {
    Hijau: 'text-green-600 group-hover:text-green-600 group-active:text-green-700',
    Ungu: 'text-orange-400 group-hover:text-purple-600 group-active:text-purple-700',
  }
  const bgClassName = bgColorMap[color]
  const titleClassName = titleColorMap[color]
  const subtitleClassName = subtitleColorMap[color]
  return (
    <Link
      href={href}
      className={`group flex flex-col items-center gap-[10px] rounded-[16px] px-[16px] pt-[30px] font-rubik font-medium lg:gap-[16px] lg:px-[20px] ${bgClassName}`}
    >
      <Image
        src={image}
        alt=""
        width={100}
        height={100}
        className="h-[85px] w-[85px] object-contain lg:h-[90px] lg:w-[90px]"
      />
      <div className="flex min-h-[85px] flex-col pb-[10px] lg:min-h-[100px] lg:gap-[5px]">
        <h1
          className={`text-center text-[12px] font-medium text-green-900 lg:text-[16px] ${titleClassName}`}
        >
          {title}
        </h1>
        {subtitle && (
          <h1
            className={`text-center text-[10px] font-medium text-green-600 lg:text-[14px] ${subtitleClassName}`}
          >
            {subtitle}
          </h1>
        )}
      </div>
    </Link>
  )
}
TabletIcon.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
TabletIcon.defaultProps = {
  subtitle: '',
}
export default TabletIcon
