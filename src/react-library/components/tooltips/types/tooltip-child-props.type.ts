import type { IRefCallback } from "@react-library/common";

import type { TooltipChildElement } from "./tooltip-child-element.type";

/**
 * Define props to be passed to the child element of the tooltip
 */
export type TooltipChildProps = (
	IRefCallback<TooltipChildElement>
);
