import Head from 'next/head'
import PropTypes from 'prop-types'

import { Navbar } from './Navbar'

export const metadata = {
  title: 'Blog',
  description: 'penjelasan blogs',
}


export function DefaultLayout({ children, title, nav }) {
  return (
    <>
      
      <header>{nav && <Navbar />}</header>
      <main>{children}</main>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  nav: PropTypes.bool,
}

DefaultLayout.defaultProps = {
  title: 'PPSMB PIONIR UGM 2023',
  nav: true,
}

export default DefaultLayout
