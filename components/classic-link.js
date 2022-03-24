import React from 'react'
import Link from 'components/link'

const ClassicLink = ({ color, backgroundColor, title, url }) => {
  return (
    <Link
      color={color}
      backgroundColor={backgroundColor}
      href={url}
    >
      {title}
    </Link>
  )
}

export default ClassicLink
