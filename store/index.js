import axios from '~/plugins/axios.js'

export const state = () => ({
  siteName: '',
  siteDescription: ''
})


export const mutations = {
  setSiteName (state, name) {
    state.siteName = name
  },
  setSiteDescription(state, description)
  {
    state.siteDescription = description
  }
}

export const actions = {
  async nuxtServerInit({commit}) {
    let res = await axios.get('/')
    commit('setSiteName', res.data.name)
    commit('setSiteDescription', res.data.description)
  }
}

export const getters = {
  siteName: state => state.siteName,
  siteDescription: state => state.siteDescription,
}
