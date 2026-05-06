import { useCallback } from "react";

import { useColourSchemeContext, useResolveState } from "@react-library/common";

import type { MenuStyle } from "../enums/menu-style.type";
import { isMenuItemColourStateEqual } from "../functions/is-menu-item-colour-state-equal.function";
import { resolveMenuItemColourState } from "../functions/resolve-menu-item-colour-state.function";
import type { MenuItemColourState } from "../types/menu-item-colour-state.type";

/**
 * Derive the menu item colour state based on parameters
 * @param isDisabled
 * @param isSelected
 * @param style
 */
export function useMenuItemColourState(
	isDisabled: boolean | undefined,
	isSelected: boolean | undefined,
	style: MenuStyle
): MenuItemColourState {

	// Contexts
	const colourScheme = useColourSchemeContext();

	const resolveState = useCallback(
		() => resolveMenuItemColourState(!!isDisabled, !!isSelected, style, colourScheme),
		[isDisabled, isSelected, style, colourScheme]
	);

	const isStateEqual = useCallback(isMenuItemColourStateEqual, []);

	const state = useResolveState(resolveState, isStateEqual);

	return state;
}
