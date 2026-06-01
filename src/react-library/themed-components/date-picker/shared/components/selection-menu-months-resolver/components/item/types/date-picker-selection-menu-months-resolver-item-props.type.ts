import type {
	Callback,
	DateMonth,
	IIsActive,
	IMonth,
	IOnClick
} from "@react-library/common";

/**
 * Props for the date picker selection menu months resolver item component
 */
export type DatePickerSelectionMenuMonthsResolverItemProps = (
	IIsActive<boolean> &
	IMonth<DateMonth> &
	IOnClick<Callback<void>>
);
