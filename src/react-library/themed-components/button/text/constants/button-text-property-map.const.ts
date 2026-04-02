import { ButtonContent } from "../../shared/enums/button-content.type";
import { ButtonSize } from "../../shared/enums/button-size.type";
import { ButtonStyle } from "../../shared/enums/button-style.type";
import type { ButtonTextPropertyMap } from "../types/button-text-property-map.type";

/**
 * Constant values for button text style sizes
 */
export const BUTTON_TEXT_PROPERTY_MAP: ButtonTextPropertyMap = {
	size: {
		[ButtonSize.ExtraSmall]: {
			borderRadius: (32 / 2),
			content: {
				[ButtonContent.Icon]: {},
				[ButtonContent.IconLabel]: {
					paddingHorizontal: 12
				},
				[ButtonContent.Label]: {
					paddingHorizontal: 12
				}
			},
			fontSize: 14,
			gap: 4,
			height: 32,
			iconSize: 20
		},
		[ButtonSize.Small]: {
			borderRadius: (40 / 2),
			content: {
				[ButtonContent.Icon]: {},
				[ButtonContent.IconLabel]: {
					paddingHorizontal: 16
				},
				[ButtonContent.Label]: {
					paddingHorizontal: 16
				}
			},
			fontSize: 14,
			gap: 8,
			height: 40,
			iconSize: 24
		},
		[ButtonSize.Medium]: {
			borderRadius: (56 / 2),
			content: {
				[ButtonContent.Icon]: {},
				[ButtonContent.IconLabel]: {
					paddingHorizontal: 24
				},
				[ButtonContent.Label]: {
					paddingHorizontal: 24
				}
			},
			fontSize: 16,
			gap: 8,
			height: 56,
			iconSize: 24
		},
		[ButtonSize.Large]: {
			borderRadius: (96 / 2),
			content: {
				[ButtonContent.Icon]: {},
				[ButtonContent.IconLabel]: {
					paddingHorizontal: 48
				},
				[ButtonContent.Label]: {
					paddingHorizontal: 48
				}
			},
			fontSize: 24,
			gap: 12,
			height: 96,
			iconSize: 32
		},
		[ButtonSize.ExtraLarge]: {
			borderRadius: (136 / 2),
			content: {
				[ButtonContent.Icon]: {},
				[ButtonContent.IconLabel]: {
					paddingHorizontal: 64
				},
				[ButtonContent.Label]: {
					paddingHorizontal: 64
				}
			},
			fontSize: 32,
			gap: 16,
			height: 136,
			iconSize: 40
		}
	},
	style: {
		[ButtonStyle.Text]: {
			borderStyle: undefined,
			borderWidth: undefined
		}
	}
}
