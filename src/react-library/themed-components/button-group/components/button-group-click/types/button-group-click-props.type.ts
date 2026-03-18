
import type { IButton, IButtonGroup } from "@react-library/common";

import type { ButtonGroupButtonClick } from "../../../types/button-group-button.type";
import type { ButtonGroupProps } from "../../../types/button-group-props.type";

/**
 * Props for button group click button
 */
export type ButtonGroupClickProps = (
	IButton<ButtonGroupButtonClick> &
	IButtonGroup<ButtonGroupProps>
);
