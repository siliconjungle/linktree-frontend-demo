import React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`

const Avatar = ({ src, username }) => {
  return (
    <StyledAvatar src={src} alt={`@${username} Profile Image | Linktree`} />
  )
}

export default Avatar
