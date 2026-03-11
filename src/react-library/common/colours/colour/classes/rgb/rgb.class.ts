import type { IToColourString, IToColourWithStyleOpacity } from "../../../../interfaces";
import { StyleOpacityToRgbColourMap, type StyleOpacity } from "../../../../style";
import type { Callback, CallbackWithParameter } from "../../../../types";

import { ColourId } from "../../enum/colour-id.type";
import type { RgbColour } from "../../types/rgb/rgb-colour.type";
import { ColourBase } from "../colour-base.class";
import { Rgba } from "./rgba.class";

export class Rgb
	extends
	ColourBase<typeof ColourId.Rgb>
	implements
	IToColourString<Callback<string>>,
	IToColourWithStyleOpacity<CallbackWithParameter<StyleOpacity, Rgba>> {

	public readonly red: RgbColour;
	public readonly green: RgbColour;
	public readonly blue: RgbColour;

	constructor(red: RgbColour, green: RgbColour, blue: RgbColour) {
		super(ColourId.Rgb);
		this.red = red;
		this.green = green;
		this.blue = blue;
	}

	public toColourString(): string {
		return `rgb(${this.red},${this.green},${this.blue})`;
	}

	public toColourWithStyleOpacity(styleOpacity: StyleOpacity): Rgba {
		return new Rgba(this.red, this.green, this.blue, StyleOpacityToRgbColourMap[styleOpacity]);
	}
}
