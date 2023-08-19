'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { IoCaretDown } from 'react-icons/io5'

function Icon({ active, top }) {
  return (
    <div
      className={`toggle__container ${active ? 'active' : ''} ${
        top
          ? '[&>*]:bg-white [&>*]:[transition:background-color_300ms_0ms]'
          : '[&>*]:bg-blue-600 [&>*]:[transition:background-color_500ms_500ms]'
      }`}
    >
      <div className={`toggle ${active ? 'no-animation active' : ''} toggle__one `} />
      <div className={`toggle ${active ? 'no-animation active' : 'active'} toggle__two `} />
      <div className={`toggle ${active ? 'no-animation active' : 'active'} toggle__three `} />
    </div>
  )
}
Icon.propTypes = {
  active: PropTypes.bool,
  top: PropTypes.bool,
}
Icon.defaultProps = {
  active: true,
  top: true,
}

function NavbarButton({ route, active, top, dropDown, setDropDown }) {
  const [dropDownButton, setDropDownButton] = useState(false)
  useEffect(() => {
    setDropDownButton(dropDown && dropDownButton)
  }, [dropDown, dropDownButton])
  const children = route.children !== undefined
  let style
  if (active) {
    if (top) {
      style =
        '[.parent:has(~*:hover)>&]:text-white [transition:transform_500ms,background-color_300ms_0ms,color_300ms_0ms,box-shadow_300ms_0ms,border_300ms_0ms]'
    } else {
      style =
        'text-blue-600 border-b-4 border-orange-500 drop-shadow-[0px_3px_5px_#00000015] [transition:transform_500ms,background-color_500ms_500ms,color_500ms_500ms,box-shadow_500ms_500ms,border_500ms_500ms]'
    }
  } else {
    style = top
      ? '[.parent:has(~*:hover)>&]:text-white [.parent:hover>&]:text-white'
      : '[.parent:has(~*:hover)>&]:text-orange-500 [.parent:hover>&]:text-orange-500'
  }
  return (
    <li className="group relative whitespace-nowrap font-rubik text-[16px] font-semibold">
      {/* Bagian paling atas */}
      <div
        className={`parent flex h-full w-full cursor-pointer items-center justify-center p-4 px-7 ${
          dropDownButton ? 'max-lg:bg-neutral-100 max-lg:text-orange-500' : ''
        }`}
      >
        <span className={`${style} flex items-center`}>
          {route.name}
          {children && (
            <IoCaretDown
              className={`transition-[transform] duration-300 lg:group-hover:rotate-180 ${
                dropDownButton ? 'max-lg:rotate-180' : ''
              }`}
            />
          )}
        </span>
      </div>
      {children || <Link href={route.path} className="absolute inset-0" />}
      {children && (
        <>
          <button
            type="button"
            className="absolute inset-0 z-10 h-full w-full opacity-0 lg:hidden"
            onClick={() => setDropDownButton(!dropDownButton)}
          />
          {/* Bagian dropdown ke bawah (keseluruhan semua child) */}
          <div
            className={`relative left-[50%] top-[100%] z-20 min-w-full -translate-x-[50%] transition-all duration-500 ${
              dropDownButton ? 'max-lg:peer-checked:block' : 'max-lg:hidden'
            } lg:pointer-events-none lg:absolute lg:opacity-0 lg:drop-shadow-xl lg:group-hover:pointer-events-auto lg:group-hover:opacity-100`}
          >
            <div className="bg-neutral-50 text-blue-600/[0.75] lg:mt-[12px] lg:rounded-[8px] lg:bg-white">
              {route.children?.map((child) => {
                const children2 = child.children !== undefined
                return (
                  <div key={child.name} className="group/2">
                    {/* Bagian masing-masing child dropdown bawah */}
                    <Link href={child.path}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-center p-3 px-6 text-center lg:group-hover/2:text-orange-500"
                        onClick={() => setDropDown(false)}
                      >
                        {child.name}
                        <span className="transition-[transform] duration-300 max-lg:hidden lg:group-hover/2:-rotate-90">
                          {children2 && <IoCaretDown />}
                        </span>
                      </button>
                    </Link>
                    {/* Bagian dropdown ke kanan (keseluruhan semua child) */}
                    {children2 && (
                      <div className="pointer-events-none absolute left-[100%] top-0 opacity-0 drop-shadow-xl transition-all duration-500 group-hover/2:pointer-events-auto group-hover/2:opacity-100 max-lg:hidden">
                        <div className="ml-[12px] mt-[12px] rounded-[8px] bg-white text-blue-600/[0.75]">
                          {/* Bagian masing-masing child dropdown kanan */}
                          {child.children.map((child2) => (
                            <Link href={child2.path} key={child2.name}>
                              <div className="flex items-center justify-center p-3 hover:text-orange-500">
                                {child2.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}
    </li>
  )
}
NavbarButton.propTypes = {
  route: PropTypes.shape().isRequired,
  active: PropTypes.bool.isRequired,
  top: PropTypes.bool.isRequired,
  dropDown: PropTypes.bool.isRequired,
  setDropDown: PropTypes.func.isRequired,
}

export function Navbar() {
  const router = useRouter()
  const [yOffset, setYOffset] = useState(typeof window !== 'undefined' ? window?.scrollY : 0)
  const [visible, setVisible] = useState(true)
  const [dropDown, setDropDown] = useState(false)
  const [top, setTop] = useState(router.pathname === '/')
  const ref = useRef()
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (!ref?.current?.contains(e.target)) setDropDown(false)
    })
  })

  useEffect(() => {
    setTop(yOffset < 100 && router.pathname === '/' && !dropDown)
  }, [dropDown, router.pathname, yOffset])
  function handleScroll() {
    const currentYOffset = window.scrollY
    const naik = yOffset >= currentYOffset || currentYOffset < 100

    setYOffset(currentYOffset)
    setVisible(naik)
    setDropDown(dropDown && visible)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  const routes = [
    { path: '/', name: 'Beranda' },
    
    {
      name: 'Cabang',
      children: [
        { name: 'Olahraga', path: '/cabor/olahraga' },
        { name: 'Seni', path: '/cabang/seni' },
      ],
    },
    
    
    { path: '/blogs', name: 'Blogs' },
  ]
  return (
    <nav
      ref={ref}
      className={`${
        top
          ? 'bg-transparent text-white/[0.45] [transition:transform_500ms,background-color_300ms_0ms,color_300ms_0ms,box-shadow_300ms_0ms]'
          : 'bg-white text-blue-600/[0.75] shadow-xl [transition:transform_500ms,background-color_500ms_500ms,color_500ms_500ms,box-shadow_500ms_500ms]'
      }
      ${visible ? 'visible' : '-translate-y-[100%]'}
      fixed z-[9999] w-[100vw] px-[3%] py-2 lg:px-[5%] lg:py-0`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex flex-row items-center gap-[10px] py-[5px]">
          <div className="h-[36px] w-[36px] lg:h-[50px] lg:w-[50px]">
            <Image src="/assets/others/logo.png" alt="PPSMB Logo" width={1000} height={1000} />
          </div>
          <span
            className={`font-rubik text-[18px] font-semibold lg:text-[24px] ${
              top
                ? 'text-white [transition:transform_500ms,background-color_300ms_0ms,color_300ms_0ms,box-shadow_300ms_0ms]'
                : 'text-blue-600 [transition:transform_500ms,background-color_500ms_500ms,color_500ms_500ms,box-shadow_500ms_500ms]'
            }`}
          >
            PORSENIGAMA
          </span>
        </Link>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none lg:hidden "
          onClick={() => setDropDown(!dropDown)}
        >
          <Icon active={dropDown} top={top} />
        </button>
        <div
          className={`absolute inset-x-0 top-[100%] w-full items-center rounded-b-3xl bg-white lg:static lg:flex lg:w-auto lg:flex-row lg:bg-transparent ${
            dropDown
              ? 'pointer-events-auto opacity-100 transition-[opacity] delay-500 duration-500'
              : 'pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100'
          }`}
        >
          <ul className="item-center relative pt-4 text-base lg:flex lg:justify-between lg:pt-0">
            {routes.map((route) => (
              <NavbarButton
                key={route.name}
                route={route}
                active={
                  (router.pathname && route.path && router.pathname.includes(route.path || '')) ||
                  (route.path === '/' && router.pathname === route.path)
                }
                top={top}
                dropDown={dropDown}
                setDropDown={setDropDown}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
