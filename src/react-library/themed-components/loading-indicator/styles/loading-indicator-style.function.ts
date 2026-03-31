import type { CSSProperties } from "react";

import {
	ColourSchemeStyleStandardToContainer,
	resolveColourSchemeStyleColour,
	StyleShape,
	type Colour,
	type ColourScheme,
	type SizePx
} from "@react-library/common";

import { LOADING_INDICATOR_SHAPE_TIME_TRANSITION } from "../constants/loading-indicator-shape-time.const";
import { LoadingIndicatorStyle } from "../enums/loading-indicator-style.type";
import type { LoadingIndicatorProps } from "../types/loading-indicator-props.type";

/**
 * Resolve loading indicator style based on parameters
 * @param props
 * @param colourScheme
 * @param styleShape
 * @param show
 */
export function loadingIndicatorStyle(
	props: LoadingIndicatorProps,
	colourScheme: ColourScheme,
	styleShape: StyleShape,
	show: boolean
): CSSProperties {

	const fullSize: SizePx = 38;

	let backgroundColor: Colour | undefined = undefined;

	switch (props.style) {
		case LoadingIndicatorStyle.Contained:
			backgroundColor = resolveColourSchemeStyleColour(colourScheme, ColourSchemeStyleStandardToContainer[props.colourSchemeStyle]).onColour;
			break;
		case LoadingIndicatorStyle.Default:
			backgroundColor = resolveColourSchemeStyleColour(colourScheme, props.colourSchemeStyle).colour;
			break;
	}

	return {
		backgroundColor: backgroundColor?.toColourString(),
		clipPath: styleShape.toStyleShapeString(),
		flexShrink: 0,
		height: show ? fullSize : 0,
		position: "absolute",
		transition: LOADING_INDICATOR_SHAPE_TIME_TRANSITION,
		width: show ? fullSize : 0
	};
}
