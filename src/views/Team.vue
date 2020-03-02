<template>
<section
  id="projects"
  class="mb-n5"
>
<heading>Meet the Team</heading>
<v-row
  class="mb-8 mt-8"
>
  <v-card
    class="mx-auto mb-8"
    max-width="180"
    tile
  >
    <v-img
      src="/static/martinBackground.png"
      width="200"
    >
      <v-row
        align="center"
        class="fill-height"
      >
        <v-col
          align-self="center"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="200"
            tile
          >
            <v-img src="/static/martinProfile.png" />
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="black"
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                Martin Janes
              </v-list-item-title>
              <v-list-item-subtitle>
                Marketing and Sales
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
  </v-row>
  </section>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Team'
    },
    components: {
      Heading: () => import('@/components/Heading')
    },
    data: () => ({})
  }
</script>

<style lang='sass'>
  #projects
    .v-slide-group__content
      justify-content: center
</style>
