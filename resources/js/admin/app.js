import("../bootstrap");
import Vue from "vue";
import router from "./router/router";
import vuetify from "./vuetify/vuetify";
import App from "./pages/App.vue";



export const  bus = new Vue();

const admin = new Vue({
    el: "#admin",
    vuetify,
    router,
    render: h => h(App),
});