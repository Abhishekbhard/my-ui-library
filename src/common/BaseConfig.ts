import { Story } from "storybook/internal/csf";
import { StoryBookArgumentConfigType } from "../theme/ThemeTypes";
import { COLOR_OPTIONS } from "./Constant";

export const STORYBOOK_ARGUMENT_CONFIG: StoryBookArgumentConfigType[] = [
  {
    componentName: "Button",
    arguments: {
      color: {
        table: {
          type: { summary: COLOR_OPTIONS },
          defaultValue: { summary: COLOR_OPTIONS[0] },
        },
        control: { type: "select", options: COLOR_OPTIONS },
      },
    },
  },
];
export interface ColorConfig {
  black: true;
  primary: false;
  secondary: false;
  error: false;
  warning: false;
  info: false;
}
