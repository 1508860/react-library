import type { StyleOpacity } from "../../../style";
import type { Colour } from "../../types/colour.type";
import type { IColourSchemeStyleColour } from "./colour-scheme-style-colour.interface";

/**
 * Describes colour scheme for an application.
 * Loosely based on material design 3 colour scheme
 */
export interface IColourScheme {
	primary: {
		default: IColourSchemeStyleColour;
		container: IColourSchemeStyleColour;
	};
	secondary: {
		default: IColourSchemeStyleColour;
		container: IColourSchemeStyleColour;
	};
	tertiary: {
		default: IColourSchemeStyleColour;
		container: IColourSchemeStyleColour;
	};
	success: {
		default: IColourSchemeStyleColour;
		container: IColourSchemeStyleColour;
	};
	warning: {
		default: IColourSchemeStyleColour;
		container: IColourSchemeStyleColour;
	};
	error: {
		default: IColourSchemeStyleColour;
		container: IColourSchemeStyleColour;
	};
	surface: {
		default: IColourSchemeStyleColour;
		variant: IColourSchemeStyleColour;
		container: {
			lowest: Colour;
			low: Colour;
			default: Colour; // Medium
			high: Colour;
			highest: Colour;
		}
		inverse: IColourSchemeStyleColour;
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
