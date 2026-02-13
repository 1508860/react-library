import type { IRatio, ISize, IType, PrefixKeys, SizePx } from "@react-library/common";

import type { ViewDividerSizeStrategy } from "../enums/view-divider-size-strategy.type";
import type { ViewDividerStaticView } from "../types/view-divider-static-view.type";

/**
 * Describes base type for view divider size
 */
type ViewDividerSizeBase<TType extends ViewDividerSizeStrategy> = (
	IType<TType>
);

/**
 * Describes size data for the views in the view divider component when the views resize proprtionally
 */
export type ViewDividerSizePercent = (
	IRatio &
	ViewDividerSizeBase<typeof ViewDividerSizeStrategy.Percent>
);

/**
 * Describes size data for the views in the view divider component when one is static
 */
export type ViewDividerSizeStatic = (
	PrefixKeys<ISize<SizePx>, "endView"> &
	PrefixKeys<ISize<SizePx>, "startView"> &
	ViewDividerSizeBase<typeof ViewDividerSizeStrategy.Static> &
	ViewDividerStaticView
);

export type ViewDividerSize = (
	ViewDividerSizePercent |
	ViewDividerSizeStatic
);
