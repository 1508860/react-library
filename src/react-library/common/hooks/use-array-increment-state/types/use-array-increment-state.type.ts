import type {
	ICount,
	IDecrement,
	IIncrement,
	IIndex,
	IReset,
	ISet,
	IState
} from "../../../interfaces";
import type { Callback, CallbackWithParameter } from "../../../types";

/**
 * Return state for use array increment state hook
 */
export type UseArrayIncrementState<TElement> = (
	ICount<number> &
	IDecrement<Callback<void>> &
	IIncrement<Callback<void>> &
	IIndex<number> &
	IReset<Callback<void>> &
	ISet<CallbackWithParameter<TElement, void>> &
	IState<TElement>
);
