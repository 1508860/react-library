import type { Callback, IOnClick, ISelectionState } from "@react-library/common";

import type { DatePickerSelectionState } from "../../../types/date-picker-selection-state.type";

/**
 * Props for the date picker selection menu months resolver component
 */
export type DatePickerSelectionMenuMonthsResolverProps = (
	IOnClick<Callback<void>> &
	ISelectionState<DatePickerSelectionState>
);
