import type { Meta, StoryObj } from "@storybook/vue3";
import Image from "./Image.vue";

const meta = {
  title: "Home/Image",
  component: Image,
  argTypes: {
    theme: {
      description: "Theme for the application.",
      control: 'radio', options: ['light', 'dark'] ,
      table: {
        category: "Styles",
      },
    },
    src: {
      description: "",
      control: { type: "text" },
      table: {
        category: "Content",
      },
    },
    styles: {
      description: "",
      control: 'object',
      table: {
        category: "Styles",
      },
    }
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args, { argTypes }) => ({
    components: { Image },
    props: Object.keys(argTypes),
    template: /* html */ `<Image v-bind="$props"/>`,
  }),
  args: {
    theme: "light",
    src: "https://images6.alphacoders.com/568/568500.jpg",
    styles: {
      width: "550px",
      height: "550px"
    }
  },
};
