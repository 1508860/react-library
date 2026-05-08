import type { Callback, IOnPointerEnter } from "@react-library/common";

/**
 * Describes props for a menu on pointer enter event
 */
export type MenuPropsOnPointerEnter = (
	Partial<IOnPointerEnter<Callback<void>>>
);
