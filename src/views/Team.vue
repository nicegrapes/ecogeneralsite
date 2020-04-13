<template>
<section
  id="projects"
  class="mb-n5 mt-5"
>
<heading>Meet the Team</heading>
<v-row
  class="ma-8 d-flex flex-wrap"
>
  <v-card
    class="mx-auto mb-8"
    max-width="200"
    tile
  >
    <v-img
      src="/static/tomBackground.png"
      width="270"
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
            size="220"
            tile
          >
            <v-img src="/static/profile.png" />
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="black"
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                Tom Bridge
              </v-list-item-title>
              <v-list-item-subtitle>
                CEO
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
    <v-card
    class="mx-auto mb-8"
    max-width="200"
    tile
  >
    <v-img
      src="/static/luisBackground.png"
      width="270"
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
            size="220"
            tile
          >
            <v-img src="/static/profile.png" />
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="black"
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                Luis Bridge
              </v-list-item-title>
              <v-list-item-subtitle>
                Project Manager
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
