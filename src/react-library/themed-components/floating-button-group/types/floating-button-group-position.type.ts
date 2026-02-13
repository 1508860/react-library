import type { IAlignItems, IFlexDirection, IGap, IInset, IInsetAll, IPadding, SizePx } from "@react-library/common";

import type { FloatingButtonGroupPositionAlignItems } from "./floating-button-group-position-align-items.type";
import type { FloatingButtonGroupPositionFlexDirection } from "./floating-button-group-position-flex-direction.type";

/**
 * Describes use state hook result for the floating button group position
 */
export type FloatingButtonGroupPosition = (
	IAlignItems<FloatingButtonGroupPositionAlignItems> &
	IFlexDirection<FloatingButtonGroupPositionFlexDirection> &
	IGap<SizePx> &
	IInset<Partial<IInsetAll<SizePx>>> &
	IPadding<SizePx>
);
