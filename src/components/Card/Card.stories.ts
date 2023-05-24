import type { Meta, StoryObj } from "@storybook/vue3";
import Card from "./Card.vue";

const meta = {
  title: "Home/Card",
  component: Card,
  argTypes: {
    population: {
      description: "placeholder for the input.",
      control: { type: "text" },
      table: {
        category: "content",
      },
    },
    capital: {
      description: "placeholder for the input.",
      control: { type: "text" },
      table: {
        category: "content",
      },
    },
    region: {
      description: "placeholder for the input.",
      control: { type: "text" },
      table: {
        category: "content",
      },
    },
    country: {
      description: "placeholder for the input.",
      control: { type: "text" },
      table: {
        category: "content",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args, { argTypes }) => ({
    components: { Card },
    props: Object.keys(argTypes),
    template: /* html */ `<Card v-bind="$props"/>`,
  }),
  args: {
    population: "",
    capital: "",
    region: "",
    country: {},
  },
};
