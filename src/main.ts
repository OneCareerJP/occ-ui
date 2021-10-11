import { App } from "vue";
import { OccHeading } from "@/components/atoms/OccHeading";

const components = [OccHeading];

const install = function (Vue: App) {
  components.forEach((component) => {
    Vue.component((component as any).this.$options.name, component);
  });
};

export { OccHeading };

export default {
  install,
};
