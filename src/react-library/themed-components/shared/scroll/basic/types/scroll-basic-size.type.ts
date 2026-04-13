
import type {
	IHeight,
	IMaxHeight,
	IMaxWidth,
	IMinHeight,
	IMinWidth,
	IWidth,
	Size
} from "@react-library/common";

/**
 * Describes the horizontal size props for the basic scroll component
 */
export type ScrollBasicSizeHorizontal = (
	Partial<IMaxWidth<Size>> &
	Partial<IMinWidth<Size>> &
	Partial<IWidth<Size>>
);

/**
 * Describes the vertical size props for the basic scroll component
 */
export type ScrollBasicSizeVertical = (
	Partial<IHeight<Size>> &
	Partial<IMaxHeight<Size>> &
	Partial<IMinHeight<Size>>
);


/**
 * Describes all size props for the basic scroll component
 */
export type ScrollBasicSizeAll = (
	ScrollBasicSizeHorizontal &
	ScrollBasicSizeVertical
);
