import Link from 'next/link'
import PropTypes from 'prop-types'

export function TabletButton({
  name,
  icon,
  href,
  className,
  disabled,
  childButton,
  hide,
  onClick,
}) {
  return (
    <div>
      <Link href={href}>
        <button
          type="button"
          className={`flex h-full w-full items-center rounded-[8px] px-[10px] py-[10px] text-left font-rubik font-medium ${className}`}
          disabled={disabled}
          onClick={onClick}
        >
          <div
            className={`text-sm xl:text-lg 2xl:text-2xl ${
              childButton && hide ? '-ml-[8px]' : ''
            } transition-all duration-300`}
          >
            {icon}
          </div>
          <div
            className={`${
              hide ? 'ml-0 w-0' : 'ml-[12px] w-full'
            } overflow-hidden text-xs transition-all duration-300 xl:text-base 2xl:text-xl`}
          >
            <div className="lg:w-[11vw]">{name}</div>
          </div>
        </button>
      </Link>
    </div>
  )
}
TabletButton.propTypes = {
  name: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  childButton: PropTypes.bool,
  hide: PropTypes.bool,
  onClick: PropTypes.func,
}
TabletButton.defaultProps = {
  disabled: false,
  childButton: false,
  hide: false,
  onClick: () => undefined,
}
export default TabletButton
