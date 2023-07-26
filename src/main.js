import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/scss/_variables.scss";
import "./assets/scss/_global.scss";
import router from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");
