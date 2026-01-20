import type { IAction, IChildren } from "@react-library/common";

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
	IChildren<ButtonGroupButtonClick>
);

/**
 * Describes a button group action of split
 */
export type ButtonGroupActionClickOrSplit = (
	ButtonGroupActionBase<typeof ButtonGroupAction.ClickOrSplit> &
	IChildren<ButtonGroupButtonClickWithAction | ButtonGroupButtonSplitWithAction>
);

/**
 * Describes a button group action of selection
 */
export type ButtonGroupActionSelection = (
	ButtonGroupActionBase<typeof ButtonGroupAction.Selection> &
	IChildren<ButtonGroupButtonSelection>
);

/**
 * Describes a button group action of split
 */
export type ButtonGroupActionSplit = (
	ButtonGroupActionBase<typeof ButtonGroupAction.Split> &
	IChildren<ButtonGroupButtonSplit>
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
