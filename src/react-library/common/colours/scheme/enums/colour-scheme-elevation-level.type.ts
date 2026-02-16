/**
 * Colour scheme elevation levels
 */
export const ColourSchemeElevationLevel = {
	Level0: "level-0",
	Level1: "level-1",
	Level2: "level-2",
	Level3: "level-3",
	Level4: "level-4",
	Level5: "level-5"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ColourSchemeElevationLevel}
 */
export type ColourSchemeElevationLevel = (typeof ColourSchemeElevationLevel)[keyof typeof ColourSchemeElevationLevel];
