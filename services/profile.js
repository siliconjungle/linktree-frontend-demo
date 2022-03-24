const PROFILES = {
  'siliconjungle': {
    avatar: {
      src: 'https://pbs.twimg.com/profile_images/1452761882926796802/knujNlMc_400x400.png',
    },
    theme: {
      color: '#1c202a',
      backgroundColor: '#eeeeee',
      detailsColor: '#353a4a',
    },
    links: [
      {
        id: '993d6a66-3e5b-4170-a0e0-c947fd007973',
        type: 'shows-list',
        data: {
          events: [
            {
              id: 'f9a4b5b9-8543-4d04-ae26-224e6a2e4ad7',
              date: 'Apr 01 2019',
              location: 'The Forum, Melbourne',
              url: 'https://www.songkick.com/',
              status: 'on-sale',
            },
            {
              id: 'e649d00c-4739-4197-a693-cd64284643bb',
              date: 'Apr 02 2019',
              location: 'Venue Name, Canberra',
              url: 'https://www.songkick.com/',
              status: 'sold-out',
            },
            {
              id: '292f4145-5e7f-4770-ba04-57f2e9c5fcea',
              date: 'Apr 03 2019',
              location: 'Venue Name, Sydney',
              url: 'https://www.songkick.com/',
              status: 'on-sale',
            },
          ],
        },
      },
      {
        id: '625dadfb-5f47-460c-96d4-55da1b11ecc5',
        type: 'music-player',
        data: {
          song: {},
          suppliers: [],
        },
      },
      {
        id: 'fe2e7823-e61c-45ba-a6a0-7695180b518f',
        type: 'classic',
        data: {
          url: 'https://github.com/siliconjungle',
          title: 'Github',
        },
      },
      {
        id: '74aaa60e-6f95-4c8b-b114-68ea66a7baeb',
        type: 'classic',
        data: {
          url: 'https://www.youtube.com/channel/UCpmCOIBbNYagSsqTb5C-hzg',
          title: 'Youtube',
        },
      },
      {
        id: '8891bdf3-bc1e-48f8-a594-1c52743f3f85',
        type: 'classic',
        data: {
          url: 'https://www.linkedin.com/in/james-a-94774a173/',
          title: 'LinkedIn',
        },
      },
      {
        id: '83018872-dba9-498b-97bd-dd2652fab1f7',
        type: 'classic',
        data: {
          url: 'https://twitter.com/JungleSilicon',
          title: 'Twitter',
        },
      },
    ],
  },
}

const NETWORK_DELAY = 500

export const getAllUsernames = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(Object.keys(PROFILES))
    }, NETWORK_DELAY)
  })

export const getProfileByUsername = async (username) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(PROFILES[username] || null)
    }, NETWORK_DELAY)
  })
