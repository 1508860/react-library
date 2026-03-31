import type { CSSProperties } from "react";

import {
	ColourSchemeStyleStandardToContainer,
	resolveColourSchemeStyleColour,
	type Colour,
	type ColourScheme
} from "@react-library/common";

import { LOADING_INDICATOR_BACKGROUND_SIZE } from "../constants/loading-indicator-size.const";
import { LoadingIndicatorStyle } from "../enums/loading-indicator-style.type";
import type { LoadingIndicatorProps } from "../types/loading-indicator-props.type";

/**
 * Resolve loading indicator background style based on parameters
 * @param props
 * @param colourScheme
 */
export function loadingIndicatorBackgroundStyle(
	props: LoadingIndicatorProps,
	colourScheme: ColourScheme
): CSSProperties {

	let backgroundColor: Colour | undefined = undefined;

	if (props.style === LoadingIndicatorStyle.Contained) {
		backgroundColor = resolveColourSchemeStyleColour(colourScheme, ColourSchemeStyleStandardToContainer[props.colourSchemeStyle]).colour;
	}

	return {
		alignItems: "center",
		backgroundColor: backgroundColor?.toColourString(),
		borderRadius: "50%",
		display: "inline-flex",
		flexShrink: 0,
		height: LOADING_INDICATOR_BACKGROUND_SIZE,
		justifyContent: "center",
		position: "relative",
		width: LOADING_INDICATOR_BACKGROUND_SIZE
	};
}
