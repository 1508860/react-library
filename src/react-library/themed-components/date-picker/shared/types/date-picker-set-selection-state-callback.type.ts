import type { CallbackWithParameter } from "@react-library/common";

import type { DatePickerSelectionState } from "./date-picker-selection-state.type";

/**
 * Describes values for date picker component's selection state
 */
export type DatePickerSetSelectionStateCallback = CallbackWithParameter<DatePickerSelectionState, void>
