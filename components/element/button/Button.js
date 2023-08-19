import Link from 'next/link'
import PropTypes from 'prop-types'

// Contoh pemakaian:
// <Button type="primary" color="blue" size="sm" className="text-6xl" href="/test">
//  Test
// </Button>
// <Button type="secondary" color="orange" size="md xl:lg" disabled className="ml-[40px]">
//   Test2
// </Button>
// <Button type="primary" color="orange" size="xs lg:md" onClick={() => console.log('test')}>
//   Test3
// </Button>

export function Button({
  children,
  type,
  color,
  size,
  shadow,
  href,
  disabled,
  onClick,
  className,
}) {
  let typeClassName
  if (type === 'primary') {
    if (color === 'orange') {
      typeClassName =
        'text-white bg-orange-500 outline-orange-500 hover:text-orange-500 hover:bg-white hover:outline-orange-300 active:text-orange-600 active:bg-orange-100 active:outline-orange-600'
    } else if (color === 'blue') {
      typeClassName =
        'text-white bg-blue-500 outline-blue-500 hover:text-blue-500 hover:bg-white hover:outline-blue-300 active:text-blue-400 active:bg-blue-100 active:outline-blue-400'
    } else if (color === 'purple') {
      typeClassName =
        'text-white bg-purple-400 outline-purple-400 hover:text-purple-500 hover:bg-white hover:outline-purple-300 active:text-purple-400 active:bg-purple-100 active:outline-purple-400'
    } else if (color === 'transparent') {
      typeClassName =
        'text-blue-300 bg-transparent outline-blue-300 hover:text-white hover:outline-white active:text-blue-600 active:outline-blue-600'
    } else if (color === 'agenda-kegiatan') {
      typeClassName = 'text-white bg-orange-500 outline-orange-500'
    }
    typeClassName += ' disabled:text-white disabled:bg-neutral-500 disabled:outline-neutral-500'
  } else if (type === 'secondary') {
    if (color === 'orange') {
      typeClassName =
        'text-orange-400 bg-[#FFF2ECB3] outline-orange-500 hover:text-orange-50 hover:bg-[#E24717B3] hover:outline-orange-400 active:text-orange-300 active:bg-[#E24717CC] active:outline-orange-300'
    } else if (color === 'blue') {
      typeClassName =
        'text-blue-400 bg-[#EAF8FDE6] outline-blue-400 hover:text-blue-50 hover:bg-[#306BA6B3] hover:outline-blue-400 active:text-blue-300 active:bg-[#306BA6CC] active:outline-blue-300'
    } else if (color === 'purple') {
      typeClassName =
        'text-purple-400 bg-[#FFDE9C99] outline-purple-400 hover:text-purple-50 hover:bg-[#4C1C8280] hover:outline-purple-300 active:text-purple-50 active:bg-[#4C1C82B3] active:outline-purple-400'
    } else if (color === 'agenda-kegiatan') {
      typeClassName = 'text-neutral-500 bg-white outline-white'
    }
    typeClassName +=
      ' disabled:text-neutral-500 disabled:bg-neutral-100 disabled:outline-neutral-300'
  }
  // xs:px-[28px] sm:px-[28px] md:px-[28px] lg:px-[28px] xl:px-[28px] 2xl:px-[28px]
  // xs:px-[32px] sm:px-[32px] md:px-[32px] lg:px-[32px] xl:px-[32px] 2xl:px-[32px]
  // xs:py-[10px] sm:py-[10px] md:py-[10px] lg:py-[10px] xl:py-[10px] 2xl:py-[10px]
  // xs:py-[12px] sm:py-[12px] md:py-[12px] lg:py-[12px] xl:py-[12px] 2xl:py-[12px]
  // xs:py-[16px] sm:py-[16px] md:py-[16px] lg:py-[16px] xl:py-[16px] 2xl:py-[16px]
  // xs:py-[20px] sm:py-[20px] md:py-[20px] lg:py-[20px] xl:py-[20px] 2xl:py-[20px]
  // xs:outline-2 sm:outline-2 md:outline-2 lg:outline-2 xl:outline-2 2xl:outline-2
  // xs:outline-3 sm:outline-3 md:outline-3 lg:outline-3 xl:outline-3 2xl:outline-3
  // xs:-outline-offset-1 sm:-outline-offset-1 md:-outline-offset-1 lg:-outline-offset-1 xl:-outline-offset-1 2xl:-outline-offset-1
  // xs:-outline-offset-2 sm:-outline-offset-2 md:-outline-offset-2 lg:-outline-offset-2 xl:-outline-offset-2 2xl:-outline-offset-2
  // xs:leading-[24px] sm:leading-[24px] md:leading-[24px] lg:leading-[24px] xl:leading-[24px] 2xl:leading-[24px]
  // xs:leading-[28px] sm:leading-[28px] md:leading-[28px] lg:leading-[28px] xl:leading-[28px] 2xl:leading-[28px]
  const sizeClassName = size
    .split(' ')
    .map((breakpoints) => {
      const [bp, sz] = breakpoints.includes(':') ? breakpoints.split(':') : ['', breakpoints]
      let ret = ''
      if (sz === 'xs') {
        ret = 'px-[28px] py-[10px] outline-2 -outline-offset-1 leading-[24px]'
      } else if (sz === 'sm') {
        ret = 'px-[32px] py-[12px] outline-2 -outline-offset-1 leading-[24px]'
      } else if (sz === 'md') {
        ret = 'px-[32px] py-[16px] outline-2 -outline-offset-1 leading-[28px]'
      } else if (sz === 'lg') {
        ret = 'px-[32px] py-[20px] outline-3 -outline-offset-2 leading-[28px]'
      }
      return bp
        ? ret
            .split(' ')
            .map((i) => `${bp}:${i}`)
            .join(' ')
        : ret
    })
    .join(' ')
  let shadowClassName
  if (shadow === 'orange') {
    shadowClassName = 'shadow-button-orange-normal hover:shadow-button-orange-hover'
  } else if (shadow === 'orangeDarker') {
    shadowClassName = 'shadow-button-orange-darker hover:shadow-button-orange-hover'
  } else if (shadow === 'blue') {
    shadowClassName = 'shadow-button-blue-normal hover:shadow-button-blue-hover'
  } else if (shadow === 'blueDarker') {
    shadowClassName = 'shadow-button-blue-darker hover:shadow-button-blue-hover'
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${typeClassName} ${sizeClassName} ${className} ${shadowClassName} relative h-fit w-fit rounded-[10px] font-rubik font-bold outline duration-300 active:duration-0`}
      disabled={disabled}
    >
      {href && <Link tabIndex={-1} className="absolute inset-0" href={href} />}
      {children}
    </button>
  )
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  color: PropTypes.oneOf(['orange', 'blue', 'purple', 'transparent', 'agenda-kegiatan']).isRequired,
  size: PropTypes.string.isRequired,
  shadow: PropTypes.oneOf(['', 'orange', 'blue', 'orangeDarker', 'blueDarker']),
  href: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
}
Button.defaultProps = {
  shadow: '',
  href: '',
  disabled: false,
  onClick: () => undefined,
  className: '',
}
export default Button
