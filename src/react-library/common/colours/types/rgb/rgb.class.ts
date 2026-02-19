import type { IToColourString } from "../../../interfaces";
import type { Callback } from "../../../types";

export class Rgb implements IToColourString<Callback<string>> {

	public readonly red: number;
	public readonly green: number;
	public readonly blue: number;

	constructor(red: number, green: number, blue: number) {
		this.red = red;
		this.green = green;
		this.blue = blue;
	}

	public toColourString(): string {
		return `rgb(${this.red},${this.green},${this.blue})`;
	}
}
