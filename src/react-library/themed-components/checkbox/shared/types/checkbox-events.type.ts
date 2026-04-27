import type { IOnClick, IOnPointerEnter, IOnPointerLeave } from "@react-library/common";

/**
 * Type for callback events for the checkbox
 */
export type CheckboxEvents = (
	IOnClick<Element> &
	IOnPointerEnter<Element> &
	IOnPointerLeave<Element>
);
