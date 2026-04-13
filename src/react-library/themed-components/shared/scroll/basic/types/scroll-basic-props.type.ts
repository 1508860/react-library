import type { PropsWithChildren } from "react";

import type {
	Colour,
	IBackgroundColour,
	IDirection,
	IHeight,
	IMaxHeight,
	IMaxWidth,
	IMinHeight,
	IMinWidth,
	IOrientation,
	IScrollbarBackgroundColour,
	IScrollbarColour,
	IWidth,
	Orientation,
	Size
} from "@react-library/common";

import type { ScrollBasicDirection } from "../enums/scroll-basic-direction.type";

type ScrollBasicPropsBase<TScrollBasicDirection extends ScrollBasicDirection> = (
	Partial<IBackgroundColour<Colour>> &
	IDirection<TScrollBasicDirection> &
	Partial<IHeight<Size>> &
	Partial<IMaxHeight<Size>> &
	Partial<IMaxWidth<Size>> &
	Partial<IMinHeight<Size>> &
	Partial<IMinWidth<Size>> &
	PropsWithChildren &
	IScrollbarBackgroundColour<Colour> &
	IScrollbarColour<Colour> &
	Partial<IWidth<Size>>
);

/**
 * Props for the scroll basic component for direction both
 */
export type ScrollBasicPropsDirectionBoth = (
	ScrollBasicPropsBase<typeof ScrollBasicDirection.Both>
);

/**
 * Props for the scroll basic component for direction single
 */
export type ScrollBasicPropsDirectionSingle = (
	IOrientation<Orientation> &
	ScrollBasicPropsBase<typeof ScrollBasicDirection.Single>
);


/**
 * Props for the scroll basic component
 */
export type ScrollBasicProps = (
	ScrollBasicPropsDirectionBoth |
	ScrollBasicPropsDirectionSingle
);
