import { useCallback } from "react";

import {
	useColourSchemeContext,
	useResolveState,
	type Callback
} from "@react-library/common";

import type { DatePickerColourState } from "../../../types/date-picker-colour-state.type";

/**
 * Custom hook to resolve {@link DatePickerColourState}
 */
export function useDatePickerProviderColourState(): DatePickerColourState {

	const colourScheme = useColourSchemeContext();

	const resolveState = useCallback<Callback<DatePickerColourState>>(
		() => ({
			background: colourScheme.surface.container.high,
			month: {
				font: colourScheme.surface.variant.onColour
			},
			selection: {
				disabled: {
					false: {
						colour: colourScheme.surface.variant.onColour
					},
					true: {
						colour: colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.38)
					}
				},
				icon: colourScheme.surface.variant.onColour
			},
			selectionMenu: {
				background: colourScheme.surface.container.high,
				font: colourScheme.surface.default.onColour,
				hover: colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.08),
				icon: colourScheme.surface.default.onColour
			},
			title: {
				font: colourScheme.surface.default.onColour
			},
			weekday: {
				font: colourScheme.surface.default.onColour
			}
		}),
		[colourScheme]
	);
	const state = useResolveState(resolveState);

	return state;
};
