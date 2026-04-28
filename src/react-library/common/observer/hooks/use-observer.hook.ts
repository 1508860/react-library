import { useEffect, useState } from "react";

import { type Guid, generateGuid } from "../../guid";

import type { Subject } from "../classes/subject.class";
import type { Observer } from "../types/observer.type";

/**
 * Custom hook for creating an observer to be consumed by a subject
 * @param subject
 * @param update
 */
export function useObserver<TState>(subject: Subject<TState> | null, update: (state: TState) => void): void {

	const [id] = useState<Guid>(() => generateGuid());

	useEffect(
		() => {
			if(!subject) return;
			const currentObserver: Observer<TState> = {
				id: id,
				update: update
			};
			subject?.subscribe(currentObserver);
			return () => subject?.unsubscribe(currentObserver);
		},
		[subject, update, id]
	);
}
