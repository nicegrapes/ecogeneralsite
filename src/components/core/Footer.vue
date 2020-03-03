<template>
  <v-footer
    class="d-flex justify-space-around"
    color="rgba(38, 50, 56, 0.95)"
    height="auto"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        :to="link.to"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link.name }}
      </v-btn>
      <v-col
        class="py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Eco General Contractors — All Rights reserved.</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      categories: [],
      company: [],
      links: [
        { name: 'Home', to: '/' },
        { name: 'Team', to: '/team' },
        { name: 'Services', to: '/services' },
        { name: 'Projects', to: '/projects' },
        { name: 'Contact', to: '/contact' }
      ]
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
