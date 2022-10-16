const siteURL = "https://admin.andesign.ru"

export const state = () => ({
  categories: [],
  pCases: [],
  posts: [],
  tags: [],
  pages: [],
  mainPage: [],
})

export const mutations = {
  updateMainPage: (state, mainPage) => {
    state.mainPage = mainPage
  },
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  },
  updatePCases: (state, pCases) => {
    state.pCases = pCases
  },
  updateCategories: (state, categories) => {
    state.categories = categories
  },
  updatePages: (state, pages) => {
    state.pages = pages
  }
}

export const actions = {


  async getMainPage ({ state, commit, dispatch }) {
    if (state.mainPage.length) return

    try {
      let mainPage = await fetch(
        `${siteURL}/wp-json/acf/v3/options/options`
      ).then(res => res.json())

      commit("updateMainPage", mainPage.acf)
    } catch (err) {
      console.log(err)
    }
  },
  async getPosts ({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=500&_embed=1`
      ).then(res => res.json())

      posts = posts
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, excerpt, date, tags, content }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content
        }))

      commit("updatePosts", posts)
    } catch (err) {
      console.log(err)
    }
  },
  async getPCases ({ state, commit, dispatch }) {
    if (state.pCases.length) return

    try {
      let pCases = await fetch(
        `${siteURL}/wp-json/wp/v2/case?page=1&per_page=500&_embed=1`
      ).then(res => res.json())

      pCases = pCases
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, date, tags, content, categories, acf }) => ({
          id,
          slug,
          title,
          date,
          tags,
          content,
          categories,
          acf
        }))

      commit("updatePCases", pCases)
    } catch (err) {
      console.log(err)
    }
  },
  async getTags ({ state, commit }) {
    if (state.tags.length) return

    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=100&include=${allTags}`
      ).then(res => res.json())

      tags = tags.map(({ id, name }) => ({
        id,
        name
      }))

      commit("updateTags", tags)
    } catch (err) {
      console.log(err)
    }
  },
  async getCategories ({ state, commit, dispatch }) {
    if (state.categories.length) return

    try {
      let categories = await fetch(
        `${siteURL}/wp-json/wp/v2/categories?page=1&per_page=100&hide_empty=true`
      ).then(res => res.json())

      categories = categories
        .map(({ id, count, slug, name, description, date, parent, acf }) => ({
          id,
          count,
          slug,
          name,
          description,
          date,
          parent,
          acf
        }))

      commit("updateCategories", categories.sort((a, b) => a.acf.new_order - b.acf.new_order))
    } catch (err) {
      console.log(err)
    }
  },
  async getPages ({ state, commit, dispatch }) {
    if (state.pages.length) return

    try {
      let pages = await fetch(
        `${siteURL}/wp-json/wp/v2/pages?page=1&per_page=100&_embed=1`
      ).then(res => res.json())

      pages = pages
        .filter(el => el.status === "publish")
        .map(({ id, date, slug, title, excerpt, categories, content, acf }) => ({
          id,
          date,
          slug,
          title,
          excerpt,
          categories,
          content,
          acf
        }))

      commit("updatePages", pages)
    } catch (err) {
      console.log(err)
    }
  }
}
