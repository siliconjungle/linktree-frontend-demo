import React from 'react'
import styled from 'styled-components'
import Text from 'components/text'

const StyledLink = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  height: 48px;
  text-decoration: none;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid transparent;
  transition: border .25s, color .25s, background-color .25s;
  &:hover {
    color: ${({ backgroundColor }) => backgroundColor};
    background-color: ${({ color }) => color};
    border: ${({ backgroundColor }) => `1px solid ${backgroundColor}`};
  }
`

const Link = ({ href, color, backgroundColor, children }) => {
  return (
    <StyledLink
      href={href}
      color={color}
      backgroundColor={backgroundColor}
      target="_blank"
    >
      <Text>
        {children}
      </Text>
    </StyledLink>
  )
}

export default Link
