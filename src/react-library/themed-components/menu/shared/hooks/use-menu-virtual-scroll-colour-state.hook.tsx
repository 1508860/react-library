import { useCallback } from "react";

import {
	useColourSchemeContext,
	useResolveState,
	type Callback,
	type UseResolveStateEqualityCallback
} from "@react-library/common";

import { isScrollColourEqual, type ScrollColour } from "../../../shared";

import { MenuStyle } from "../enums/menu-style.type";

/**
 * Derive the menu virtual scroll colour state based on parameters
 * @param style
 */
export function useMenuVirtualScrollColourState(style: MenuStyle): ScrollColour {

	// Contexts
	const colourScheme = useColourSchemeContext();

	const resolveState = useCallback<Callback<ScrollColour>>(
		() => ({
			scrollbarColour: (
				style === MenuStyle.Vibrant ?
					colourScheme.tertiary.container.onColour :
					colourScheme.surface.default.onColour
			)
		}),
		[style, colourScheme]
	);

	const isStateEqual = useCallback<UseResolveStateEqualityCallback<ScrollColour>>(
		isScrollColourEqual,
		[]
	);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
}
