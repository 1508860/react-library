import type {
	IOnMouseEnter,
	IOnMouseLeave,
	IRefCallback
} from "@react-library/common";
import type { TooltipChildElement } from "@react-library/components";

/**
 * Define props to be passed to the child element of the tooltip plain component
 */
export type TooltipPlainChildProps = (
	IOnMouseEnter<Element> &
	IOnMouseLeave<Element> &
	IRefCallback<TooltipChildElement>
);
