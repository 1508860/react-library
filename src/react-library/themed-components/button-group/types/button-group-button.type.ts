import type { Attributes } from "react";

import type { IAction, IContent, IIsDisabled, IIsSelected, IOnClick } from "@react-library/common";

import type {
	ButtonClickContent,
	ButtonSelectionContent,
	ButtonSplitContent,
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
 * Describes base type configuration for a button group's button action
 */
type ButtonGroupButtonActionBase<TButtonGroupAction extends ButtonGroupAction> = (
	IAction<TButtonGroupAction>
);

/**
 * Describes click configuration for a button group's button
 */
export type ButtonGroupButtonClick = (
	IContent<ButtonClickContent> &
	ButtonGroupButtonBase
);

/**
 * Describes selection configuration for a button group's button
 */
export type ButtonGroupButtonSelection = (
	ButtonGroupButtonBase &
	IContent<ButtonSelectionContent> &
	IIsSelected
);

/**
 * Describes split configuration for a button group's button
 */
export type ButtonGroupButtonSplit = (
	ButtonGroupButtonBase &
	IContent<ButtonSplitContent> &
	ButtonSplitMenuElement
);

/**
 * Describes click configuration for a button group's button where multiple button actions can be in a group
 */
export type ButtonGroupButtonClickWithAction = (
	ButtonGroupButtonActionBase<typeof ButtonGroupAction.Click> &
	ButtonGroupButtonClick
);

/**
 * Describes split configuration for a button group's button where multiple button actions can be in a group
 */
export type ButtonGroupButtonSplitWithAction = (
	ButtonGroupButtonActionBase<typeof ButtonGroupAction.Split> &
	ButtonGroupButtonSplit
);
