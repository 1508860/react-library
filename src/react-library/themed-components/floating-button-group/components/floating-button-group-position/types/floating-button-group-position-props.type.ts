import type { PropsWithChildren } from "react";

import {
	Orientation,
	type IOrientation,
	type IPositionStrategy,
	type PositionStrategyInternalCorner
} from "@react-library/common";

/**
 * Props for floating button group position
 */
export type FloatingButtonGroupPositionProps = (
	IOrientation<Orientation> &
	IPositionStrategy<PositionStrategyInternalCorner> &
	PropsWithChildren
);
