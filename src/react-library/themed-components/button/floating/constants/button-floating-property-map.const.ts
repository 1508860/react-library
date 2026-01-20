import { ButtonContent } from "../../shared/enums/button-content.type";
import { ButtonShape } from "../../shared/enums/button-shape.type";
import { ButtonSize } from "../../shared/enums/button-size.type";
import type { IButtonFloatingPropertyMap } from "../interfaces/button-floating-property-map.interface";

/**
 * Constant values for button floating style sizes
 */
export const BUTTON_FLOATING_PROPERTY_MAP: IButtonFloatingPropertyMap = {
	size: {
		[ButtonSize.Small]: {
			content: {
				[ButtonContent.Icon]: {
					width: 56
				},
				[ButtonContent.IconLabel]: {
					paddingSide: 16
				},
				[ButtonContent.Label]: {
					paddingSide: 16
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
					width: 80
				},
				[ButtonContent.IconLabel]: {
					paddingSide: 26
				},
				[ButtonContent.Label]: {
					paddingSide: 26
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
					width: 96
				},
				[ButtonContent.IconLabel]: {
					paddingSide: 28
				},
				[ButtonContent.Label]: {
					paddingSide: 28
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
