import type { PointerEventHandler } from "react";

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
	IOnPointerEnter<PointerEventHandler<Element>> &
	IOnPointerLeave<PointerEventHandler<Element>> &
	IOnToggle<Callback<void>>
);
