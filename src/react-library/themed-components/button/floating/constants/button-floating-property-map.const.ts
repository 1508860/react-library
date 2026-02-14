import { ButtonContent } from "../../shared/enums/button-content.type";
import { ButtonShape } from "../../shared/enums/button-shape.type";
import { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonFloatingPropertyMap } from "../types/button-floating-property-map.type";

/**
 * Constant values for button floating style sizes
 */
export const BUTTON_FLOATING_PROPERTY_MAP: ButtonFloatingPropertyMap = {
	size: {
		[ButtonSize.Small]: {
			content: {
				[ButtonContent.Icon]: {
					iconWidth: 56
				},
				[ButtonContent.IconLabel]: {
					paddingHorizontal: 16
				},
				[ButtonContent.Label]: {
					paddingHorizontal: 16
				}
			},
			fontSize: 14,
			gap: 8,
			height: 56,
			iconSize: 24,
			shape: {
				[ButtonShape.Round]: {
					borderRadius: (56 / 2)
				},
				[ButtonShape.Soft]: {
					borderRadius: 16
				},
			}
		},
		[ButtonSize.Medium]: {
			content: {
				[ButtonContent.Icon]: {
					iconWidth: 80
				},
				[ButtonContent.IconLabel]: {
					paddingHorizontal: 26
				},
				[ButtonContent.Label]: {
					paddingHorizontal: 26
				}
			},
			fontSize: 16,
			gap: 12,
			height: 80,
			iconSize: 28,
			shape: {
				[ButtonShape.Round]: {
					borderRadius: (80 / 2)
				},
				[ButtonShape.Soft]: {
					borderRadius: 20
				},
			}
		},
		[ButtonSize.Large]: {
			content: {
				[ButtonContent.Icon]: {
					iconWidth: 96
				},
				[ButtonContent.IconLabel]: {
					paddingHorizontal: 28
				},
				[ButtonContent.Label]: {
					paddingHorizontal: 28
				}
			},
			fontSize: 24,
			gap: 16,
			height: 96,
			iconSize: 36,
			shape: {
				[ButtonShape.Round]: {
					borderRadius: (96 / 2)
				},
				[ButtonShape.Soft]: {
					borderRadius: 28
				},
			}
		}
	}
}
