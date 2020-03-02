<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'rgb(38, 50, 56, 0.95)'"
    :hide-on-scroll="$vuetify.breakpoint.smAndDown"
    app
    dark
    elevate-on-scroll
    height="90"
  >
    <v-img
      alt="Eco General Construction"
      class="shrink"
      src="/static/ecoGeneral.png"
      height="100"
      contain="true"
    />
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :active-class="!isScrolling ? '#95a5a6' : undefined"
        :to="item.to"
        text
      >
        <span v-text="item.text" />
      </v-btn>
    </v-toolbar-items>
    <v-app-bar-nav-icon
      v-else
      aria-label="Open Navigation Drawer"
      @click="toggleDrawer"
    />
  </v-app-bar>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      isScrolling: false
    }),

    computed: {
      items () {
        return [
          {
            'to': '/',
            'text': 'Home'
          },
          {
            'to': '/team',
            'text': 'Team'
          },
          {
            'to': '/services',
            'text': 'Services'
          },
          {
            'to': '/projects',
            'text': 'Projects'
          },
          {
            'to': '/contact',
            'text': 'Contact'
          }
        ]
      }
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 25
      }
    }
  }
</script>
