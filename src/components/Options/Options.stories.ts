import type { Meta, StoryObj } from "@storybook/vue3";
import Options from "./Options.vue";

const meta = {
  title: "Home/Options",
  component: Options,
  argTypes: {
    options: {
      description: "Placeholder for the input.",
      control: { type: "object" },
      table: {
        category: "Content",
      },
    },
    theme: {
      description: "Theme for the application.",
      control: "radio",
      options: ["light", "dark"],
      table: {
        category: "Styles",
      },
    },
  },
} satisfies Meta<typeof Options>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args, { argTypes }) => ({
    components: { Options },
    props: Object.keys(argTypes),
    template: /* html */ `<Options v-bind="$props"/>`,
  }),
  args: {
    options: [
      {
        id: 0,
        name: "America",
        word_clave: "America",
      },
      {
        id: 0,
        name: "America",
        word_clave: "America",
      },
      {
        id: 0,
        name: "America",
        word_clave: "America",
      },
      {
        id: 0,
        name: "America",
        word_clave: "America",
      },
    ],
    theme: "light",
  },
};
