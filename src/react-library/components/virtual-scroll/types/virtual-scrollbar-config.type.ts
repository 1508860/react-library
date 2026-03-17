import type {
	Colour,
	IColour,
	ISize,
	IThumb,
	ITrack,
	Size
} from "@react-library/common";

/**
 * Virtual scroll bar config
 */
export type VirtualScrollBarConfig = (
	Partial<IColour<VirtualScrollBarConfigColour>> &
	Partial<ISize<Size>>
);

export type VirtualScrollBarConfigColour = (
	IThumb<Colour> &
	ITrack<Colour>
);
