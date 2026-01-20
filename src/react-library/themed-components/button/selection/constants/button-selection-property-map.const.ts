import { ButtonContent } from "../../shared/enums/button-content.type";
import { ButtonIconWidth } from "../../shared/enums/button-icon-width.type";
import { ButtonShape } from "../../shared/enums/button-shape.type";
import { ButtonSize } from "../../shared/enums/button-size.type";
import { ButtonStyle } from "../../shared/enums/button-style.type";
import type { IButtonSelectionPropertyMap } from "../interfaces/button-selection-property-map.interface";

/**
 * Constant values for button selection style sizes
 */
export const BUTTON_SELECTION_PROPERTY_MAP: IButtonSelectionPropertyMap = {
	size: {
		[ButtonSize.ExtraSmall]: {
			content: {
				[ButtonContent.Icon]: {
					[ButtonIconWidth.Default]: {
						width: 32
					},
					[ButtonIconWidth.Narrow]: {
						width: 28
					},
					[ButtonIconWidth.Wide]: {
						width: 40
					}
				},
				[ButtonContent.IconLabel]: {
					paddingSide: 12
				},
				[ButtonContent.Label]: {
					paddingSide: 12
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
					[ButtonIconWidth.Default]: {
						width: 40
					},
					[ButtonIconWidth.Narrow]: {
						width: 32
					},
					[ButtonIconWidth.Wide]: {
						width: 52
					}
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
					[ButtonIconWidth.Default]: {
						width: 56
					},
					[ButtonIconWidth.Narrow]: {
						width: 48
					},
					[ButtonIconWidth.Wide]: {
						width: 72
					}
				},
				[ButtonContent.IconLabel]: {
					paddingSide: 24
				},
				[ButtonContent.Label]: {
					paddingSide: 24
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
					[ButtonIconWidth.Default]: {
						width: 96
					},
					[ButtonIconWidth.Narrow]: {
						width: 64
					},
					[ButtonIconWidth.Wide]: {
						width: 128
					}
				},
				[ButtonContent.IconLabel]: {
					paddingSide: 48
				},
				[ButtonContent.Label]: {
					paddingSide: 48
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
					[ButtonIconWidth.Default]: {
						width: 136
					},
					[ButtonIconWidth.Narrow]: {
						width: 104
					},
					[ButtonIconWidth.Wide]: {
						width: 184
					}
				},
				[ButtonContent.IconLabel]: {
					paddingSide: 64
				},
				[ButtonContent.Label]: {
					paddingSide: 64
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
	},
	transition: {
		borderRadius: {
			durationMs: 200
		}
	}
}
