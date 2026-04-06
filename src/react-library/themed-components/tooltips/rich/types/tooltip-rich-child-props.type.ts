import type { Callback, IOnDismiss, IOnShow, IRefCallback } from "@react-library/common";
import type { TooltipChildElement } from "@react-library/components";

/**
 * Define props to be passed to the child element of the tooltip rich component
 */
export type TooltipRichChildProps = (
	IOnDismiss<Callback<void>> &
	IOnShow<Callback<void>> &
	IRefCallback<TooltipChildElement>
);
