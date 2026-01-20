import type {
	StyleTransformOriginAxisValueX,
	StyleTransformOriginAxisValueY,
	StyleTransformOriginAxisValueZ
} from "./transform-origin-axis.type";

/**
 * Origin transform for an element on the x axis
 */
export type StyleTransformOriginAxisX = StyleTransformOriginAxisValueX;

/**
 * Origin transform for an element on the x axis
 */
export type StyleTransformOriginAxisY = `initial ${StyleTransformOriginAxisValueY}`;

/**
 * Origin transform for an element on the x axis
 */
export type StyleTransformOriginAxisZ = `initial initial ${StyleTransformOriginAxisValueZ}`;

/**
 * Origin transform for an element on the x & y axis
 */
export type StyleTransformOriginAxisXY = `${StyleTransformOriginAxisValueX} ${StyleTransformOriginAxisValueY}`;

/**
 * Origin transform for an element on the x & z axis
 */
export type StyleTransformOriginAxisXZ = `${StyleTransformOriginAxisValueX} initial ${StyleTransformOriginAxisValueZ}`;

/**
 * Origin transform for an element on the y & z axis
 */
export type StyleTransformOriginAxisYZ = `initial ${StyleTransformOriginAxisValueY} ${StyleTransformOriginAxisValueZ}`;

/**
 * Origin transform for an element on the X & y & z axis
 */
export type StyleTransformOriginAxisXYZ = `${StyleTransformOriginAxisValueX} ${StyleTransformOriginAxisValueY} ${StyleTransformOriginAxisValueZ}`;
