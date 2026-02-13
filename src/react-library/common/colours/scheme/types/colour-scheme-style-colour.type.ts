import type { IColour, IOnColour } from "../../../interfaces";
import type { Colour } from "../../types/colour.type";

/**
 * Describes colour and on colour pairing
 */
export type ColourSchemeStyleColour = (
	IColour<Colour> &
	IOnColour<Colour>
);
