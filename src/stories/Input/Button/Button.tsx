import { ButtonProps as MuiButtonProps } from "@mui/material";

import { Button as MuiButton } from "@mui/material";
import React, { JSX } from "react";
import { COMPONENT_NAME_ENUM } from "../../../common/Constant";
import { transformProps } from "../../../common/Utils";

export interface ButtonProps extends MuiButtonProps {}
export const Button = (props: ButtonProps): JSX.Element => {
  const transfornedProps: ButtonProps = transformProps<ButtonProps>(
    COMPONENT_NAME_ENUM.BUTTON,
    props
    // Add any transformation logic here if needed
  );
  return <MuiButton data-testid="button" {...transfornedProps}></MuiButton>;
};
