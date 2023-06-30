import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta = {
  title: "Home/Button",
  component: Button,
  argTypes: {
    theme: {
      description: "Theme for the application.",
      control: "radio",
      options: ["light", "dark"],
      table: {
        category: "Styles",
      },
    },
    text: {
      description: "Text will be show in the button.",
      control: { type: "text" },
      table: {
        category: "Content",
      },
    },
    padding: {
      description: "",
      control: { type: "text" },
      table: {
        category: "Content",
      },
    },
    size: {
      description: "",
      control: { type: "text" },
      table: {
        category: "Content",
      },
    },
    radius: {
      description: "",
      control: { type: "text" },
      table: {
        category: "Content",
      },
    },
    click: {
      description: "",
      action: "click",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args, { argTypes }) => ({
    components: { Button },
    props: Object.keys(argTypes),
    template: /* html */ `<Button v-bind="$props" @click="click">
      <div>
        <span>{{ text }}</span> 
      </div>
    </Button>`,
  }),
  args: {
    theme: "light",
    text: "France",
    padding: "0.2rem 1rem",
    size: "0.8rem",
    radius: "0.2rem",
  },
};
