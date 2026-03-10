import type { IToColourString } from "../../../../interfaces";
import type { Callback } from "../../../../types";
import { ColourId } from "../../enum/colour-id.type";
import type { HexColour } from "../../types/hex/hex-colour.type";
import { ColourBase } from "../colour-base.class";

/**
 * Represents RGB values in hexadecimal notation
 */
export class HexRgb extends ColourBase<typeof ColourId.HexRgb> implements IToColourString<Callback<string>> {

	public readonly red: HexColour;
	public readonly green: HexColour;
	public readonly blue: HexColour;

	constructor(red: HexColour, green: HexColour, blue: HexColour) {
		super(ColourId.HexRgb);
		this.red = red;
		this.green = green;
		this.blue = blue;
	}

	public toColourString(): string {
		return `#${this.red}${this.green}${this.blue}`;
	}
}
