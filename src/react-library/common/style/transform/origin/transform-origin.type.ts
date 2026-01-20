import type {
	StyleTransformOriginAxisX,
	StyleTransformOriginAxisXY,
	StyleTransformOriginAxisXYZ,
	StyleTransformOriginAxisXZ,
	StyleTransformOriginAxisY,
	StyleTransformOriginAxisYZ,
	StyleTransformOriginAxisZ
} from "./transform-origin-axis-union.type";

/**
 * Union type of all valid values for styling origin transforms for an element
 */
export type StyleTransformOrigin = (
	StyleTransformOriginAxisX |
	StyleTransformOriginAxisY |
	StyleTransformOriginAxisZ |
	StyleTransformOriginAxisXY |
	StyleTransformOriginAxisXZ |
	StyleTransformOriginAxisYZ |
	StyleTransformOriginAxisXYZ
);
