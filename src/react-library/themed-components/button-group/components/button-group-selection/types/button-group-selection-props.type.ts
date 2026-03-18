
import type { IButton, IButtonGroup } from "@react-library/common";

import type { ButtonGroupButtonSelection } from "../../../types/button-group-button.type";
import type { ButtonGroupProps } from "../../../types/button-group-props.type";

/**
 * Props for button group selection button
 */
export type ButtonGroupSelectionProps = (
	IButton<ButtonGroupButtonSelection> &
	IButtonGroup<ButtonGroupProps>
);
