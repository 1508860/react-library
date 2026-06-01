import { useCallback } from "react";

import {
	useColourSchemeContext,
	useResolveState,
	type Callback
} from "@react-library/common";

import { isDatePickerValueEqual } from "../../../functions/is-date-picker-value-equal.function";
import { useDatePickerValueContext } from "../../../hooks/date-picker-value-context.hook";
import { useDatePickerValueTodayContext } from "../../../hooks/date-picker-value-today-context.hook";
import type { DatePickerDateColourState } from "../../../types/date-picker-date-colour-state.type";
import type { DatePickerValue } from "../../../types/date-picker-props-value.type";

/**
 * Custom hook to resolve {@link DatePickerDateColourState}
 * @param monthItemDateValue
 * @param isDisabled
 */
export function useDatePickerMonthItemDateProviderColourState(monthItemDateValue: DatePickerValue, isDisabled: boolean): DatePickerDateColourState {

	// Contexts
	const colourScheme = useColourSchemeContext();

	// Local contexts
	const value = useDatePickerValueContext();
	const valueToday = useDatePickerValueTodayContext();

	const resolveState = useCallback<Callback<DatePickerDateColourState>>(
		() => {

			// Is disabled
			if (isDisabled) return {
				background: undefined,
				// Show today's date even if disabled
				borderColour: isDatePickerValueEqual(monthItemDateValue, valueToday) ? colourScheme.primary.default.colour: undefined,
				font: colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.38),
				hover: colourScheme.surface.default.onColour,
				pulse: colourScheme.surface.default.onColour
			};;

			// Is selected
			if (isDatePickerValueEqual(monthItemDateValue, value)) return {
				background: colourScheme.primary.default.colour,
				borderColour: colourScheme.primary.default.colour,
				font: colourScheme.primary.default.onColour,
				hover: colourScheme.primary.default.onColour.toColourWithStyleOpacity(0.08),
				pulse: colourScheme.primary.default.onColour.toColourWithStyleOpacity(0.1)
			};

			// Is today's date
			if (isDatePickerValueEqual(monthItemDateValue, valueToday)) return {
				background: undefined,
				borderColour: colourScheme.primary.default.colour,
				font: colourScheme.primary.default.colour,
				hover: colourScheme.primary.default.colour.toColourWithStyleOpacity(0.08),
				pulse: colourScheme.primary.default.colour.toColourWithStyleOpacity(0.1)
			};

			return {
				background: undefined,
				borderColour: undefined,
				font: colourScheme.surface.default.onColour,
				hover: colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.08),
				pulse: colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.1)
			};
		},
		[monthItemDateValue, isDisabled, colourScheme, value, valueToday]
	);
	const state = useResolveState(resolveState);

	return state;
};
