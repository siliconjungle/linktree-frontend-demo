import React from 'react'
import styled from 'styled-components'

const StyledText = styled.span`
  color: ${({ color }) => color};
  padding: 0;
  margin: 0;
  font-weight: 700px;
  font-size: 16px;
  line-height: 1.5;
  text-overflow: ellipsis;
  whitespace: nowrap;
  overflow: hidden;
  max-width: 100%;
`

const Text = ({ color, children }) => {
  return <StyledText color={color}>{children}</StyledText>
}

export default Text
