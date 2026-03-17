import type { Colour, IColour, IRotate, IScale, ScalePercent } from "@react-library/common";

/**
 * Props for progress indicator circle
 */
export type ProgressIndicatorCircleProps = (
	IColour<Colour> &
	IRotate<ScalePercent> &
	IScale<ScalePercent>
);
