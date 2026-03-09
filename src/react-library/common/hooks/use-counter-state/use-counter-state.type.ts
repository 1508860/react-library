import type { IDecrement, IIncrement, IReset, ISet, IState } from "../../interfaces";
import type { Callback, CallbackWithParameter } from "../../types";

/**
 * Return state for use counter
 */
export type UseCounterState = (
	IDecrement<Callback<void>> &
	IIncrement<Callback<void>> &
	IReset<Callback<void>> &
	ISet<CallbackWithParameter<number, void>> &
	IState<number>
);
