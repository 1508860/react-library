import type { IIsEqual, IToStyleShapeString } from "../../../interfaces";
import { StyleFillRule, type StyleFillRuleGlobal } from "../../fill-rule";
import type { StyleShapeSegmentCollection } from "../types/shape-segment-collection.type";

/**
 * Class to handle the shape style function
 */
export class StyleShape implements IIsEqual<StyleShape>, IToStyleShapeString {

	private readonly _segments: StyleShapeSegmentCollection;
	private readonly _fillRule: StyleFillRuleGlobal;

	// Cache value if already calculated
	private _styleShapeString: string | null = null;

	constructor(segments: StyleShapeSegmentCollection, fillRule?: StyleFillRuleGlobal) {
		this._segments = segments;
		this._fillRule = fillRule ?? StyleFillRule.Nonzero;
	}

	public isEqual(value: StyleShape): boolean {
		return this.toStyleShapeString() === value.toStyleShapeString();
	}

	private _toStyleShapeString(): string {
		this._styleShapeString = `shape(${this._segments.reduce<string>((a, b, i) => `${a}${i === 0 ? "" : ","} ${b}`, this._fillRule)})`;
		return this._styleShapeString;
	}

	public toStyleShapeString(): string {
		return this._styleShapeString ?? this._toStyleShapeString();
	}
}
