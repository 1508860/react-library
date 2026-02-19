import type { IToColourString } from "../../../interfaces";
import type { Callback } from "../../../types";
import type { HexColour } from "./hex-colour.type";

/**
 * Represents RGB values in hexadecimal notation
 */
export class HexRgb implements IToColourString<Callback<string>> {

	public readonly red: HexColour;
	public readonly green: HexColour;
	public readonly blue: HexColour;

	constructor(red: HexColour, green: HexColour, blue: HexColour) {
		this.red = red;
		this.green = green;
		this.blue = blue;
	}

	public toColourString(): string {
		return `#${this.red}${this.green}${this.blue}`;
	}
}
