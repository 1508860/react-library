import type { ReactElement } from "react";

import type {
	Callback,
	IArrowContent,
	PositionStrategyExternalAll,
	SizePx
} from "@react-library/common";

/**
 * Type for tooltip position strategy external
 */
export type TooltipPositionStrategyExternal = (
	Partial<IArrowContent<Callback<ReactElement>>> &
	PositionStrategyExternalAll<SizePx, SizePx>
);
