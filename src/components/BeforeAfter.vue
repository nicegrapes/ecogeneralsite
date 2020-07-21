<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="/static/project8.png"
      >
        <v-expand-transition>
          <img
            src="/static/project7.png"
            v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal"
            style="height: 100%;"
          >
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <div class="font-weight-light grey--text title mb-2">Project Title</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">Lorem Ipsum</h3>
        <div class="font-weight-light title mb-2">
          Project description
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
</style>