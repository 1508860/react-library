import { HexRgb, type Colour } from "@react-library/common";

/**
 * Colour scheme styles
 */
export const DemoContentColourScheme = {
	Primary: "primary",
	Secondary: "secondary",
	Tertiary: "tertiary"
} as const satisfies Record<string, string>;

/**
 * Type for {@link DemoContentColourScheme}
 */
export type DemoContentColourScheme = (typeof DemoContentColourScheme)[keyof typeof DemoContentColourScheme];

export const DemoContentColourSchemeMap = {
	[DemoContentColourScheme.Primary]: new HexRgb("FF", "7F", "50"),
	[DemoContentColourScheme.Secondary]: new HexRgb("AF", "EE", "EE"),
	[DemoContentColourScheme.Tertiary]: new HexRgb("D3", "D3", "D3")
} as const satisfies Record<DemoContentColourScheme, Colour>;
