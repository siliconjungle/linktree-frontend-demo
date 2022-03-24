import React from 'react'
import Accordion from 'components/accordion'
import Text from 'components/text'

const MusicPlayerLink = ({ id, color, backgroundColor, detailsColor, open, onToggle }) => {
  return (
    <Accordion
      title="Music"
      color={color}
      backgroundColor={backgroundColor}
      detailsColor={detailsColor}
      open={open}
      onToggle={onToggle}
    >
      <Text>Under construction</Text>
    </Accordion>
  )
}

export default MusicPlayerLink
