import OccHeading from "./OccHeading.vue";

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
  setup() {
    return { args };
  },
  template: '<OccHeading v-bind="args">Heading</OccHeading>',
});

export const Default = Template.bind({});
Default.args = {
  content: "Heading",
  color: "black",
};
