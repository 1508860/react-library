import { ColourSchemeContainerLevel, ColourSchemeElevationLevel, HexRgb, HexRgba, type ColourScheme } from "@react-library/common";

/**
 * Defines the colour scheme for the demo application
 * See: https://material-foundation.github.io/material-theme-builder
 * Seed:
 * - Primary = #769CDF
 * - Success = #63A002
 * - Warning = #FFDE3F
 * - Variant = Taken from material documentation as theme builder didn't provide these values
 */
export const DEMO_COLOUR_SCHEME: ColourScheme = {
	primary: {
		default: {
			colour: new HexRgb("41", "5F", "91"),
			onColour: new HexRgb("FF", "FF", "FF")
		},
		container: {
			colour: new HexRgb("D6", "E3", "FF"),
			onColour: new HexRgb("28", "47", "77")
		}
	},
	secondary: {
		default: {
			colour: new HexRgb("56", "5F", "71"),
			onColour: new HexRgb("FF", "FF", "FF")
		},
		container: {
			colour: new HexRgb("DA", "E2", "F9"),
			onColour: new HexRgb("3E", "47", "59")
		}
	},
	tertiary: {
		default: {
			colour: new HexRgb("70", "55", "75"),
			onColour: new HexRgb("FF", "FF", "FF")
		},
		container: {
			colour: new HexRgb("FA", "D8", "FD"),
			onColour: new HexRgb("57", "3E", "5C")
		}
	},
	success: {
		default: {
			colour: new HexRgb("4C", "66", "2B"),
			onColour: new HexRgb("FF", "FF", "FF")
		},
		container: {
			colour: new HexRgb("CD", "ED", "A3"),
			onColour: new HexRgb("35", "4E", "16")
		}
	},
	warning: {
		default: {
			colour: new HexRgb("6D", "5E", "0F"),
			onColour: new HexRgb("FF", "FF", "FF")
		},
		container: {
			colour: new HexRgb("F8", "E2", "87"),
			onColour: new HexRgb("53", "46", "00")
		}
	},
	error: {
		default: {
			colour: new HexRgb("BA", "1A", "1A"),
			onColour: new HexRgb("FF", "FF", "FF")
		},
		container: {
			colour: new HexRgb("FF", "DA", "D6"),
			onColour: new HexRgb("93", "00", "0A")
		}
	},
	surface: {
		default: {
			colour: new HexRgb("F9", "F9", "FF"),
			onColour: new HexRgb("19", "1C", "20")
		},
		variant: {
			colour: new HexRgb("E7", "E0", "EC"),
			onColour: new HexRgb("49", "45", "4F")
		},
		container: {
			[ColourSchemeContainerLevel.Lowest]: new HexRgb("FF", "FF", "FF"),
			[ColourSchemeContainerLevel.Low]: new HexRgb("F3", "F3", "FA"),
			[ColourSchemeContainerLevel.Medium]: new HexRgb("ED", "ED", "F4"),
			[ColourSchemeContainerLevel.High]: new HexRgb("E7", "E8", "EE"),
			[ColourSchemeContainerLevel.Highest]: new HexRgb("E2", "E2", "E9")
		},
		inverse: {
			colour: new HexRgb("2E", "30", "36"),
			onColour: new HexRgb("F0", "F0", "F7")
		}
	},
	outline: {
		outline: new HexRgb("74", "77", "7F"),
		outlineVariant: new HexRgb("C4", "C6", "D0")
	},
	backdrop: {
		colour: new HexRgba("00", "00", "00", "80")
	},
	disabled: {
		opacity: 0.3
	},
	hovered: {
		opacity: 0.1
	},
	pressed: {
		opacity: 0.12
	},
	transition: {
		pulse: {
			opacity: 0.05
		}
	},
	elevation: {
		boxShadow: {
			[ColourSchemeElevationLevel.Level0]: undefined,
			[ColourSchemeElevationLevel.Level1]: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
			[ColourSchemeElevationLevel.Level2]: "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
			[ColourSchemeElevationLevel.Level3]: "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
			[ColourSchemeElevationLevel.Level4]: "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px",
			[ColourSchemeElevationLevel.Level5]: "rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px"
		}
	}
}
