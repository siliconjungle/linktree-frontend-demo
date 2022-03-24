import React from 'react'
import styled from 'styled-components'

const StyledHCenter = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 24px 12px;
`

const HCenter = ({ backgroundColor, children }) => {
  return (
    <StyledHCenter backgroundColor={backgroundColor}>
      {children}
    </StyledHCenter>
  )
}

export default HCenter
