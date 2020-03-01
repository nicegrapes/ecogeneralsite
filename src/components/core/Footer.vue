<template>
  <v-footer
    class="d-flex justify-space-around"
    dark
    height="auto"
  >
    <v-row class="ma-0 font-weight-light d-flex justify-center">
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
