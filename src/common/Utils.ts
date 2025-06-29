import { STORYBOOK_ARGUMENT_CONFIG } from "./BaseConfig";

export const transformProps = <T extends Record<string, any>>(
  componentName: string,
  props: T
): T => {
  // Here you can add any transformation logic based on the component name
  // For now, we just return the props as is
  return props;
};

export const filteredStroryBookArguments = (componentName: string): object => {
  const filteredConfig = STORYBOOK_ARGUMENT_CONFIG.find(
    (config) => config.componentName === componentName
  );
  if (filteredConfig) {
    return filteredConfig.arguments;
  }
  return {};
};
