import Vue from "vue";
import { VueConstructor } from "vue";
import { OccHeading } from "@/components/atoms/OccHeading";

Vue.config.productionTip = false;

const components = [OccHeading];

const install = function (Vue: VueConstructor) {
  components.forEach((component) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Vue.component((component as any).options.name, component);
  });
};

export { OccHeading };

export default {
  install,
};
