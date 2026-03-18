import type { PropsWithChildren } from "react";

import type { IButtonGroup } from "@react-library/common";

import type { ButtonGroupProps } from "../../../types/button-group-props.type";

/**
 * Props for button group container
 */
export type ButtonGroupContainerProps = (
	IButtonGroup<ButtonGroupProps> &
	PropsWithChildren
);
