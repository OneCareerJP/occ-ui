import { App } from "vue";
import { OccHeading } from "@/components/atoms/OccHeading";

const components = [OccHeading];

const install = function (Vue: App): void {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export { OccHeading };

export default {
  install,
};
