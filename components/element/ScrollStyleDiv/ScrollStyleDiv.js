import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

export function ScrollStyleDiv({ children, scrollClassName, className, scrollable }) {
  const ref = useRef(null)
  const [scroll, setScroll] = useState(false)
  const handleUpdate = () => {
    setScroll(ref?.current?.scrollHeight > ref?.current?.clientHeight && scrollable)
  }
  useEffect(() => {
    handleUpdate()
    window.addEventListener('resize', handleUpdate)
  })
  return (
    <div
      ref={ref}
      className={`${scrollable ? 'overflow-y-auto' : ''} ${className} ${
        scroll ? `${scrollClassName}` : ''
      }`}
    >
      {children}
    </div>
  )
}
ScrollStyleDiv.propTypes = {
  children: PropTypes.node,
  scrollClassName: PropTypes.string,
  className: PropTypes.string,
  scrollable: PropTypes.bool,
}
ScrollStyleDiv.defaultProps = {
  children: <div />,
  scrollClassName: '',
  className: '',
  scrollable: true,
}
export default ScrollStyleDiv
