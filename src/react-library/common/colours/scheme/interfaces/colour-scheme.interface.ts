import type { StyleOpacity } from "../../../style";
import type { Colour } from "../../types/colour.type";
import type { ColourSchemeStyleColour } from "../types/colour-scheme-style-colour.type";

/**
 * Describes colour scheme for an application.
 * Loosely based on material design 3 colour scheme
 */
export interface IColourScheme {
	primary: {
		default: ColourSchemeStyleColour;
		container: ColourSchemeStyleColour;
	};
	secondary: {
		default: ColourSchemeStyleColour;
		container: ColourSchemeStyleColour;
	};
	tertiary: {
		default: ColourSchemeStyleColour;
		container: ColourSchemeStyleColour;
	};
	success: {
		default: ColourSchemeStyleColour;
		container: ColourSchemeStyleColour;
	};
	warning: {
		default: ColourSchemeStyleColour;
		container: ColourSchemeStyleColour;
	};
	error: {
		default: ColourSchemeStyleColour;
		container: ColourSchemeStyleColour;
	};
	surface: {
		default: ColourSchemeStyleColour;
		variant: ColourSchemeStyleColour;
		container: {
			lowest: Colour;
			low: Colour;
			default: Colour; // Medium
			high: Colour;
			highest: Colour;
		}
		inverse: ColourSchemeStyleColour;
	};
	outline: {
		outline: Colour;
		outlineVariant: Colour;
	};
	backdrop: {
		colour: Colour;
		opacity: StyleOpacity;
	},
	disabled: {
		opacity: StyleOpacity;
	};
	hovered: {
		opacity: StyleOpacity;
	};
	pressed: {
		opacity: StyleOpacity;
	};
	transition: {
		pulse: {
			opacity: StyleOpacity;
		}
	},
	elevation: {
		level0: {
			boxShadow: string | undefined;
		};
		level1: {
			boxShadow: string;
		};
		level2: {
			boxShadow: string;
		};
		level3: {
			boxShadow: string;
		};
		level4: {
			boxShadow: string;
		};
		level5: {
			boxShadow: string;
		};
	};
}
