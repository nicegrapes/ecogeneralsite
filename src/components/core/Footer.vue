<template>
  <v-footer
    class="d-flex justify-space-around"
    dark
    height="auto"
    padless
  >
    <v-row class="ma-0 font-weight-light d-flex justify-center">
      <!-- <v-col
        class="grey darken-3 pa-5 d-flex justify-space-around"
        cols="12"
        md="6"
      >
        <ul class="body-1 pl-2">
          <li
            v-for="(c, i) in company"
            :key="i"
            class="mb-3"
          >
            <a
              class="transition-swing"
              href="#"
              v-text="c"
            />
          </li>
        </ul>
      </v-col> -->
      <!-- <v-col
        class="grey darken-3 pa-5"
        cols="12"
        md="6"
      >
        <v-row>
          <v-col
            v-for="(category, i) in categories"
            :key="i"
            cols="12"
            md="6"
          >
            <a
              href="#"
              v-text="category"
            />
          </v-col>
        </v-row>
      </v-col> -->

      <v-col
        class="text-center blue-grey darken-4 pa-3"
        cols="12"
      >
        &copy; 2020 Eco General Contractors — All Rights reserved.
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      categories: [],
      company: []
    })
  }
</script>

<style lang="sass">
  .v-application .v-footer
    ul
      list-style-type: none

    a
      color: white
      text-decoration: none

      &:hover
        color: grey
</style>
