import type {
	ArrayMaxLength2,
	ArrayMinLength1,
	Callback,
	IAction,
	IId,
	IText
} from "@react-library/common";

/**
 * Type for a single tooltip rich content action
 */
export type TooltipRichContentAction = (
	IAction<Callback<void>> &
	IId<number | string> &
	IText<string>
);

/**
 * Describes how many {@link TooltipRichContentAction} can be shown
 */
export type TooltipRichContentActions = (
	ArrayMinLength1<TooltipRichContentAction> &
	ArrayMaxLength2<TooltipRichContentAction>
);
