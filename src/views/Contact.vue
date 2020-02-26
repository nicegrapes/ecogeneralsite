<template>
  <section
    id="contact"
    class="py-5"
  >
    <heading>Contact Us</heading>

    <v-container>
      <v-row>
        <v-col
          xs12
          md6
        >
          <v-form>
            <v-container pa-0>
              <v-row>
                <v-col
                  cols="12"
                  class="mb-4 grey--text"
                >
                  Call or submit our online form to request an estimate or for general questions about U.S. Certified Contractors and our services. We look forward to serving you!
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="First Name*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="Last Name*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="Your Email*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Your Phone Number*"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Subject"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    label="Message"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-btn
                    :block="$vuetify.breakpoint.xsOnly"
                    color="primary"
                    depressed
                    x-large
                  >
                    Send Message
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-container
            fluid
            pa-0
          >
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="pa-0"
              >
                <v-card-title>Mailing Address</v-card-title>
                <v-card-text>
                  <div>1030 Summerfield Dr</div>
                  <div>Roselle IL 60172</div>
                  <div>United States</div>
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="6"
                class="pa-0"
              >
                <v-card-title>Contact Info</v-card-title>
                <v-card-text>
                  <div>630 529 1975</div>
                  <div>(fax) 630 529 1955</div>
                  <div>
                    <a href="#">contact@ecoshieldcontractors.com</a>
                  </div>
                </v-card-text>
              </v-col>

              <v-col cols="12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11866.759329605062!2d-88.10457180695734!3d41.96399676907357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fabf345fd9fb9%3A0x734482fc466ff50!2s1030%20Summerfield%20Dr%2C%20Roselle%2C%20IL%2060172%2C%20USA!5e0!3m2!1sen!2sar!4v1582680799511!5m2!1sen!2sar"
                  width="100%"
                  height="400"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen
                />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Contact',
      meta: [
        { name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify' }
      ]
    },

    components: {
      Heading: () => import('@/components/Heading')
    }
  }
</script>
