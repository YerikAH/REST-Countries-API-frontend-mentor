import type { Meta, StoryObj } from "@storybook/vue3";

import Navigation from "./Navigation.vue";

const meta = {
  title: "Home/Navigation",
  component: Navigation,
  argTypes: {
    title: {
      description: "Title for the navigation.",
      control: { type: "text" },
      table: {
        category: "Content",
      },
    },

    button: {
      description: "Button for change theme.",
      control: { type: "text" },
      table: {
        category: "Content",
      },
    },
    theme: {
      description: "Theme for the application.",
      control: { type: "text" },
      table: {
        category: "Styles",
      },
    },
    to: {
      description: "Route for navigation title.",
      control: { type: "text" },
      table: {
        category: "Content",
      },
    },
  },
} satisfies Meta<typeof Navigation>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args, { argTypes }) => ({
    components: { Navigation },
    props: Object.keys(argTypes),
    template: /* html */ `<Navigation v-bind="$props"/>`,
  }),

  args: {
    title: "Where in the world?",
    button: "Dark theme",
    theme: "light",
    to: "/",
  },
};
