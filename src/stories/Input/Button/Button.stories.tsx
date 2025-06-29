import type { Meta, StoryObj } from "@storybook/react-vite";
const fn = () => {}; // Replace with a mock function
import { Button as ComponentButton } from "./Button";
import { COMPONENT_NAME_ENUM } from "../../../common/Constant";
import { filteredStroryBookArguments } from "../../../common/Utils";

const meta = {
  title: "Example/Button",
  component: ComponentButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: filteredStroryBookArguments(COMPONENT_NAME_ENUM.BUTTON),
  args: {
    onClick: fn, // Use the mock function
    children: "Default Button", // Add default children
  },
} satisfies Meta<typeof ComponentButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "contained", // Use MUI's variant instead of primary
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
    children: "Secondary Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};
