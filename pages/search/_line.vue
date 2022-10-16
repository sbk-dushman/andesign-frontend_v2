<template>
  <v-container
    fluid
      class="search-results"
  >
    <v-row>
      <v-col
        md="7"
        offset-md="1"
        lg="4"
        offset-lg="2"
      >
        <div
          class="query d-flex align-center my-2"
        >
          <hr
            width="45px"
            class="andeTeal"
          >
          <span
            class="ml-2"
          >
            Ваш запрос: {{ $route.params.line }}
          </span>
        </div>
        <h1
          v-if="suggestions.length"
        >
          Мы нашли вам:
        </h1>
        <h1
          v-else
        >
          Мы ничего не нашли:(<br/>
        </h1>
        <nuxt-link
          v-once
          v-for="(suggestion, index) in suggestions.sort((a, b) => b.relation - a.relation)"
          :key="suggestion.slug"
          :to="`/${suggestion.slug}`"
          class="mb-8"
        >
          <span
            class="with-dot extrude-dot font-weight-black res-num"
            v-html="index < 9 ? '0' + (index + 1) : index + 1"
          />
          <h2
            class="result-title andeDarkOrange--text"
            v-html="suggestion.title"
          />
          <p
            class="result-description"
            v-html="suggestion.description"
          />
          <div class="mt-12 d-flex flex-row justify-center justify-md-start"><hr width="7px" class="andeLightGray mr-1 ml-n4"> <hr width="45px" class="andeLightGray"></div>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      line: this.$route.params.line.slice(0, -1),
      suggestions: []
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    pages() {
      return this.$store.state.pages
    },
    pCases() {
      return this.$store.state.pCases
    }
  },
  created() {
    this.searchPages()
    this.searchCategories()
    this.searchPCases()
  },
  methods: {
    searchPages() {
      const line = this.line.toLowerCase()
      this.pages.forEach(page => {
        const parent = this.categories.find(cat => page.categories.includes(cat.id) && cat.parent == 0)
        let existing = false
        if (this.suggestions.find(sugestion => sugestion.slug == parent.slug)) existing = this.suggestions.find(sugestion => sugestion.slug == parent.slug)
        let relation = page.title.rendered.toLowerCase().includes(line)*5 + page.acf.search?.toLowerCase().includes(line)*5 + page.excerpt.rendered.toLowerCase().includes(line)*3 + page.acf.prologue.toLowerCase().includes(line)*3 + page.content.rendered.toLowerCase().includes(line)*1 + page.acf.top_right.toLowerCase().includes(line)*1
        if (page.acf?.services) {
          page.acf.services.forEach(service => {
            relation += service.title?.toLowerCase().includes(line)*3 + service.description?.toLowerCase().includes(line)*1
          })
        }
        if (relation > 0) {
          if (existing) {
            return existing.relation += relation
          }
          this.suggestions.push({title: parent.name, slug: parent.slug, description: parent.description, relation: relation})
        }
      })
    },
    searchCategories() {
      const line = this.line.toLowerCase()
      this.categories.forEach(cat => {
        const parent = cat.parent ? this.categories.find(c => c.id == cat.parent) : cat
        let existing = false
        if (this.suggestions.find(sugestion => sugestion.slug == parent.slug)) existing = this.suggestions.find(sugestion => sugestion.slug == parent.slug)
        let relation = cat.name?.toLowerCase().includes(line)*5 + cat.description?.toLowerCase().includes(line)*3
        if (relation > 0) {
          if (existing) {
            return existing.relation += relation
          }
          this.suggestions.push({title: parent.name, slug: parent.slug, description: parent.description, relation: relation})
        }
      })
    },
    searchPCases() {
      const line = this.line.toLowerCase()
      this.pCases.forEach(pCase => {
        const parent = this.categories.find(cat => pCase.categories.includes(cat.id) && cat.parent == 0)
        if (!parent) return
        let existing = false
        if (this.suggestions.find(sugestion => sugestion.slug == parent.slug)) existing = this.suggestions.find(sugestion => sugestion.slug == parent.slug)
        let relation = pCase.title.rendered.toLowerCase().includes(line)*5 + pCase.acf?.description?.toLowerCase().includes(line)*3
        if (pCase.acf?.media) {
          pCase.acf.media.forEach(image => {
            relation += image.caption?.toLowerCase().includes(line)*3 + image.description?.toLowerCase().includes(line)*1
          })
        }
        if (relation > 0) {
          if (existing) {
            return existing.relation += relation
          }
          this.suggestions.push({title: parent.name, slug: parent?.slug, description: parent.description, relation: relation})
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
div.search-results {
    
  padding: 12.5em 1.25em 2.5em;
  position: relative;
    
  @media only screen and (min-width: 960px) {
    padding: 12.5em 1.5em 2.5em;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: url('/img/index_left.png') no-repeat, url('/img/index_right.png') no-repeat;
      background-position: -20% calc(100% + 126px), 130% -20em;
      transform: rotate(180deg);
      z-index: 0;
    }
  }
    
  @media only screen and (min-width: 1424px) {
    padding: 12.5em 4em 2.5em;
    
    &::before {
      background-position: -10% calc(100% + 126px), 110% -20em;
    }
  }
  
  .res-num {
    font-size: 1.6875em;
    line-height: 40px;
    color: #151D24!important;
  }

  h2 {
    font-size: 1em;
  }

  a {
    display: block;
  }
}
</style>