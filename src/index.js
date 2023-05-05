import "./sass/styles.scss";
import { renderSlider } from "./scripts/renderSlider";
import { getUser } from "./scripts/getUser";

import { router } from "./router";
import { createApp } from "vue";
import  App  from "./App.vue";

const app = createApp(App);

app.use(router);
app.mount('#app');

// (async () => {
//   const data = await getUser(10);
//   // renderSlider(data);
// })();