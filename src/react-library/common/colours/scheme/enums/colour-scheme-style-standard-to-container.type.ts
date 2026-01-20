import type { ColourSchemeStyleContainer } from "../types/colour-scheme-style-container.type";
import type { ColourSchemeStyleStandard } from "../types/colour-scheme-style-standard.type";
import { ColourSchemeStyle } from "./colour-scheme-style.type";

export const ColourSchemeStyleStandardToContainer = {
	[ColourSchemeStyle.Primary]: ColourSchemeStyle.PrimaryContainer,
	[ColourSchemeStyle.Secondary]: ColourSchemeStyle.SecondaryContainer,
	[ColourSchemeStyle.Tertiary]: ColourSchemeStyle.TertiaryContainer
} as const satisfies Record<ColourSchemeStyleStandard, ColourSchemeStyleContainer>;

/**
 * Type for {@link ColourSchemeStyleStandardToContainer}
 */
export type ColourSchemeStyleStandardToContainer = (typeof ColourSchemeStyleStandardToContainer)[keyof typeof ColourSchemeStyleStandardToContainer];
