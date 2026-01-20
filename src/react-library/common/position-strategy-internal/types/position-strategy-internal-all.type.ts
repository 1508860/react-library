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
export type PositionStrategyInternalAll<THorizontalMargin extends Size, TVerticalMargin extends Size> = (
	PositionStrategyInternalTopLeft<THorizontalMargin, TVerticalMargin> |
	PositionStrategyInternalTopCenter<TVerticalMargin> |
	PositionStrategyInternalTopRight<THorizontalMargin, TVerticalMargin> |
	PositionStrategyInternalMiddleLeft<THorizontalMargin> |
	PositionStrategyInternalMiddleCenter |
	PositionStrategyInternalMiddleRight<THorizontalMargin> |
	PositionStrategyInternalBottomLeft<THorizontalMargin, TVerticalMargin> |
	PositionStrategyInternalBottomCenter<TVerticalMargin> |
	PositionStrategyInternalBottomRight<THorizontalMargin, TVerticalMargin>
);
