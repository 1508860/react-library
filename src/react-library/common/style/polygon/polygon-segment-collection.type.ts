import type { StylePolygonLengthPercentage } from "./polygon-length-percentage.type";

/**
 * Type to represent the x-y co-ordinate pair for polygon drawing
 */
export type StylePolygonSegmentCollection = [
	StylePolygonLengthPercentage,
	StylePolygonLengthPercentage,
	StylePolygonLengthPercentage,
	...Array<StylePolygonLengthPercentage>
];
