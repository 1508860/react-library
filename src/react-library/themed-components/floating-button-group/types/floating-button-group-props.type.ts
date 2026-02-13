import type { ReactNode } from "react";

import type {
	IButton,
	IChildren,
	IPositionStrategy,
	PositionStrategyInternalCorner
} from "@react-library/common";

import type { ButtonSizeFloating, ButtonSizeProps } from "../../button";

import type { FloatingButtonGroupButtonDefault, FloatingButtonGroupButtonMenu } from "./floating-button-group-button.type";

/**
 * Props for floating button group
 */
export type FloatingButtonGroupProps = (
	ButtonSizeProps<ButtonSizeFloating> &
	IButton<FloatingButtonGroupButtonDefault | FloatingButtonGroupButtonMenu> &
	IChildren<ReactNode> &
	IPositionStrategy<PositionStrategyInternalCorner>
);
