<template>
  <div>
    <v-container>
      <v-row>
        <v-col
            calss="d-flex"
            sm="3"
        >
          <span><h3>Shop/{{value}}</h3></span>
        </v-col>
        <v-col calss="d-flex"
               sm="6"></v-col>
        <v-col
            calss="d-flex"
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

  props: {
    value: {
      type: String,
      default: () => ({}),
    },
  },

  data : ()=> ({
    selected : null
  }),

  methods: {
    postList() {
      this.$http.post('/shop/list', {list: this.selected.value.toString()}).then((response) => {
        this.$emit('update', response.data.items)
      })
    },
  }
}

</script>
