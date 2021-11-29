import Vuex from 'vuex'

export const state = () => ({
  loading: false,
})


export const mutations = {
  setLoading(state, value) {
    state.loading = value
  }
}


export const getters = {
  loading: state => state.loading
}
