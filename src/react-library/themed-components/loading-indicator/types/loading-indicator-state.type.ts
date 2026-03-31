import type { IRotate, IShape, ScaleDegreesState } from "@react-library/common";

import type { LoadingIndicatorShape } from "../enums/loading-indicator-shape.type";

/**
 * Loading indicator state
 */
export type LoadingIndicatorState = (
	IRotate<ScaleDegreesState> &
	IShape<LoadingIndicatorShape>
);
