import type { Meta, StoryObj } from "@storybook/vue3";
import Loader from "./Loader.vue";

const meta = {
  title: "Home/Loader",
  component: Loader,
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
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args, { argTypes }) => ({
    components: { Loader },
    props: Object.keys(argTypes),
    template: /* html */ `<Loader v-bind="$props"/>`,
  }),
  args: {
    theme: "light",
  },
};
