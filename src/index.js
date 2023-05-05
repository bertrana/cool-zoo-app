import "./sass/styles.scss";
import { renderSlider } from "./scripts/renderSlider";
import { getUser } from "./scripts/getUser";

(async () => {
  const data = await getUser(10);
  renderSlider(data);
})();