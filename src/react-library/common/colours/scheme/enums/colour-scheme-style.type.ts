/**
 * Colour scheme styles
 */
export const ColourSchemeStyle = {
	Primary: "primary",
	PrimaryContainer: "primary-container",
	Secondary: "secondary",
	SecondaryContainer: "secondary-container",
	Tertiary: "tertiary",
	TertiaryContainer: "tertiary-container"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ColourSchemeStyle}
 */
export type ColourSchemeStyle = (typeof ColourSchemeStyle)[keyof typeof ColourSchemeStyle];
