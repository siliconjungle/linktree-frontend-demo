import React, { useState } from 'react'
import { getAllUsernames, getProfileByUsername } from 'services/profile'
import ClassicLink from 'components/classic-link'
import MusicPlayerLink from 'components/music-player-link'
import ShowsListLink from 'components/shows-list-link'
import Layout from 'components/layout'
import Heading from 'components/heading'
import Avatar from 'components/avatar'
import VStack from 'components/vstack'

// Todo: Refactor this section, I don't like the way it works.
const LINK_TYPE = {
  'classic': (key, toggleOpen, openId, color, backgroundColor, detailsColor, props) => (
    <ClassicLink
      key={key}
      color={color}
      backgroundColor={backgroundColor}
      {...props}
    />
  ),
  'music-player': (key, toggleOpen, openId, color, backgroundColor, detailsColor, props) => (
    <MusicPlayerLink
      key={key}
      color={color}
      backgroundColor={backgroundColor}
      detailsColor={detailsColor}
      onToggle={() => toggleOpen(key)}
      open={openId === key}
      {...props}
    />
  ),
  'shows-list': (key, toggleOpen, openId, color, backgroundColor, detailsColor, props) => (
    <ShowsListLink
      key={key}
      open={openId === key}
      onToggle={() => toggleOpen(key)}
      color={color}
      backgroundColor={backgroundColor}
      detailsColor={detailsColor}
      {...props}
    />
  ),
}

// Rebuilds page every 10 seconds
// Could trigger it manually but feature is still in unstable release.
const REVALIDATE_RATE = 10

const Profile = ({ username, profile: { avatar, theme, links } }) => {
  const [openId, setOpenId] = useState(null)
  const toggleOpen = (accordionId) => {
    setOpenId(openId === accordionId ? null : accordionId)
  }
  return (
    <Layout backgroundColor={theme.color}>
      <Avatar src={avatar.src} username={username} />
      <div>
        <Heading level={1} color={theme.backgroundColor}>
          @{username}
        </Heading>
      </div>
      <VStack spacing="0.75em">
        {links.map(
          link => LINK_TYPE[link.type](
            link.id,
            toggleOpen,
            openId,
            theme.color,
            theme.backgroundColor,
            theme.detailsColor,
            link.data,
          )
        )}
      </VStack>
    </Layout>
  )
}

export const getStaticPaths = async ({ username, profile }) => {
  const usernames = await getAllUsernames()

  const paths = usernames.map(username => ({
    params: { username },
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }) => {
  const { username } = params
  const profile = await getProfileByUsername(username)

  if (!profile) {
    return {
      notFound: true,
    }
  }

  return {
    props: { username, profile },
    revalidate: REVALIDATE_RATE,
  }
}

export default Profile
