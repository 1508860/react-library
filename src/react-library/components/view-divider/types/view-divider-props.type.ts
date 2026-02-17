import type { ReactElement } from "react";

import type {
	ArrayFixedLength3,
	IChild,
	IInitialValue,
	IIsDisabled,
	IMinSizeEnd,
	IMinSizeStart,
	IOrientation,
	ISeparatorSize,
	Orientation,
	ScalePercent,
	Size
} from "@react-library/common";

import type { ViewDividerStaticView } from "../types/view-divider-static-view.type";

/**
 * Props for view divider
 */
export type ViewDividerProps = (
	IChild<ArrayFixedLength3<ReactElement>> &
	Partial<IInitialValue<ScalePercent>> &
	Partial<IIsDisabled> &
	Partial<IMinSizeEnd<Size>> &
	Partial<IMinSizeStart<Size>> &
	IOrientation<Orientation> &
	ISeparatorSize<Size> &
	Partial<ViewDividerStaticView>
);
