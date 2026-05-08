import type { Callback, IOnPointerLeave } from "@react-library/common";

/**
 * Describes props for a menu on pointer leave event
 */
export type MenuPropsOnPointerLeave = (
	Partial<IOnPointerLeave<Callback<void>>>
);
