import type { Attributes } from "react";

import type { IAction, IIsDisabled, IIsSelected, IOnClick } from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type {
	ButtonContentIcon,
	ButtonContentIconLabel,
	ButtonContentIconWithWidth,
	ButtonContentLabel,
	ButtonSplitMenuElement
} from "../../button";
import type { ButtonGroupAction } from "../enums/button-group-action.type";

/**
 * Describes base type configuration for a button group's button
 */
type ButtonGroupButtonBase = (
	Attributes &
	Partial<IIsDisabled> &
	IOnClick<HTMLDivElement>
);

/**
 * Describes click configuration for a button group's button
 */
export type ButtonGroupButtonClick = (
	(
		ButtonContentIconWithWidth<MaterialIconName, MaterialIconStyle> |
		ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
		ButtonContentLabel
	) &
	ButtonGroupButtonBase
);

/**
 * Describes click configuration for a button group's button where multiple button actions can be in a group
 */
export type ButtonGroupButtonClickWithAction = (IAction<typeof ButtonGroupAction.Click> & ButtonGroupButtonClick);

/**
 * Describes selection configuration for a button group's button
 */
export type ButtonGroupButtonSelection = (
	(
		ButtonContentIconWithWidth<MaterialIconName, MaterialIconStyle> |
		ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
		ButtonContentLabel
	) &
	ButtonGroupButtonBase &
	IIsSelected
);

/**
 * Describes split configuration for a button group's button
 */
export type ButtonGroupButtonSplit = (
	(
		ButtonContentIcon<MaterialIconName, MaterialIconStyle> |
		ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
		ButtonContentLabel
	) &
	ButtonGroupButtonBase &
	ButtonSplitMenuElement
);

/**
 * Describes split configuration for a button group's button where multiple button actions can be in a group
 */
export type ButtonGroupButtonSplitWithAction = (IAction<typeof ButtonGroupAction.Split> & ButtonGroupButtonSplit);
