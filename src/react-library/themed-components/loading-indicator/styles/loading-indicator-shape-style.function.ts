import type { CSSProperties } from "react";

import {
	ColourSchemeStyleStandardToContainer,
	resolveColourSchemeStyleColour,
	StyleShape,
	type Colour,
	type ColourScheme,
	type ColourSchemeStyleStandard
} from "@react-library/common";

import { LoadingIndicatorStyle } from "../enums/loading-indicator-style.type";

/**
 * Resolve loading indicator shape style based on parameters
 * @param colourSchemeStyle
 * @param style
 * @param colourScheme
 * @param styleShape
 */
export function loadingIndicatorShapeStyle(
	colourSchemeStyle: ColourSchemeStyleStandard,
	style: LoadingIndicatorStyle,
	colourScheme: ColourScheme,
	styleShape: StyleShape
): CSSProperties {

	let backgroundColor: Colour | undefined = undefined;

	switch (style) {
		case LoadingIndicatorStyle.Contained:
			backgroundColor = resolveColourSchemeStyleColour(colourScheme, ColourSchemeStyleStandardToContainer[colourSchemeStyle]).onColour;
			break;
		case LoadingIndicatorStyle.Default:
			backgroundColor = resolveColourSchemeStyleColour(colourScheme, colourSchemeStyle).colour;
			break;
	}

	return {
		backgroundColor: backgroundColor?.toColourString(),
		clipPath: styleShape.toStyleShapeString(),
		height: "100%",
		width: "100%"
	};
}
