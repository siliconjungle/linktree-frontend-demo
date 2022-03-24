import React from 'react'
import styled from 'styled-components'
import HCenter from 'components/hcenter'
import VStack from 'components/vstack'

const StyledLayout = styled.div`
  width: 100%;
  max-width: 680px;
  margin-bottom: 80px;
  padding: 24px 0 12px 0;
`

const Layout = ({ backgroundColor, children }) => {
  return (
    <HCenter backgroundColor={backgroundColor}>
      <StyledLayout>
        <VStack spacing="1.5em">{children}</VStack>
      </StyledLayout>
    </HCenter>
  )
}

export default Layout
