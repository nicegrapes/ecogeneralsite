<template>
  <div id="home">
    <get-a-quote />
    <v-container
      id="goals"
      class="py-5"
      tag="section"
    >
      <heading>Our Goals</heading>

      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          class="d-flex"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            outlined
            max-width="100%"
          >
            <v-img
              :src="feature.src"
              height="200"
            />
            <v-card-title
              class="align-start"
              v-text="feature.title"
            />
            <v-card-text
              class="pb-5 pt-0"
              v-text="feature.text"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      id="testimonials"
      class="py-5 pb-10"
      tag="section"
    >
      <heading>Testimonials</heading>

      <v-row>
        <v-col
          v-for="(testimonial, i) in testimonials"
          :key="i"
          cols="12"
          md="6"
        >
          <testimonial :testimonial="testimonial" />
        </v-col>
      </v-row>
    </v-container>

    <v-container
      id="highlighted-testimonial"
      class="pt-5 px-0"
      fluid
      tag="section"
    >
      <v-parallax
        contain
        src="/static/home-parallax.jpg"
        class="mb-n5"
      >
        <v-overlay
          absolute
          class="px-3"
          opacity=".5"
        >
          <testimonial
            dark
            :testimonial="highlightedTestimonial"
          />
        </v-overlay>
      </v-parallax>
    </v-container>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Home',
      meta: [
        { name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify' }
      ]
    },

    components: {
      GetAQuote: () => import('@/components/GetAQuote'),
      Heading: () => import('@/components/Heading'),
      Testimonial: () => import('@/components/Testimonial')
    },

    data: () => ({
      highlightedTestimonial: {
        blurb: 'We know that you have lots of options to choose from when it comes to roofing and exteriors. We can’t speak of how other companies operate, but one thing we can guarantee here at EGC is our 100% commitment to getting your job done right.',
        person: 'Luis Puente',
        title: 'Project Manager'
      },
      features: [
        {
          title: 'Getting it done right',
          text: 'At EGC we strive for excellence. We will aim to remodel your home to meet your standards and give it the curbside appeal it deserves.',
          src: '/static/feature1.png'
        },
        {
          title: 'Working to achieve your goals',
          text: 'Our commitment to excellence and continous improvement, to building lasting relationships with our clients, and to the team members who create your vision, are the guiding principles that assure successful outcomes on every project we build.',
          src: '/static/feature2.png'
        },
        {
          title: 'Professionalism',
          text: 'We understand construction may seem like a hassle, but our project managers will work with you to make the process a smooth and stress-free experience. With over 500 projects completed, our experience and know how will shine through, allowing you to sit back and enjoy the results!',
          src: '/static/feature3.png'
        }
      ],
      testimonials: [
        {
          blurb: 'I can’t recommend ECG highly enough. I’ve got to admit I was a bit skeptical at first, but after everything was explained to me clearly regarding the insurance process, I decided to go for it, and boy was I happy with the results! The crew did an amazing job and my house looks great!',
          person: 'Nancy Swanson',
          title: 'Jerry, East Hazel Crest'
        },
        {
          blurb: 'EGC did an amazing job replacing my siding and installing a new roof last summer.  My house was pretty shabby beforehand as it suffered from a hail and wind storm...it looked awful. These folks came out right away and handled all the paperwork with my insurance company...Manny was awesome. The work was performed quickly and professionally....and I’m in love with the new color of my house. Love driving up to it everyday!',
          person: 'Denys- Berwyn',
          title: 'General Manager, Springfield Tower'
        }
      ]
    })
  }
</script>
