import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  color: ${({ color }) => color};
  margin: 0px;
  font-weight: 700px;
  font-size: 16px;
  line-height: 1.5;
  text-overflow: ellipsis;
  whitespace: nowrap;
  overflow: hidden;
  max-width: 100%;
`
const H2 = styled.h2`
  color: ${({ color }) => color};
  margin: 0px;
`
const H3 = styled.h3`
  color: ${({ color }) => color};
  margin: 0px;
`
const H4 = styled.h4`
  color: ${({ color }) => color};
  margin: 0px;
`
const H5 = styled.h5`
  color: ${({ color }) => color};
  margin: 0px;
`
const H6 = styled.h6`
  color: ${({ color }) => color};
  margin 0px;
`

const Heading = ({ level, color, children }) => {
  switch (level) {
    case 1:
      return <H1 color={color}>{children}</H1>
    case 2:
      return <H2 color={color}>{children}</H2>
    case 3:
      return <H3 color={color}>{children}</H3>
    case 4:
      return <H4 color={color}>{children}</H4>
    case 5:
      return <H5 color={color}>{children}</H5>
    case 6:
      return <H6 color={color}>{children}</H6>
    default:
      return null
  }
}

export default Heading
