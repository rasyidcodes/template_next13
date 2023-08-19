import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { IoCaretDown, IoMenu } from 'react-icons/io5'

import { Accordion } from '../accordion'
import { TabletButton } from './TabletButton'

export function Tablet({ children, menus, active, title, path, bgSrc, bgTablet, menuClassName }) {
  const [hide, setHide] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const ref = useRef()
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (!ref?.current?.contains(e.target)) setDropdown(false)
    })
  })
  return (
    <div
      className="relative h-[130vh] w-full bg-cover bg-bottom px-[3%] pb-[30vh] pt-[80px] lg:px-[5%]"
      style={{ backgroundImage: `url("/2023/${bgSrc}")` }}
    >
      <div
        className={`relative z-20 mb-[15px] rounded-[12px] ${bgTablet} font-rubik font-bold text-white lg:hidden`}
        ref={ref}
      >
        <button
          type="button"
          className="flex w-full items-center justify-between p-[15px] text-[12px] xs:text-[16px]"
          onClick={() => setDropdown(!dropdown)}
        >
          Menu {title}
          <span
            className={`caret -mt-[2px] text-xl transition-[transform] duration-500 ${
              dropdown ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <IoCaretDown />
          </span>
        </button>
        <Accordion className="absolute inset-x-0 top-[100%]" hide={!dropdown}>
          <div className="pt-[10px]">
            <div className={`flex flex-col gap-[16px] rounded-[12px] ${bgTablet} p-[20px]`}>
              {menus.map((menu) => (
                <div key={menu.path}>
                  <TabletButton
                    name={menu.name}
                    icon={menu.icon}
                    href={`/${path}/${menu.path}`}
                    className={menuClassName}
                    disabled={active.startsWith(menu.path)}
                    onClick={() => setDropdown(false)}
                  />
                  {menu.child && (
                    <Accordion
                      className="ml-[15px]"
                      hide={
                        !(
                          active.startsWith(menu.path) ||
                          menu.child.some((child) => active.startsWith(child.path))
                        )
                      }
                    >
                      <div className="flex flex-col gap-[10px] pt-[16px]">
                        {menu.child.map((child) => (
                          <TabletButton
                            key={menu.path + child.path}
                            name={child.name}
                            icon={child.icon}
                            href={`/${path}/${child.path}`}
                            className={menuClassName}
                            disabled={active.startsWith(child.path)}
                            childButton
                            onClick={() => setDropdown(false)}
                          />
                        ))}
                      </div>
                    </Accordion>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Accordion>
      </div>
      <div
        className={`relative z-10 mt-[20px] flex h-[85%] flex-row rounded-[16px] ${bgTablet} p-[5px] lg:mt-0 lg:rounded-[24px] lg:p-[10px]`}
      >
        <div
          className={`ml-[10px] mr-[20px] hidden lg:flex ${
            hide ? 'w-[50px]' : 'w-[23%]'
          } flex-col transition-all duration-300`}
        >
          <button
            type="button"
            onClick={() => setHide(!hide)}
            className="my-[30px] flex w-full items-center whitespace-nowrap px-[10px] py-[10px] text-left font-rubik font-bold text-white"
          >
            <div className="-mt-[2px] text-base xl:text-xl 2xl:text-2xl">
              <IoMenu />
            </div>
            <div
              className={`${
                hide ? 'ml-0 w-0' : 'ml-[10px] w-full'
              } overflow-hidden text-sm transition-all duration-300 xl:text-lg 2xl:text-xl`}
            >
              {title}
            </div>
          </button>
          <div className="-mr-[10px] flex max-h-full flex-col gap-[16px] overflow-y-auto pr-[10px]">
            {menus.map((menu) => (
              <div key={menu.path}>
                <TabletButton
                  name={menu.name}
                  icon={menu.icon}
                  href={`/${path}/${menu.path}`}
                  className={menuClassName}
                  disabled={active.startsWith(menu.path)}
                  hide={hide}
                />
                {menu.child && (
                  <Accordion
                    className="ml-[15px]"
                    hide={
                      !(
                        active.startsWith(menu.path) ||
                        menu.child.some((child) => active.startsWith(child.path))
                      )
                    }
                  >
                    <div className="mt-[16px] flex flex-col gap-[10px]">
                      {menu.child.map((child) => (
                        <TabletButton
                          key={menu.path + child.path}
                          name={child.name}
                          icon={child.icon}
                          href={`/${path}/${child.path}`}
                          className={menuClassName}
                          disabled={active.startsWith(child.path)}
                          hide={hide}
                          childButton
                        />
                      ))}
                    </div>
                  </Accordion>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-white lg:rounded-[20px]">
          {children}
        </div>
      </div>
    </div>
  )
}
Tablet.propTypes = {
  children: PropTypes.node,
  menus: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  active: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  bgSrc: PropTypes.string,
  bgTablet: PropTypes.string.isRequired,
  menuClassName: PropTypes.string.isRequired,
}
Tablet.defaultProps = {
  children: <div />,
  bgSrc: '',
}
export default Tablet
