import "./sass/styles.scss";
import { renderSlider } from "./scripts/renderSlider";
import { store } from "./scripts/store";
import { router } from "./router";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(store);
store.dispatch("LOAD_USER_DATA", 10);
app.use(router);
app.mount("#app");
