import type { IAction, IChildren, ISize, IStyle } from "@react-library/common";

import type {
	ButtonClickStyle,
	ButtonSelectionStyle,
	ButtonSize,
	ButtonSplitStyle,
	ButtonTextStyle
} from "../../button";

import type { ButtonGroupAction } from "../enums/button-group-action.type";

import type {
	ButtonGroupButtonClick,
	ButtonGroupButtonClickWithAction,
	ButtonGroupButtonSelection,
	ButtonGroupButtonSplit,
	ButtonGroupButtonSplitWithAction,
	ButtonGroupButtonText
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
	ISize<ButtonSize> &
	IStyle<ButtonClickStyle>
);

/**
 * Describes a button group action of split
 */
export type ButtonGroupActionClickOrSplit = (
	ButtonGroupActionBase<typeof ButtonGroupAction.ClickOrSplit> &
	IChildren<ButtonGroupButtonClickWithAction | ButtonGroupButtonSplitWithAction> &
	ISize<ButtonSize> &
	IStyle<ButtonClickStyle & ButtonSplitStyle>
);

/**
 * Describes a button group action of selection
 */
export type ButtonGroupActionSelection = (
	ButtonGroupActionBase<typeof ButtonGroupAction.Selection> &
	IChildren<ButtonGroupButtonSelection> &
	ISize<ButtonSize> &
	IStyle<ButtonSelectionStyle>
);

/**
 * Describes a button group action of split
 */
export type ButtonGroupActionSplit = (
	ButtonGroupActionBase<typeof ButtonGroupAction.Split> &
	IChildren<ButtonGroupButtonSplit> &
	ISize<ButtonSize> &
	IStyle<ButtonSplitStyle>
);

/**
 * Describes a button group action of text
 */
export type ButtonGroupActionText = (
	ButtonGroupActionBase<typeof ButtonGroupAction.Text> &
	IChildren<ButtonGroupButtonText> &
	ISize<ButtonSize> &
	IStyle<ButtonTextStyle>
);

/**
 * Describes all types of a button group action
 */
export type ButtonGroupActionAll = (
	ButtonGroupActionClick |
	ButtonGroupActionClickOrSplit |
	ButtonGroupActionSelection |
	ButtonGroupActionSplit |
	ButtonGroupActionText
);
