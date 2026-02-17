import type { ReactElement } from "react";

import type {
	ArrayFixedLength3,
	IChild,
	IInitialValue,
	IIsDisabled,
	IMinSizeEnd,
	IMinSizeStart,
	IOrientation,
	Orientation,
	ScalePercent,
	Size
} from "@react-library/common";

import type { ViewDividerStaticView } from "../types/view-divider-static-view.type";
import type { ISeparatorSize } from "react-library/common/interfaces/separator-size.interface";

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
