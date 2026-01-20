import type { IInset, IPadding, SizePx } from "@react-library/common";

import type {
	FloatingButtonGroupPositionAlignItems,
	FloatingButtonGroupPositionFlexDirection
} from "../types/floating-button-group-position.type";

/**
 * Describes use state hook result for the floating button group position
 */
export interface IFloatingButtonGroupPosition extends IPadding<SizePx> {
	alignItems: FloatingButtonGroupPositionAlignItems;
	flexDirection: FloatingButtonGroupPositionFlexDirection;
	gap: SizePx;
	inset: Partial<IInset<SizePx>>;
}
