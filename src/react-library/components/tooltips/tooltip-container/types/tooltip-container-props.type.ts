import type { PropsWithChildren } from "react";

import type { TooltipPositionProps } from "../../shared/types/position/tooltip-position-props.type";

/**
 * Tooltip container props
*/
export type TooltipContainerProps = (
	PropsWithChildren &
	Partial<TooltipPositionProps>
);
