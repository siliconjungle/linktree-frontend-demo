import React from 'react'
import styled from 'styled-components'
import Text from 'components/text'

const StyledEvent = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 0.75em;
  margin: 0;
  text-decoration: none;
  color: ${({color}) => color};
  transition: border .25s, color .25s, background-color .25s;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0.75em 0;
  border-bottom: 1px solid white;
`

const StyledInnerContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`

const Event = ({ url, date, location, status, color, backgroundColor }) => {
  return (
    <StyledEvent
      href={url}
      color={color}
      backgroundColor={backgroundColor}
      target="_blank"
    >
      <StyledContainer>
        <StyledInnerContainer>
          <Text color={backgroundColor}>{date}</Text>
          <Text color={backgroundColor}>{location}</Text>
        </StyledInnerContainer>
        <StyledInnerContainer>
          <Text color={backgroundColor}>{status === 'sold-out' ? 'Sold out' : '>'}</Text>
        </StyledInnerContainer>
      </StyledContainer>
    </StyledEvent>
  )
}

export default Event
