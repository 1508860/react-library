import type { IOnSubscribable } from "../../interfaces";
import type { CallbackWithParameter } from "../../types";

import type { Observer } from "./observer.type";

/**
 * Describes subject options when constructing a subject
 */
export type SubjectOptions<TState> = (
	Partial<IOnSubscribable<
		CallbackWithParameter<Observer<TState>, void>,
		CallbackWithParameter<Observer<TState>, void>
	>>
);
