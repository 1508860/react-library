import type { IIsEqual, IToStylePolygonString } from "../../interfaces";
import type { Callback, CallbackWithParameter } from "../../types";
import { StyleFillRule, type StyleFillRuleGlobal } from "../fill-rule";
import type { StylePolygonSegmentCollection } from "./polygon-segment-collection.type";

/**
 * Class to handle the polygon style function
 */
export class StylePolygon implements IIsEqual<CallbackWithParameter<StylePolygon, boolean>>, IToStylePolygonString<Callback<string>> {

	private readonly _segments: StylePolygonSegmentCollection;
	private readonly _fillRule: StyleFillRuleGlobal;

	// Cache value if already calculated
	private _stylePolygonString: string | null = null;

	constructor(segments: StylePolygonSegmentCollection, fillRule?: StyleFillRuleGlobal) {
		this._segments = segments;
		this._fillRule = fillRule ?? StyleFillRule.Nonzero;
	}

	public isEqual(value: StylePolygon): boolean {
		return this.toStylePolygonString() === value.toStylePolygonString();
	}

	private _toStylePolygonString(): string {
		this._stylePolygonString = `polygon(${this._segments.reduce<string>((a, b) => `${a}, ${b}`, this._fillRule)})`;
		return this._stylePolygonString;
	}

	public toStylePolygonString(): string {
		return this._stylePolygonString ?? this._toStylePolygonString();
	}
}
