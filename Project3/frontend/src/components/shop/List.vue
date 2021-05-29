<template>
  <div>
    <v-container>
      <v-row>
        <v-col calss="d-flex"
               cols="20"
               sm="9"></v-col>
        <v-col
            calss="d-flex"
            cols="4"
            sm="3"
        >
          <v-select
              :items="lists"
              v-model="selected"
              label="Solo field"
              dense
              solo
              return-object
              @change="postList()"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'ShopList',

  computed: {
    ...mapGetters(['lists']),
  },

  data : ()=> ({
    selected : null
  }),

  methods: {
    postList() {
      this.$http.post('/shop/list', {list: this.selected.value}).then((response) => {
        this.$emit('update', response.data.items)
      })
    },
  }
}

</script>
