import type { Meta, StoryObj } from "@storybook/vue3";
import Input from "./Input.vue";

const meta = {
  title: "Home/Input",
  component: Input,
  argTypes: {
    placeholder: {
      description: "Placeholder for the input.",
      control: { type: "text" },
      table: {
        category: "Content",
      },
    },
    theme: {
      description: "Theme for the application.",
      control: 'radio', options: ['light', 'dark'] ,
      table: {
        category: "Styles",
      },
    },
    onInput:{
      description: '',
      action: 'onInput'
    }
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args, { argTypes }) => ({
    components: { Input },
    props: Object.keys(argTypes),
    template: /* html */ `<Input v-bind="$props" @on-input="onInput"/>`,
  }),
  args: {
    placeholder: "Search the country...",
    theme: "light"
  },
};
