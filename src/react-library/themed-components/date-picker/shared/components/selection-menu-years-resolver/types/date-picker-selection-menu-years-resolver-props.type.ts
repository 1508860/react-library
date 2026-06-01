import type { Callback, IOnClick, ISelectionState } from "@react-library/common";

import type { DatePickerSelectionState } from "../../../types/date-picker-selection-state.type";

/**
 * Props for the date picker selection menu years resolver component
 */
export type DatePickerSelectionMenuYearsResolverProps = (
	IOnClick<Callback<void>> &
	ISelectionState<DatePickerSelectionState>
);
