import type { Callback, IOnDismiss, IShow } from "@react-library/common";

/**
 * Tooltip backdrop props
*/
export type TooltipBackdropProps = (
	IOnDismiss<Callback<void>> &
	Partial<IShow>
);
