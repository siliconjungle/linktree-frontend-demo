import React from 'react'
import styled from 'styled-components'
import Accordion from 'components/accordion'
import Event from 'components/event'
import Text from 'components/text'

const StyledFooter = styled.div`
  padding: 0 0 0.5em 0;
`

const ShowsListLink = ({ color, backgroundColor, detailsColor, events, open, onToggle }) => {
  return (
    <Accordion
      title="Shows"
      color={color}
      backgroundColor={backgroundColor}
      detailsColor={detailsColor}
      open={open}
      onToggle={onToggle}
    >
      {events.map(({ id, url, date, location, status }) =>
        <Event
          key={id}
          url={url}
          date={date}
          location={location}
          status={status}
          color={color}
          backgroundColor={backgroundColor}
        />
      )}
      <StyledFooter>
        <Text>by songkick</Text>
      </StyledFooter>
    </Accordion>
  )
}

export default ShowsListLink
