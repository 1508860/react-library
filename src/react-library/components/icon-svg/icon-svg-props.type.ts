import type {
	Colour,
	IColour,
	IData,
	ISvgData,
	ISize,
	Size
} from "@react-library/common";

/**
 * Props for icon SVG
 */
export type IconSvgProps = (
	IColour<Colour> &
	IData<ISvgData> &
	ISize<Size>
);
