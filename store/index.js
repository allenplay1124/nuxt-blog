import axios from '~/plugin/axios'

export const state = () => ({
  siteName: '',
  siteDescription: ''
})


export const mutations = {
  setSiteName (state, name) {
    state.siteName = mame
  },
  setSiteDescription(state, description)
  {
    state.siteDescription = description
  }
}

export const actions = {
  nuxtServerInit({commit})
}
