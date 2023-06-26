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
      control: 'radio', options: ['light', 'dark'] ,
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
    onChangeTheme:{
      description: '',
      action: 'onChangeTheme'
    }
  },
} satisfies Meta<typeof Navigation>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args, { argTypes }) => ({
    components: { Navigation },
    props: Object.keys(argTypes),
    template: /* html */ `<Navigation v-bind="$props" @on-change-theme="onChangeTheme"/>`,
  }),

  args: {
    title: "Where in the world?",
    button: "Dark theme",
    theme: "light",
    to: "/",
  },
};
