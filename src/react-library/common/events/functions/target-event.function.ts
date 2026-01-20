import { stopDefaultAndPropagation } from "./stop-default-and-propogation.function";

/**
 * Function to capture an event of an element and ensure the event target matches the current element target
 * @param event
 * @param callback to call if the event targets match
 */
export function targetEvent<TEvent extends (React.UIEvent | Event)>(
	event: TEvent,
	callback: (event: TEvent) => void
): void {
	if (event.target !== event.currentTarget) return;
	stopDefaultAndPropagation(event);
	callback(event);
}
