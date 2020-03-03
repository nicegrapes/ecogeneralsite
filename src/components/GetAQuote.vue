<template>
  <v-alert
    class="mt-n5"
    color="#2075BB"
    dark
    dense
    tile
  >
    <v-container py-0>
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="grow hidden-sm-and-down">
          <h2 class="title">
            Call us for a free estimate!
            <v-chip
              class="ma-2 pa-2"
              color="rgba(38, 50, 56, 0.45)"
              text-color="white"
            >
              <v-icon right>mdi-phone</v-icon>
              <v-text
                class="pa-3"
              >630 529 1975</v-text>
            </v-chip>
          </h2>
        </v-col>
        <v-col class="shrink">
          <v-btn
            outlined
            to="/contact"
          >
            Get a Quote
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-alert>
</template>
