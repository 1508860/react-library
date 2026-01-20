import type { StyleShapeArcDirection } from "../enums/shape-arc-direction.type";
import type { StyleShapeArcSize } from "../enums/shape-arc-size.type";
import type { StyleShapeCommand } from "../enums/shape-command.type";
import type { StyleShapeContext } from "../enums/shape-context.type";
import type { StyleShapeLengthPercentageSize } from "./shape-length-percentage-size.type";
import type { StyleShapeLengthPercentage } from "./shape-length-percentage.type";

/**
 * Type to represent a segment of a style shape function
 */
export type StyleShapeSegment = (
	`${typeof StyleShapeCommand.Arc} ${StyleShapeContext} ${StyleShapeLengthPercentage} of ${StyleShapeLengthPercentageSize} ${StyleShapeArcSize} ${StyleShapeArcDirection}` |
	`${typeof StyleShapeCommand.Curve} ${StyleShapeContext} ${StyleShapeLengthPercentage} with ${StyleShapeLengthPercentage}` |
	`${typeof StyleShapeCommand.HLine} ${StyleShapeContext} ${StyleShapeLengthPercentage}` |
	`${typeof StyleShapeCommand.Line} ${StyleShapeContext} ${StyleShapeLengthPercentage}` |
	`${typeof StyleShapeCommand.Move} ${StyleShapeContext} ${StyleShapeLengthPercentage}` |
	`${typeof StyleShapeCommand.Smooth} ${StyleShapeContext} ${StyleShapeLengthPercentage} with ${StyleShapeLengthPercentage}` |
	`${typeof StyleShapeCommand.VLine} ${StyleShapeContext} ${StyleShapeLengthPercentage}`
);

/**
 * Type to represent the first x-y co-ordinate pair for shape drawing
 */
export type StyleShapeStartSegment = `from ${StyleShapeLengthPercentage}`;
