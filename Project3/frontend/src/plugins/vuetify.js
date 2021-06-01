import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#9E9E9E',
                secondary: '#FFC107',
                background: '#121212'
            },
        },
    },
});
