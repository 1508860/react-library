import type { IIsEqual, IToStyleCubicBezierString } from "../../../interfaces";
import type { Callback, CallbackWithParameter } from "../../../types";
import type { StyleCubicBezierFunc } from "../types/cubic-bezier-func.type";

/**
 * Class to handle the cubic bezier style function
 */
export class StyleCubicBezier implements IIsEqual<CallbackWithParameter<StyleCubicBezier, boolean>>, IToStyleCubicBezierString<Callback<StyleCubicBezierFunc>> {

	private readonly _x1: number;
	private readonly _y1: number;
	private readonly _x2: number;
	private readonly _y2: number;

	// Cache value if already calculated
	private _styleCubicBezierString: StyleCubicBezierFunc | null = null;

	constructor(x1: number, y1: number, x2: number, y2: number) {
		this._x1 = x1;
		this._y1 = y1;
		this._x2 = x2;
		this._y2 = y2;
	}

	public isEqual(value: StyleCubicBezier): boolean {
		return this.toStyleCubicBezierString() === value.toStyleCubicBezierString();
	}

	private _toStyleCubicBezierString(): StyleCubicBezierFunc {
		this._styleCubicBezierString = `cubic-bezier(${this._x1}, ${this._y1}, ${this._x2}, ${this._y2})`;
		return this._styleCubicBezierString;
	}

	public toStyleCubicBezierString(): StyleCubicBezierFunc {
		return this._styleCubicBezierString ?? this._toStyleCubicBezierString();
	}
}
