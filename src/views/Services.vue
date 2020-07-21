<template>
  <section id="services" class="py-5">

    <iframe
      class="mt-n10"
      width="100%"
      height="550"
      src="https://www.youtube.com/embed/nBYZpsbu9ds"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <heading class="mt-6">Our Services</heading>

    <v-container>
      <v-row align="center" class="mb-5">
        <v-col cols="12" md="4">
          <v-card outlined>
            <v-img src="/static/project6.png" height="250" />
          </v-card>
        </v-col>

        <v-col class="px-0" cols="12" md="8">
          <v-card flat color="transparent">
            <v-card-title>Claims process</v-card-title>
            <v-container>
              <v-stepper v-model="e6" vertical>
                <v-stepper-step :complete="e6 > 1" step="1">Inspect the Damage</v-stepper-step>

                <v-stepper-content step="1">
                  <v-card
                    class="mb-6 pa-3 elevation-0"
                  >Our licensed adjuster will assess the damage and create a detailed estimate.</v-card>
                  <v-btn color="primary" @click="e6 = 2">Next</v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2" step="2">File the claim</v-stepper-step>

                <v-stepper-content step="2">
                  <v-card
                    class="mb-6 pa-3 elevation-0"
                  >Once your claim is filed, a meet with your insurance adjuster will be scheduled to go over the damage in detail.</v-card>
                  <v-btn color="primary" @click="e6 = 3">Next</v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 3" step="3">Negotiate a settlement</v-stepper-step>

                <v-stepper-content step="3">
                  <v-card
                    class="mb-6 pa-3 elevation-0"
                  >If for any reason the insurance adjuster does not agree with the estimated settlement, we have the option to appeal the decision and submit an appraisal.</v-card>
                  <v-btn color="primary" @click="e6 = 4">Next</v-btn>
                </v-stepper-content>

                <v-stepper-step step="4">Complete the Build</v-stepper-step>
                <v-stepper-content step="4">
                  <v-card
                    class="mb-6 pa-3 elevation-0"
                  >Our construction crews will work efficiently to complete the build to your satisfaction.</v-card>
                  <v-btn color="primary" @click="e6 = 1">Back to Start</v-btn>
                </v-stepper-content>
              </v-stepper>
            </v-container>

            <v-card-text>If your home was affected by the weather, we can help! Our representatives will point you in the direction of a licensed Public Adjuster firm, who will guide you through the claims process to ensure an optimal outcome. Proper representation is very important when it comes to claims, and we will make sure you are in the right hands.</v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center" class="mb-5">
        <v-col cols="12" md="4" order-md="2">
          <v-card outlined>
            <v-img src="/static/project4.png" height="250" />
          </v-card>
        </v-col>

        <v-col class="px-0" cols="12" md="8">
          <v-card color="transparent" flat>
            <v-card-title>Construction</v-card-title>

            <v-card-text>
              <p>We are fully licensed, bonded and insured. Our representatives will provide you with a wide range of quality materials for you to choose from. From there, our experienced builders will aim to complete your project in a timely and efficient fashion. Upon completion, our representatives will do a quality check walkthrough with you to ensure everything is completed to your satisfaction.</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center" class="mb-5">
        <v-col cols="12" md="4">
          <v-card outlined>
            <v-img src="/static/project3.png" height="250" />
          </v-card>
        </v-col>

        <v-col class="px-0" cols="12" md="8">
          <v-card flat color="transparent">
            <v-card-title>Your future home</v-card-title>

            <v-card-text>
              <p>Protection from the elements: Many older homes in the Chicagoland area are lacking in proper insulation and exterior weather protection. For that reason, we will install code required items such as Ice and Water shield protection for roofs, and fanfold insulation and a moisture barrier beneath the siding. All our work is completed up to state and local building codes.</p>
              <p>Warranties- We offer a 5 year labor warranty on all our work. Roofing and siding products carry the manufacturers warranty as well.</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="py-5 px-3">
        <testimonial :testimonial="testimonial" />
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: "Services",
    meta: [
      {
        name: "description",
        content: "Customized vue-cli templates for Vue and Vuetify"
      }
    ]
  },

  components: {
    Heading: () => import("@/components/Heading"),
    Testimonial: () => import("@/components/Testimonial")
  },

  data: () => ({
    e6: 1,
    testimonial: {
      blurb:
        "With Eco General Construction managing all of our customer-facing services and ASCC, helping us monitor and understand building performance, Abocado is in great shape to create and release new products.",
      person: "Jay Oakrson",
      title: "CEO Abocado"
    }
  })
};
</script>
