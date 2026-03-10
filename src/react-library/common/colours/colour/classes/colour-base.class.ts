import type { ColourId } from "../enum/colour-id.type";

/**
 * Represents RGB values in hexadecimal notation
 */
export class ColourBase<TColourId extends ColourId> {

	protected id: TColourId;

	constructor(id: TColourId) {
		this.id = id;
	}
}
