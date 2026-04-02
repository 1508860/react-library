import type {
	IOnMouseEnter,
	IOnMouseLeave,
	IRefCallback
} from "@react-library/common";
import type { TooltipChildElement } from "@react-library/components";

import type { TooltipPlainEventElement } from "./tooltip-plain-event-element.type";

/**
 * Define props to be passed to the child element of the tooltip plain component
 */
export type TooltipPlainChildProps = (
	IOnMouseEnter<TooltipPlainEventElement> &
	IOnMouseLeave<TooltipPlainEventElement> &
	IRefCallback<TooltipChildElement>
);
