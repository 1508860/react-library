import type {
	ColourSchemeStyleStandard,
	IColourSchemeStyle,
	IPosition,
	IStyle
} from "@react-library/common";

import type { LoadingIndicatorPosition } from "../enums/loading-indicator-position.type";
import type { LoadingIndicatorStyle } from "../enums/loading-indicator-style.type";

/**
 * Props for loading indicator
 */
export type LoadingIndicatorProps = (
	IColourSchemeStyle<ColourSchemeStyleStandard> &
	IPosition<LoadingIndicatorPosition> &
	IStyle<LoadingIndicatorStyle>
);
