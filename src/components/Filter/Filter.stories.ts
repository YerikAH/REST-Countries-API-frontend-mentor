import type { Meta, StoryObj } from "@storybook/vue3";
import Filter from "./Filter.vue";

const meta = {
  title: "Home/Filter",
  component:Filter,
  argTypes: {
    theme: {
      description: "Theme for the application.",
      control: "radio",
      options: ["light", "dark"],
      table: {
        category: "Styles",
      },
    },
  },
} satisfies Meta<typeof Filter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args, { argTypes }) => ({
    components: { Filter},
    props: Object.keys(argTypes),
    template: /* html */ `<Filter v-bind="$props"/>`,
  }),
  args: {
    theme: "light",
  },
};
