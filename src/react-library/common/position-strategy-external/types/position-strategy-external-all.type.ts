import type { Size } from "../../units";
import type { PositionStrategyExternalBottomCenter } from "./position-strategy-external-bottom-center.type";
import type { PositionStrategyExternalBottomEnd } from "./position-strategy-external-bottom-end.type";
import type { PositionStrategyExternalBottomLeft } from "./position-strategy-external-bottom-left.type";
import type { PositionStrategyExternalBottomRight } from "./position-strategy-external-bottom-right.type";
import type { PositionStrategyExternalBottomStart } from "./position-strategy-external-bottom-start.type";
import type { PositionStrategyExternalLeftCenter } from "./position-strategy-external-left-center.type";
import type { PositionStrategyExternalLeftEnd } from "./position-strategy-external-left-end.type";
import type { PositionStrategyExternalLeftStart } from "./position-strategy-external-left-start.type";
import type { PositionStrategyExternalRightCenter } from "./position-strategy-external-right-center.type";
import type { PositionStrategyExternalRightEnd } from "./position-strategy-external-right-end.type";
import type { PositionStrategyExternalRightStart } from "./position-strategy-external-right-start.type";
import type { PositionStrategyExternalTopCenter } from "./position-strategy-external-top-center.type";
import type { PositionStrategyExternalTopEnd } from "./position-strategy-external-top-end.type";
import type { PositionStrategyExternalTopLeft } from "./position-strategy-external-top-left.type";
import type { PositionStrategyExternalTopRight } from "./position-strategy-external-top-right.type";
import type { PositionStrategyExternalTopStart } from "./position-strategy-external-top-start.type";

/**
 * Union type to represent all variants for how elements can be laid out relative to and outside another element
 */
export type PositionStrategyExternalAll<THorizontalMargin extends Size, TVerticalMargin extends Size> = (
	PositionStrategyExternalBottomCenter<TVerticalMargin> |
	PositionStrategyExternalBottomStart<TVerticalMargin> |
	PositionStrategyExternalBottomEnd<TVerticalMargin> |
	PositionStrategyExternalBottomLeft<THorizontalMargin, TVerticalMargin> |
	PositionStrategyExternalBottomRight<THorizontalMargin, TVerticalMargin> |
	PositionStrategyExternalLeftCenter<THorizontalMargin> |
	PositionStrategyExternalLeftStart<THorizontalMargin> |
	PositionStrategyExternalLeftEnd<THorizontalMargin> |
	PositionStrategyExternalRightCenter<THorizontalMargin> |
	PositionStrategyExternalRightStart<THorizontalMargin> |
	PositionStrategyExternalRightEnd<THorizontalMargin> |
	PositionStrategyExternalTopCenter<TVerticalMargin> |
	PositionStrategyExternalTopStart<TVerticalMargin> |
	PositionStrategyExternalTopEnd<TVerticalMargin> |
	PositionStrategyExternalTopLeft<THorizontalMargin, TVerticalMargin> |
	PositionStrategyExternalTopRight<THorizontalMargin, TVerticalMargin>
);
