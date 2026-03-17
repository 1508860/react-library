import type {
	Colour,
	IColour,
	IShow,
	IThumb,
	ITrack
} from "@react-library/common";

/**
 * Virtual scroll bar config
 */
export type VirtualScrollBarConfig = (
	Partial<IColour<VirtualScrollBarConfigColour>> &
	Partial<IShow>
);

export type VirtualScrollBarConfigColour = (
	IThumb<Colour> &
	ITrack<Colour>
);
