import type { IToColourString, IToColourWithStyleOpacity } from "../../../../interfaces";
import { StyleOpacityToRgbColourMap, type StyleOpacity } from "../../../../style";
import type { Callback, CallbackWithParameter } from "../../../../types";

import { ColourId } from "../../enum/colour-id.type";
import type { RgbColour } from "../../types/rgb/rgb-colour.type";
import { ColourBase } from "../colour-base.class";

export class Rgba
	extends ColourBase<typeof ColourId.Rgba>
	implements
	IToColourString<Callback<string>>,
	IToColourWithStyleOpacity<CallbackWithParameter<StyleOpacity, Rgba>> {

	public readonly red: RgbColour;
	public readonly green: RgbColour;
	public readonly blue: RgbColour;
	public readonly alpha: RgbColour;

	constructor(red: RgbColour, green: RgbColour, blue: RgbColour, alpha: RgbColour) {
		super(ColourId.Rgba);
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.alpha = alpha;
	}

	public toColourString(): string {
		return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
	}

	public toColourWithStyleOpacity(styleOpacity: StyleOpacity): Rgba {
		return new Rgba(this.red, this.green, this.blue, StyleOpacityToRgbColourMap[styleOpacity]);
	}
}
