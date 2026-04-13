import type { CSSProperties } from "react";

import type { ColourScheme, Font } from "@react-library/common";

import type { ModalBasicTextMaxWidth } from "../../../types/modal-basic-text-max-width.type";

/**
 * Resolve modal basic header text style based on parameters
 * @param maxWidth
 * @param colourScheme
 * @param font
 */
export function modalBasicHeaderTextStyle(
	maxWidth: ModalBasicTextMaxWidth | undefined,
	colourScheme: ColourScheme,
	font: Font
): CSSProperties {
	return {
		color: colourScheme.surface.variant.onColour.toColourString(),
		fontFamily: font.fontFamily,
		fontSize: 14,
		fontWeight: 400,
		maxWidth: maxWidth,
		width: "100%"
	};
}
