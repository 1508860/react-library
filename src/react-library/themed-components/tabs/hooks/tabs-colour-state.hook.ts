import { useCallback } from "react";

import {
	useColourSchemeContext,
	useResolveState,
	type Callback
} from "@react-library/common";

import type { TabsColourState } from "../types/tabs-colour-state.type";

/**
 * Custom hook to resolve {@link TabsColourState} based on parameters
 */
export function useTabsColourState(): TabsColourState {

	const colourScheme = useColourSchemeContext();

	const resolveState = useCallback<Callback<TabsColourState>>(
		() => ({
			activeIndicator: colourScheme.primary.default.colour,
			background: colourScheme.surface.default.colour,
			isActive: {
				false: {
					hover: colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.08),
					icon: colourScheme.surface.variant.onColour,
					label: colourScheme.surface.variant.onColour
				},
				true: {
					hover: colourScheme.primary.default.colour.toColourWithStyleOpacity(0.08),
					icon: colourScheme.primary.default.colour,
					label: colourScheme.primary.default.colour
				}
			},
			pulse: colourScheme.primary.default.colour.toColourWithStyleOpacity(0.1)
		}),
		[colourScheme]
	);
	const state = useResolveState(resolveState);

	return state;
};
