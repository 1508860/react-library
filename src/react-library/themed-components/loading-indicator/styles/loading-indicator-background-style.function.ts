import type { CSSProperties } from "react";

import {
	ColourSchemeStyleStandardToContainer,
	resolveColourSchemeStyleColour,
	type Colour,
	type IColourScheme,
	type SizePx
} from "@react-library/common";

import { LoadingIndicatorStyle } from "../enums/loading-indicator-style.type";
import type { LoadingIndicatorProps } from "../types/loading-indicator-props.type";

/**
 * Resolve loading indicator background style based on parameters
 * @param props
 * @param colourScheme
 */
export function loadingIndicatorBackgroundStyle(
	props: LoadingIndicatorProps,
	colourScheme: IColourScheme
): CSSProperties {

	const size: SizePx = 48;

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
		height: size,
		justifyContent: "center",
		position: "relative",
		width: size
	};
}
