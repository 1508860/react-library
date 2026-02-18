import type { Guid } from "../../guid";
import type { IId, IUpdate } from "../../interfaces";
import type { CallbackWithParameter } from "../../types";

/**
 * Describes an observer that can be updated to perform some kind of action
 */
export type Observer<TState> = (
	IId<Guid> &
	IUpdate<CallbackWithParameter<TState, void>>
);
