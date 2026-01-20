
import type { ScrollObserverState } from "./scroll-observer-state.type";
import { SCROLL_OBSERVER_STATE_DEFAULT } from "./scroll-observer-state-default.const";

/**
 * Function to resolve an element's scroll state
 * @param elementContainer element container used for scrolling when child content overflows
 */
export function resolveScrollObserverState(elementContainer: Element | null): ScrollObserverState {

	if (!elementContainer) return SCROLL_OBSERVER_STATE_DEFAULT;

	return {
		horizontalScrollStart: elementContainer.scrollLeft,
		verticalScrollStart: elementContainer?.scrollTop
	};
}
