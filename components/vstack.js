import React from 'react'
import styled from 'styled-components'

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${({ alignItems }) => alignItems};
  * + * {
    margin-top: ${({ spacing }) => spacing};
  }
`

const VStack = ({ spacing = '0.75em', alignItems = 'center', children }) => {
  return (
    <StyledStack
      spacing={spacing}
      alignItems={alignItems}
    >
      {children}
    </StyledStack>
  )
}

export default VStack
