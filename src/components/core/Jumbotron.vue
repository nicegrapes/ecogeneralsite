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
          subtitle: 'We are at your service.',
          img: 'home-hero.png'
        },
        team: {
          title: 'Eco General Contractors',
          subtitle: 'Bringing the quality you deserve.',
          img: 'team-hero.jpg'
        },
        services: {
          title: 'Next Gen Development',
          subtitle: 'Technology is changing the game and its awesome.',
          img: 'services-hero.jpg'
        },
        projects: {
          title: 'Premium Build Quality',
          subtitle: 'We only use the best in high-tech materials.',
          img: 'projects-hero.png'
        },
        contact: {
          title: 'Get a Free Estimate',
          subtitle: 'Use the form below to request a free quote.',
          img: 'contact-hero.jpg'
        }
      }
    }),

    computed: {
      namespace () {
        if (!this.$route || !this.$route.name) return ''

        return this.$route.name.toLowerCase()
      },
      image () {
        return '/static/' + this.titles[this.namespace].img
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
