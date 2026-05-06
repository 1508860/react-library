import { type ColourScheme } from "@react-library/common";

import { MenuStyle } from "../enums/menu-style.type";
import type { MenuItemColourState } from "../types/menu-item-colour-state.type";

/**
 * Resolve {@link MenuItemColourState} for the menu item component
 * @param isDisabled
 * @param isSelected
 * @param style
 * @param colourScheme
 */
export function resolveMenuItemColourState(
	isDisabled: boolean,
	isSelected: boolean,
	style: MenuStyle,
	colourScheme: ColourScheme,
): MenuItemColourState {

	if (style === MenuStyle.Vibrant) {
		if (isSelected) {
			if (isDisabled) {
				const disabledColour = colourScheme.tertiary.default.onColour.toColourWithStyleOpacity(0.38);
				return {
					background: colourScheme.tertiary.default.colour.toColourWithStyleOpacity(0.38),
					hover: disabledColour,
					icon: disabledColour,
					pulse: disabledColour,
					supportingText: disabledColour,
					text: disabledColour,
					title: disabledColour
				};
			}

			const layerColour = colourScheme.tertiary.default.onColour;
			return {
				background: colourScheme.tertiary.default.colour,
				hover: layerColour.toColourWithStyleOpacity(0.08),
				icon: colourScheme.tertiary.default.onColour,
				pulse: layerColour.toColourWithStyleOpacity(0.1),
				supportingText: colourScheme.tertiary.default.onColour,
				text: colourScheme.tertiary.default.onColour,
				title: colourScheme.tertiary.default.onColour
			};
		}

		if (isDisabled) {
			const disabledColour = colourScheme.tertiary.container.onColour.toColourWithStyleOpacity(0.38);
			return {
				background: disabledColour,
				hover: disabledColour,
				icon: disabledColour,
				pulse: disabledColour,
				supportingText: disabledColour,
				text: disabledColour,
				title: disabledColour
			};
		}

		const layerColour = colourScheme.tertiary.default.colour;
		return {
			background: undefined,
			hover: layerColour.toColourWithStyleOpacity(0.08),
			icon: colourScheme.tertiary.container.onColour,
			pulse: layerColour.toColourWithStyleOpacity(0.1),
			supportingText: colourScheme.tertiary.container.onColour,
			text: colourScheme.tertiary.container.onColour,
			title: colourScheme.tertiary.container.onColour
		};
	}

	if (isSelected) {
		if (isDisabled) {
			const disabledColour = colourScheme.tertiary.container.onColour.toColourWithStyleOpacity(0.38);
			return {
				background: colourScheme.tertiary.container.colour.toColourWithStyleOpacity(0.38),
				hover: disabledColour,
				icon: disabledColour,
				pulse: disabledColour,
				supportingText: disabledColour,
				text: disabledColour,
				title: disabledColour
			};
		}

		const layerColour = colourScheme.tertiary.container.onColour;
		return {
			background: colourScheme.tertiary.container.colour,
			hover: layerColour.toColourWithStyleOpacity(0.08),
			icon: colourScheme.tertiary.container.onColour,
			pulse: layerColour.toColourWithStyleOpacity(0.1),
			supportingText: colourScheme.tertiary.container.onColour,
			text: colourScheme.tertiary.container.onColour,
			title: colourScheme.tertiary.container.onColour
		};
	}

	if (isDisabled) {
		const disabledColour = colourScheme.surface.default.onColour.toColourWithStyleOpacity(0.38);
		return {
			background: disabledColour,
			hover: disabledColour,
			icon: disabledColour,
			pulse: disabledColour,
			supportingText: disabledColour,
			text: disabledColour,
			title: disabledColour
		};
	}

	const layerColour = colourScheme.surface.default.onColour;
	return {
		background: undefined,
		hover: layerColour.toColourWithStyleOpacity(0.08),
		icon: colourScheme.surface.variant.onColour,
		pulse: layerColour.toColourWithStyleOpacity(0.1),
		supportingText: colourScheme.surface.variant.onColour,
		text: colourScheme.surface.default.onColour,
		title: colourScheme.surface.default.onColour
	};
}
