import {
	resolveStyleShapeCookieArc,
	StyleShapeArcDirection,
	type StyleShape
} from "@react-library/common";

import { LoadingIndicatorShape } from "./loading-indicator-shape.type";

/**
 * Map for {@link LoadingIndicatorShape} to a style shape
 */
export const LoadingIndicatorShapeMap = {
	[LoadingIndicatorShape.Cookie3]: resolveStyleShapeCookieArc(3, StyleShapeArcDirection.CounterClockwise),
	[LoadingIndicatorShape.Cookie4]: resolveStyleShapeCookieArc(4, StyleShapeArcDirection.CounterClockwise),
	[LoadingIndicatorShape.Cookie5]: resolveStyleShapeCookieArc(5, StyleShapeArcDirection.CounterClockwise),
	[LoadingIndicatorShape.Cookie6]: resolveStyleShapeCookieArc(6, StyleShapeArcDirection.CounterClockwise),
} as const satisfies Record<LoadingIndicatorShape, StyleShape>;

/**
 * Type for {@link LoadingIndicatorShapeMap}
 */
export type LoadingIndicatorShapeMap = (typeof LoadingIndicatorShapeMap)[keyof typeof LoadingIndicatorShapeMap];
