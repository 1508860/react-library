import type { Guid } from "../../guid";
import type { IId, IState } from "../../interfaces";

/**
 * Describes a subscriber that describes some state that contributes to a subscriber sttae aggregate
 */
export type Subscriber<TState> = (
	IId<Guid> &
	IState<TState>
);
