import type { IAction, IChildren, IStyle } from "@react-library/common";

import type {
	ButtonClickStyle,
	ButtonSelectionStyle,
	ButtonSplitStyle
} from "../../button";

import type { ButtonGroupAction } from "../enums/button-group-action.type";

import type {
	ButtonGroupButtonClick,
	ButtonGroupButtonClickWithAction,
	ButtonGroupButtonSelection,
	ButtonGroupButtonSplit,
	ButtonGroupButtonSplitWithAction
} from "./button-group-button.type";

/**
 * Describes base type for a button group action
 */
type ButtonGroupActionBase<TButtonGroupAction extends ButtonGroupAction> = (
	IAction<TButtonGroupAction>
);

/**
 * Describes a button group action of click
 */
export type ButtonGroupActionClick = (
	ButtonGroupActionBase<typeof ButtonGroupAction.Click> &
	IChildren<ButtonGroupButtonClick> &
	IStyle<ButtonClickStyle>
);

/**
 * Describes a button group action of split
 */
export type ButtonGroupActionClickOrSplit = (
	ButtonGroupActionBase<typeof ButtonGroupAction.ClickOrSplit> &
	IChildren<ButtonGroupButtonClickWithAction | ButtonGroupButtonSplitWithAction> &
	IStyle<ButtonClickStyle & ButtonSplitStyle>
);

/**
 * Describes a button group action of selection
 */
export type ButtonGroupActionSelection = (
	ButtonGroupActionBase<typeof ButtonGroupAction.Selection> &
	IChildren<ButtonGroupButtonSelection> &
	IStyle<ButtonSelectionStyle>
);

/**
 * Describes a button group action of split
 */
export type ButtonGroupActionSplit = (
	ButtonGroupActionBase<typeof ButtonGroupAction.Split> &
	IChildren<ButtonGroupButtonSplit> &
	IStyle<ButtonSplitStyle>
);

/**
 * Describes all types of a button group action
 */
export type ButtonGroupActionAll = (
	ButtonGroupActionClick |
	ButtonGroupActionClickOrSplit |
	ButtonGroupActionSelection |
	ButtonGroupActionSplit
);
