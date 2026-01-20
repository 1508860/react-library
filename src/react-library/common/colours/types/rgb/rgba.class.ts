import type { IToColourString } from "../../../interfaces";

export class Rgba implements IToColourString {

	public readonly red: number;
	public readonly green: number;
	public readonly blue: number;
	public readonly alpha: number;

	constructor(red: number, green: number, blue: number, alpha: number) {
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.alpha = alpha;
	}

	public toColourString(): string {
		return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
	}
}
