import { SET_ADVENTURES } from './mutations.type'

export const state = () => ({
  adventures: []
})

export const mutations = {
  [SET_ADVENTURES](state, list) {
    state.adventures = list
  }
}

export const actions = {
  getPosts(files) {
    return files.keys().map(key => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
  },
  async nuxtServerInit({ commit }) {
    // Adventure collection type
    // let adventureFiles = await require.context('~/assets/content/adventures/', true, /\.json$/)
    // await commit(SET_ADVENTURES, actions.getPosts(adventureFiles))
    // ? When adding/changing NetlifyCMS collection types, make sure to:
    // ? 1. Add/rename exact slugs here
    // ? 2. Add/rename the MUTATION_TYPE names in `./mutations.type.js`
    // ? 3. Add/rename `pages/YOUR_SLUG_HERE` and use the Vuex store like the included examples
    // ? If you are adding, add a state, mutation and commit (like above) for it too
  }
}
