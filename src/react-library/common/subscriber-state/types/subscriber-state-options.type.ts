import type { IOnSubscribeChange } from "../../interfaces";
import type { CallbackWithParameter } from "../../types";

import type { Subscriber } from "./subscriber.type";

/**
 * Describes subscriber options when constructing a subscriber state
 */
export type SubscriberStateOptions<TState> = (
	IOnSubscribeChange<CallbackWithParameter<Array<Subscriber<TState>>, void>>
);
