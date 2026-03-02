import type { Size } from "../../units";
import type { PositionStrategyInternalBottomCenter } from "./position-strategy-internal-bottom-center.type";
import type { PositionStrategyInternalBottomLeft } from "./position-strategy-internal-bottom-left.type";
import type { PositionStrategyInternalBottomRight } from "./position-strategy-internal-bottom-right.type";
import type { PositionStrategyInternalMiddleCenter } from "./position-strategy-internal-middle-center.type";
import type { PositionStrategyInternalMiddleLeft } from "./position-strategy-internal-middle-left.type";
import type { PositionStrategyInternalMiddleRight } from "./position-strategy-internal-middle-right.type";
import type { PositionStrategyInternalTopCenter } from "./position-strategy-internal-top-center.type";
import type { PositionStrategyInternalTopLeft } from "./position-strategy-internal-top-left.type";
import type { PositionStrategyInternalTopRight } from "./position-strategy-internal-top-right.type";

/**
 * Union type to represent all variants for how elements can be laid out relative to and inside another element
 */
export type PositionStrategyInternalAll<TMarginHorizontal extends Size, TMarginVertical extends Size> = (
	PositionStrategyInternalTopLeft<TMarginHorizontal, TMarginVertical> |
	PositionStrategyInternalTopCenter<TMarginVertical> |
	PositionStrategyInternalTopRight<TMarginHorizontal, TMarginVertical> |
	PositionStrategyInternalMiddleLeft<TMarginHorizontal> |
	PositionStrategyInternalMiddleCenter |
	PositionStrategyInternalMiddleRight<TMarginHorizontal> |
	PositionStrategyInternalBottomLeft<TMarginHorizontal, TMarginVertical> |
	PositionStrategyInternalBottomCenter<TMarginVertical> |
	PositionStrategyInternalBottomRight<TMarginHorizontal, TMarginVertical>
);
