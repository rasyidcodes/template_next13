import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoCaretDownCircle } from 'react-icons/io5'

import { Accordion } from '../../accordion'

export function TabletAccordion({ children, jam, nama }) {
  const [hide, setHide] = useState(true)
  const bgColor = hide ? 'bg-neutral-50' : 'bg-green-300'
  const secondaryBgColor = hide ? 'bg-green-400' : 'bg-white'
  const secondaryColor = hide ? 'text-green-400' : 'text-white'
  return (
    <div className="font-rubik text-[10px] md:text-[12px] lg:text-[16px]">
      <button
        type="button"
        className={`relative z-10 flex h-full w-full items-center gap-[10px] rounded-[8px] p-[10px] font-medium lg:gap-[20px] lg:px-[20px] ${bgColor} transition-all duration-500`}
        onClick={() => setHide(!hide)}
      >
        <div
          className={`h-[12px] w-[12px] flex-none rounded-full ${secondaryBgColor} transition-all duration-500 lg:h-[16px] lg:w-[16px]`}
        />
        <div className="w-[20%] flex-none text-center">{jam}</div>
        <div
          className={`h-[20px] w-[3px] flex-none ${secondaryBgColor} rounded-sm transition-all duration-500 lg:h-[24px] lg:w-[4px]`}
        />
        <div className="grow text-left">{nama}</div>
        <div
          className={`flex-none text-xl lg:text-3xl ${secondaryColor} transition-all duration-500 ${
            hide ? '' : 'rotate-180'
          }`}
        >
          <IoCaretDownCircle />
        </div>
      </button>
      <Accordion hide={hide} className="z-0 -mt-[20px] rounded-[8px] bg-neutral-50 pt-[20px]">
        <div className="px-[20px] py-[10px]">{children}</div>
      </Accordion>
    </div>
  )
}
TabletAccordion.propTypes = {
  children: PropTypes.node,
  jam: PropTypes.string,
  nama: PropTypes.string,
}
TabletAccordion.defaultProps = {
  children: <div />,
  jam: '',
  nama: '',
}
export default TabletAccordion
