import type { ReactElement } from "react";

import type {
	ArrayFixedLength3,
	IChild,
	IInitialValue,
	IIsDisabled,
	IMinSize,
	IOrientation,
	ISize,
	Orientation,
	PrefixKeys,
	ScalePercent,
	Size
} from "@react-library/common";

import type { IViewDividerStaticView } from "../interfaces/view-divider-static-view.interface";

/**
 * Props for view divider
 */
export type ViewDividerProps = (
	IChild<ArrayFixedLength3<ReactElement>> &
	Partial<IInitialValue<ScalePercent>> &
	Partial<IIsDisabled> &
	Partial<PrefixKeys<IMinSize<Size>, "end">> &
	Partial<PrefixKeys<IMinSize<Size>, "start">> &
	IOrientation<Orientation> &
	PrefixKeys<ISize<Size>, "separator"> &
	Partial<IViewDividerStaticView>
);
