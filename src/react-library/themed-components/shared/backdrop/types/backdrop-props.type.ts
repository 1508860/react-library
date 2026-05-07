import type { MouseEventHandler } from "react";

import type {
	CallbackWithParameter,
	IIsAbsolute,
	IOnClick,
	IOnComplete,
	IOnPointerEnter,
	IOnPointerLeave,
	IShow,
	ITransitionDurationMs
} from "@react-library/common";

import type { BackdropOnCompleteParam } from "./backdrop-on-complete-param.type";

/**
 * Props for a backdrop
 */
export type BackdropProps = (
	Partial<IIsAbsolute<boolean>> &
	Partial<IOnClick<MouseEventHandler<Element>>> &
	Partial<IOnComplete<CallbackWithParameter<BackdropOnCompleteParam, void>>> &
	Partial<IOnPointerEnter<Element>> &
	Partial<IOnPointerLeave<Element>> &
	IShow &
	ITransitionDurationMs<number>
);
