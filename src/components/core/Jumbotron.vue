<template>
  <v-sheet
    :height="$vuetify.breakpoint.smAndUp ? '60vh' : '100vh'"
    color="primary"
    tile
  >
    <v-img
      :key="image"
      :src="image"
      gradient="to top, rgba(160, 90, 70, .85), rgba(30, 40, 30, .85)"
      height="100%"
    >
      <v-container
        fill-height
        white--text
      >
        <v-slide-x-transition appear>
          <v-col
            align="center"
            justify="center"
          >
            <h1
              :class="$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-2'"
              class="mb-2"
              v-text="title"
            />
            <div
              class="title font-weight-light"
              v-text="subtitle"
            />
          </v-col>
        </v-slide-x-transition>
      </v-container>
    </v-img>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      titles: {
        home: {
          title: 'Build your future',
          subtitle: 'Bringing you the quality you deserve.'
        },
        services: {
          title: 'Next Gen Development',
          subtitle: 'Technology is changing the game and its awesome.'
        },
        projects: {
          title: 'Premium Build Quality',
          subtitle: 'We only use the best in high-tech materials.'
        },
        contact: {
          title: 'Your Thoughts Count',
          subtitle: 'Send us a message.'
        }
      }
    }),

    computed: {
      namespace () {
        if (!this.$route || !this.$route.name) return ''

        return this.$route.name.toLowerCase()
      },
      image () {
        return '/static/' + this.namespace + '-hero.png'
      },
      subtitle () {
        return this.titles[this.namespace].subtitle
      },
      title () {
        return this.titles[this.namespace].title
      }
    }
  }
</script>
