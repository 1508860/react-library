import type { PropsWithChildren } from "react";

import type {
	Colour,
	IBackgroundColour,
	IScrollbarBackgroundColour,
	IScrollbarColour
} from "@react-library/common";

/**
 * Props for the scroll virtual component
 */
export type ScrollVirtualProps = (
	Partial<IBackgroundColour<Colour>> &
	PropsWithChildren &
	IScrollbarBackgroundColour<Colour> &
	IScrollbarColour<Colour>
);
