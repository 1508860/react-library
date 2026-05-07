import type { Callback, IOnClick } from "@react-library/common";

/**
 * Describes props for a menu on click event
 */
export type MenuPropsOnClick = (
	Partial<IOnClick<Callback<void>>>
);
