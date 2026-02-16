/**
 * Colour scheme container levels
 */
export const ColourSchemeContainerLevel = {
	Lowest: "lowest",
	Low: "low",
	Medium: "medium",
	High: "high",
	Highest: "highest"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ColourSchemeContainerLevel}
 */
export type ColourSchemeContainerLevel = (typeof ColourSchemeContainerLevel)[keyof typeof ColourSchemeContainerLevel];
