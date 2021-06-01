<template>
  <v-container
    id="subscribe"
    tag="section"
  >
    <base-card
      color="rgba(203, 170, 92, 0.51)"
      class="pa-3"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="5"
          >
            <base-subheading class="white--text"><h1>Contact</h1></base-subheading>

            <v-list class="transparent">
              <v-list-item>
                <v-list-item-avatar
                  color="secondary"
                >
                  <v-icon
                    class="elevation-4"
                    light
                  >
                    mdi-email-outline
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title class="white--text">EMAIL</v-list-item-title>

                <v-list-item-subtitle class="white--text">
                  Yunchoko@gmail.com
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="secondary">
                  <v-icon
                    class="elevation-4"
                    light
                  >
                    mdi-map-marker
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title class="white--text">ADDRESS</v-list-item-title>

                <v-list-item-subtitle class="white--text">
                  서울시 광운로 20길
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="secondary">
                  <v-icon
                    class="elevation-4"
                    light
                  >
                    mdi-phone
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title class="white--text">PHONE</v-list-item-title>

                <v-list-item-subtitle class="white--text">
                  010-1111-1111
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </base-card>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeSubscribe',
  }
</script>
