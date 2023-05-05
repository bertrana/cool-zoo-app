import "./sass/styles.scss";
import { renderSlider } from "./scripts/renderSlider";
import { getUser } from "./scripts/getUser";

import { createApp } from "vue";
import  App  from "./App.vue";

createApp(App).mount('#app');

(async () => {
  const data = await getUser(10);
  renderSlider(data);
})();