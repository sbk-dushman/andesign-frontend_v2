<template>
  <section
    class="error-page"
  >
    <v-container
      fluid
    >
      <v-row>
        <v-col
          offset-md="2"
          class="mt-8 mt-md-12"
        >
          <hr data-v-5209668b="" width="45px" class="andeTeal my-2">
          <h1 v-if="error.statusCode === 404">СТРАНИЦА НЕ НАЙДЕНА</h1>
          <h1 v-else>На сайте ведутся работы, заходите чуть позже</h1>
          <img
            v-if="error.statusCode === 404"
            src="/img/404.svg"
            alt="404"
            class="my-4 d-block"
          />
          <nuxt-link
            exact
            to="/"
          >
            Вернитесь на <span class="andeDarkOrange--text">главную</span>
          </nuxt-link> <span>или </span><br /><span>воспользуйтесь поиском:</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          md="3"
          offset-md="2"
        >
          <app-search fill-color="#EFF5F7" border-color="#E8AF64" ></app-search>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default',
    created() {
      this.$store.dispatch('getCategories')
      this.$store.dispatch('getPages')
      this.$store.dispatch('getPCases')
    },
    computed: {
      categories() {
        return this.$store.state.categories
      }
    }
  }
</script>

<style lang="scss" scoped>
  section.error-page {
    position: relative;

    @media only screen and (min-width: 960px) {
      
      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: url('/img/index_left.png') no-repeat;
        background-position: -25% calc(100% + 126px);
        transform: rotate(180deg);
        z-index: 0;
      }
    }

    @media only screen and (min-width: 1424px) {
        background-position: -10% calc(100% + 126px);
    }
    
    .container {
      padding: 6.5em 1.25em;
      position: relative;

      @media only screen and (min-width: 960px) {
        padding: 6.5em 1.5em;
      }
      
      @media only screen and (min-width: 960px) {
        padding: 6.5em 4em;
      }

      img {
        max-width: 100%;
      }
    }


  }
</style>