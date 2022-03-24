import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.details`
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  padding: 0;
  margin: 0
  text-decoration: none;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
`

const StyledSummary = styled.summary`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  margin: 0;
  height: 48px;
  cursor: pointer;
  text-decoration: none;
  list-style: none;
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

const StyledMain = styled.main`
  margin: 0;
`

const Accordion = ({
  title,
  color,
  backgroundColor,
  detailsColor,
  children,
  onToggle,
  open,
}) => {
  return (
    <StyledDetails
      color={backgroundColor}
      backgroundColor={detailsColor}
      open={open}
    >
      <StyledSummary
        color={color}
        backgroundColor={backgroundColor}
        onClick={e => {
          e.preventDefault()
          onToggle(e)
        }}
      >
        {title}
      </StyledSummary>
      <StyledMain>{children}</StyledMain>
    </StyledDetails>
  )
}

export default Accordion
