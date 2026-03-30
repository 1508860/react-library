import type { CSSProperties } from "react";

import { TransitionSizeCollapseDirection } from "../enums/transition-size-collapse-direction.type";

/**
 * Resolve transition size collapse content style based on parameters
 * @param direction
 */
export function transitionSizeCollapseContentStyle(direction: TransitionSizeCollapseDirection): CSSProperties {
	return {
		display: "block",
		height: direction === TransitionSizeCollapseDirection.All || direction === TransitionSizeCollapseDirection.Vertical ? "fit-content" : undefined,
		minHeight: 0,
		minWidth: 0,
		width: direction === TransitionSizeCollapseDirection.All || direction === TransitionSizeCollapseDirection.Horizontal ? "fit-content" : undefined
	};
}
