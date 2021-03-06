import { SET_ADVENTURES, SET_JOURNAL_ENTRIES } from './mutations.type'

export const state = () => ({
  adventures: [],
  journalEntries: []
})

export const mutations = {
  [SET_ADVENTURES](state, adventures) {
    state.adventures = adventures.map(adventure => ({
      ...adventure,
      updatedDate: new Date(state.journalEntries[adventure.slug] ? state.journalEntries[adventure.slug][0] : null),
      dates: {
        start: new Date(adventure.dates.start),
        end: new Date(adventure.dates.end)
      }
    }))
  },

  [SET_JOURNAL_ENTRIES](state, journalEntries) {
    state.journalEntries = journalEntries
      .sort((entryA, entryB) => new Date(entryB.date) - new Date(entryA.date))
      .reduce((acc, currEntry) => {
        const currEntryAdventure = JSON.parse(currEntry.adventure)
        const currEntriesForAdventure = acc[currEntryAdventure.slug] || []
        currEntriesForAdventure.push({
          ...currEntry,
          date: new Date(currEntry.date),
          adventure: currEntryAdventure
        })

        return {
          ...acc,
          [currEntryAdventure.slug]: currEntriesForAdventure
        }
      }, {})
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
    // Journal Entries collection type
    let journalEntriesFiles = await require.context('~/assets/content/journal_entries/', true, /\.json$/)
    await commit(SET_JOURNAL_ENTRIES, actions.getPosts(journalEntriesFiles))

    // Adventure collection type
    let adventureFiles = await require.context('~/assets/content/adventures/', true, /\.json$/)
    await commit(SET_ADVENTURES, actions.getPosts(adventureFiles))
  }
}
