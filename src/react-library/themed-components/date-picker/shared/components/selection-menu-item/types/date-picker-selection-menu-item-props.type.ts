import type { Callback, IIsActive, ILabel, IOnClick } from "@react-library/common";

/**
 * Date picker selection menu item props
 */
export type DatePickerSelectionMenuItemProps = (
	IIsActive<boolean> &
	ILabel<number | string> &
	IOnClick<Callback<void>>
);
