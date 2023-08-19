import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

export function Accordion({ children, hide, className }) {
  const ref = useRef(null)
  const [height, setHeight] = useState()
  const handleUpdate = () => {
    setHeight(ref.current?.scrollHeight)
    // Masalah kalau accordion dalam accordion
    setTimeout(() => setHeight(ref.current?.scrollHeight), 100)
    setTimeout(() => setHeight(ref.current?.scrollHeight), 200)
    setTimeout(() => setHeight(ref.current?.scrollHeight), 300)
  }
  useEffect(() => {
    handleUpdate()
    window.addEventListener('resize', handleUpdate)
  })
  return (
    <div
      ref={ref}
      className={`overflow-hidden transition-[max-height] duration-300 ${className}`}
      style={{ maxHeight: hide ? 0 : height }}
    >
      {children}
    </div>
  )
}
Accordion.propTypes = {
  children: PropTypes.node,
  hide: PropTypes.bool,
  className: PropTypes.string,
}
Accordion.defaultProps = {
  children: <div />,
  hide: true,
  className: '',
}

export default Accordion
