import type {
	Callback,
	IOnPointerEnter,
	IOnPointerLeave,
	IOnToggle
} from "@react-library/common";

/**
 * Type for callback events for the checkbox
 */
export type CheckboxEvents = (
	IOnPointerEnter<Element> &
	IOnPointerLeave<Element> &
	IOnToggle<Callback<void>>
);
