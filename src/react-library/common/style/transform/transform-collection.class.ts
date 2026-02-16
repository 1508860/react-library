import type { IIsEqual, IToStyleTransformCollectionString } from "../../interfaces";
import type { ArrayMinLength1 } from "../../types";

import type { StyleTransform } from "./transform.type";

/**
 * Class for serialising a collection of {@link StyleTransform} values
 */
export class StyleTransformCollection<TStyleTransformCollection extends ArrayMinLength1<StyleTransform>>
	implements IIsEqual<StyleTransformCollection<TStyleTransformCollection>>, IToStyleTransformCollectionString {

	private readonly _styleTransformCollection: TStyleTransformCollection;

	// Cache value if already calculated
	private _styleTransformCollectionString: string | null = null;

	constructor(styleTransformCollection: TStyleTransformCollection) {
		this._styleTransformCollection = styleTransformCollection;
	}

	public isEqual(value: StyleTransformCollection<TStyleTransformCollection>): boolean {
		return this.toStyleTransformCollectionString() === value.toStyleTransformCollectionString();
	}

	private _toTransformCollectionString(): string {
		this._styleTransformCollectionString = this._styleTransformCollection.reduce((a, b) => `${a} ${b}`, "");
		return this._styleTransformCollectionString;
	}

	public toStyleTransformCollectionString(): string {
		return this._styleTransformCollectionString ?? this._toTransformCollectionString();
	}
};
