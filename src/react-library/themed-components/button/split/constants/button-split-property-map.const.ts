import { ButtonContent } from "../../shared/enums/button-content.type";
import { ButtonSize } from "../../shared/enums/button-size.type";
import { ButtonStyle } from "../../shared/enums/button-style.type";
import type { ButtonSplitPropertyMap } from "../types/button-split-property-map.type";

/**
 * Constant values for button split style sizes
 */
export const BUTTON_SPLIT_PROPERTY_MAP: ButtonSplitPropertyMap = {
	gap: 2,
	size: {
		[ButtonSize.ExtraSmall]: {
			button: {
				borderRadius: {
					outside: (32 / 2),
					inside: 4
				},
				content: {
					[ButtonContent.Icon]: {
						width: 32
					},
					[ButtonContent.IconLabel]: {
						paddingHorizontal: 12
					},
					[ButtonContent.Label]: {
						paddingHorizontal: 12
					}
				},
				gap: 4,
				fontSize: 14,
				iconSize: 20
			},
			height: 32,
			menu: {
				borderRadius: {
					inside: {
						collapsed: 4,
						expanded: (32 / 2)
					},
					outside: (32 / 2)
				},
				iconSize: 22,
				width: 32
			}
		},
		[ButtonSize.Small]: {
			button: {
				borderRadius: {
					outside: (40 / 2),
					inside: 4
				},
				content: {
					[ButtonContent.Icon]: {
						width: 40
					},
					[ButtonContent.IconLabel]: {
						paddingHorizontal: 12
					},
					[ButtonContent.Label]: {
						paddingHorizontal: 12
					}
				},
				gap: 8,
				fontSize: 14,
				iconSize: 20
			},
			height: 40,
			menu: {
				borderRadius: {
					inside: {
						collapsed: 4,
						expanded: (40 / 2)
					},
					outside: (40 / 2)
				},
				iconSize: 22,
				width: 40
			}
		},
		[ButtonSize.Medium]: {
			button: {
				borderRadius: {
					outside: (56 / 2),
					inside: 4
				},
				content: {
					[ButtonContent.Icon]: {
						width: 56
					},
					[ButtonContent.IconLabel]: {
						paddingHorizontal: 12
					},
					[ButtonContent.Label]: {
						paddingHorizontal: 12
					}
				},
				gap: 4,
				fontSize: 16,
				iconSize: 24
			},
			height: 56,
			menu: {
				borderRadius: {
					inside: {
						collapsed: 4,
						expanded: (56 / 2)
					},
					outside: (56 / 2)
				},
				iconSize: 26,
				width: 56
			}
		},
		[ButtonSize.Large]: {
			button: {
				borderRadius: {
					outside: (96 / 2),
					inside: 8
				},
				content: {
					[ButtonContent.Icon]: {
						width: 96
					},
					[ButtonContent.IconLabel]: {
						paddingHorizontal: 12
					},
					[ButtonContent.Label]: {
						paddingHorizontal: 12
					}
				},
				gap: 4,
				fontSize: 24,
				iconSize: 32
			},
			height: 96,
			menu: {
				borderRadius: {
					inside: {
						collapsed: 8,
						expanded: (96 / 2)
					},
					outside: (96 / 2)
				},
				iconSize: 38,
				width: 96
			}
		},
		[ButtonSize.ExtraLarge]: {
			button: {
				borderRadius: {
					outside: (136 / 2),
					inside: 12
				},
				content: {
					[ButtonContent.Icon]: {
						width: 136
					},
					[ButtonContent.IconLabel]: {
						paddingHorizontal: 12
					},
					[ButtonContent.Label]: {
						paddingHorizontal: 12
					}
				},
				gap: 4,
				fontSize: 136,
				iconSize: 40
			},
			height: 136,
			menu: {
				borderRadius: {
					inside: {
						collapsed: 12,
						expanded: (136 / 2)
					},
					outside: (136 / 2)
				},
				iconSize: 50,
				width: 136
			}
		}
	},
	style: {
		[ButtonStyle.Elevated]: {},
		[ButtonStyle.Filled]: {},
		[ButtonStyle.Outline]: {
			borderStyle: "solid",
			borderWidth: 1
		}
	}
}
