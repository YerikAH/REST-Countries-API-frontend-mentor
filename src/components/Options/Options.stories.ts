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
    show: {
      description: "",
      control: { type: "boolean" },
      table: {
        category: "Styles",
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
    onSelectOption: {
      description: '',
      action: 'onSelectOption'
    }
  },
} satisfies Meta<typeof Options>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args, { argTypes }) => ({
    components: { Options },
    props: Object.keys(argTypes),
    template: /* html */ `<Options v-bind="$props" @on-select-option="onSelectOption" />`,
  }),
  args: {
    options: [
      {
        name: "America",
        word_clave: "America",
      },
      {
        name: "South America",
        word_clave: "South America",
      },
      {
        name: "Europe",
        word_clave: "Europe",
      },
      {
        name: "Asia",
        word_clave: "Asia",
      },
    ],
    theme: "light",
    show: true
  },
};
