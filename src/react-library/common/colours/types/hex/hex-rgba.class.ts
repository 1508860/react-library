
import type { IToColourString } from "../../../interfaces";
import type { Callback } from "../../../types";
import type { HexColour } from "./hex-colour.type";

/**
 * Represents RGB & alpha values in hexadecimal notation
 */
export class HexRgba implements IToColourString<Callback<string>> {

	public readonly red: HexColour;
	public readonly green: HexColour;
	public readonly blue: HexColour;
	public readonly alpha: HexColour;

	constructor(red: HexColour, green: HexColour, blue: HexColour, alpha: HexColour) {
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.alpha = alpha;
	}

	public toColourString(): string {
		return `#${this.red}${this.green}${this.blue}${this.alpha}`;
	}
}
