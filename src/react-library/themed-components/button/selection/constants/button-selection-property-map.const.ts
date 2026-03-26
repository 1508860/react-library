import { ButtonContent } from "../../shared/enums/button-content.type";
import { ButtonIconWidth } from "../../shared/enums/button-icon-width.type";
import { ButtonShape } from "../../shared/enums/button-shape.type";
import { ButtonSize } from "../../shared/enums/button-size.type";
import { ButtonStyle } from "../../shared/enums/button-style.type";
import type { ButtonSelectionPropertyMap } from "../types/button-selection-property-map.type";

/**
 * Constant values for button selection style sizes
 */
export const BUTTON_SELECTION_PROPERTY_MAP: ButtonSelectionPropertyMap = {
	size: {
		[ButtonSize.ExtraSmall]: {
			content: {
				[ButtonContent.Icon]: {
					iconWidth: {
						[ButtonIconWidth.Default]: 32,
						[ButtonIconWidth.Narrow]: 28,
						[ButtonIconWidth.Wide]: 40
					}
				},
				[ButtonContent.IconLabel]: {
					iconWidth: {},
					paddingHorizontal: 12
				},
				[ButtonContent.Label]: {
					iconWidth: {},
					paddingHorizontal: 12
				}
			},
			fontSize: 14,
			gap: 4,
			height: 32,
			iconSize: 20,
			shape: {
				[ButtonShape.Round]: {
					borderRadius: (32 / 2)
				},
				[ButtonShape.Soft]: {
					borderRadius: 8
				},
			}
		},
		[ButtonSize.Small]: {
			content: {
				[ButtonContent.Icon]: {
					iconWidth: {
						[ButtonIconWidth.Default]: 40,
						[ButtonIconWidth.Narrow]: 32,
						[ButtonIconWidth.Wide]: 52
					}
				},
				[ButtonContent.IconLabel]: {
					iconWidth: {},
					paddingHorizontal: 16
				},
				[ButtonContent.Label]: {
					iconWidth: {},
					paddingHorizontal: 16
				}
			},
			fontSize: 14,
			gap: 8,
			height: 40,
			iconSize: 24,
			shape: {
				[ButtonShape.Round]: {
					borderRadius: (40 / 2)
				},
				[ButtonShape.Soft]: {
					borderRadius: 8
				},
			}
		},
		[ButtonSize.Medium]: {
			content: {
				[ButtonContent.Icon]: {
					iconWidth: {
						[ButtonIconWidth.Default]: 56,
						[ButtonIconWidth.Narrow]: 48,
						[ButtonIconWidth.Wide]: 72
					}
				},
				[ButtonContent.IconLabel]: {
					iconWidth: {},
					paddingHorizontal: 24
				},
				[ButtonContent.Label]: {
					iconWidth: {},
					paddingHorizontal: 24
				}
			},
			fontSize: 16,
			gap: 8,
			height: 56,
			iconSize: 24,
			shape: {
				[ButtonShape.Round]: {
					borderRadius: (56 / 2)
				},
				[ButtonShape.Soft]: {
					borderRadius: 12
				},
			}
		},
		[ButtonSize.Large]: {
			content: {
				[ButtonContent.Icon]: {
					iconWidth: {
						[ButtonIconWidth.Default]: 96,
						[ButtonIconWidth.Narrow]: 64,
						[ButtonIconWidth.Wide]: 128
					}
				},
				[ButtonContent.IconLabel]: {
					iconWidth: {},
					paddingHorizontal: 48
				},
				[ButtonContent.Label]: {
					iconWidth: {},
					paddingHorizontal: 48
				}
			},
			fontSize: 24,
			gap: 12,
			height: 96,
			iconSize: 32,
			shape: {
				[ButtonShape.Round]: {
					borderRadius: (96 / 2)
				},
				[ButtonShape.Soft]: {
					borderRadius: 16
				},
			}
		},
		[ButtonSize.ExtraLarge]: {
			content: {
				[ButtonContent.Icon]: {
					iconWidth: {
						[ButtonIconWidth.Default]: 136,
						[ButtonIconWidth.Narrow]: 104,
						[ButtonIconWidth.Wide]: 184
					}
				},
				[ButtonContent.IconLabel]: {
					iconWidth: {},
					paddingHorizontal: 64
				},
				[ButtonContent.Label]: {
					iconWidth: {},
					paddingHorizontal: 64
				}
			},
			fontSize: 32,
			gap: 16,
			height: 136,
			iconSize: 40,
			shape: {
				[ButtonShape.Round]: {
					borderRadius: (136 / 2)
				},
				[ButtonShape.Soft]: {
					borderRadius: 16
				},
			}
		}
	},
	style: {
		[ButtonStyle.Elevated]: {
			borderStyle: undefined,
			borderWidth: undefined
		},
		[ButtonStyle.Filled]: {
			borderStyle: undefined,
			borderWidth: undefined
		},
		[ButtonStyle.Outline]: {
			borderStyle: "solid",
			borderWidth: 1
		}
	}
}
