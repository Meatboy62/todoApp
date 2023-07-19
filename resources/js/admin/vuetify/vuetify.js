import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
Vue.component('vue-icon',{
    template: `<img src="https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png"></img>`,
});
const opts = {
    icons: {
        iconsFont: 'mdi',
        values: {
            vueIcon: {
                component: 'vue-icon',
            }
        }
    }
}

export default new Vuetify(opts);