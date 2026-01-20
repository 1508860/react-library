import type { StyleShapeSegment, StyleShapeStartSegment } from "./shape-segment.type";

/**
 * Type to represent a valid segment collection of a style shape function
 */
export type StyleShapeSegmentCollection = [
	StyleShapeStartSegment,
	...Array<StyleShapeSegment>
];
