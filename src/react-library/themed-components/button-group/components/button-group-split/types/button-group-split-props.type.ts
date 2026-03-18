
import type { IButton, IButtonGroup } from "@react-library/common";

import type { ButtonGroupButtonSplit } from "../../../types/button-group-button.type";
import type { ButtonGroupProps } from "../../../types/button-group-props.type";

/**
 * Props for button group split button
 */
export type ButtonGroupSplitProps = (
	IButton<ButtonGroupButtonSplit> &
	IButtonGroup<ButtonGroupProps>
);
