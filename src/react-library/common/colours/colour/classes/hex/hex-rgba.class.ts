
import type { IToColourString } from "../../../../interfaces";
import type { Callback } from "../../../../types";
import { ColourId } from "../../enum/colour-id.type";
import type { HexColour } from "../../types/hex/hex-colour.type";
import { ColourBase } from "../colour-base.class";


/**
 * Represents RGB & alpha values in hexadecimal notation
 */
export class HexRgba extends ColourBase<typeof ColourId.HexRgba> implements IToColourString<Callback<string>> {

	public readonly red: HexColour;
	public readonly green: HexColour;
	public readonly blue: HexColour;
	public readonly alpha: HexColour;

	constructor(red: HexColour, green: HexColour, blue: HexColour, alpha: HexColour) {
		super(ColourId.HexRgba);
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.alpha = alpha;
	}

	public toColourString(): string {
		return `#${this.red}${this.green}${this.blue}${this.alpha}`;
	}
}
