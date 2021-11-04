import Vue from "vue";
import OccHeading from "./OccHeading.vue";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);

export default {
  title: "Atom/OccHeading",
  component: OccHeading,
  argTypes: {
    level: {
      control: {
        type: "select",
        options: [1, 2, 3, 4, 5, 6],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["black"],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { OccHeading },
  template: `<OccHeading v-bind="$props">{{ content }}</OccHeading>`,
});

export const Default = Template.bind({});
Default.args = {
  content: "Heading",
  color: "black",
};
