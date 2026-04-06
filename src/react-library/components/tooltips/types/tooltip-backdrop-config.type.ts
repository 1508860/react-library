import type { Callback, IOnDismiss } from "@react-library/common";

/**
 * Describes tooltip backdrop config
 */
export type TooltipBackdropConfig = (
	IOnDismiss<Callback<void>>
);
