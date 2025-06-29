import { ColorConfig } from "../common/BaseConfig";
import type { BORDER_WIDTH_OPTIONS, COLOR_OPTIONS } from "../common/Constant";
export type BorderWidthOptionTypes = (typeof BORDER_WIDTH_OPTIONS)[number];
export type ColorOptionTypes = (typeof COLOR_OPTIONS)[number];

type StoryBooSummaryOptionType =
  | typeof BORDER_WIDTH_OPTIONS
  | typeof COLOR_OPTIONS;

export type StoryBookArgumentConfigType = {
  componentName: string;
  arguments: {
    boxShadow?: {
      control?: { type: string; options?: StoryBooSummaryOptionType };
      table?: {
        type: { summary: StoryBooSummaryOptionType };
        defaultValue: { summary: number };
      };
    };
    color?: {
      control?: { type: string; options?: StoryBooSummaryOptionType };
      table?: {
        type: { summary: StoryBooSummaryOptionType };
        defaultValue: { summary: string };
      };
    };
  };
};
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides extends ColorConfig {}
}
