import { useEffect } from "react";

import { EventType } from "../enums/event-type.type";
import { targetEvent } from "../functions/target-event.function";

/**
 * Custom hook for listening to an element's event.
 * If the element is {@link null} do nothing.
 * @param isEnabled Flag to stop the event from being listened to
 * @param eventType the type of event to observe {@link EventType}
 * @param element element to listen for click events on
 * @param callback callback function for when click event is triggered
 */
export function useEventListenerCallback(
	isEnabled: boolean,
	eventType: EventType,
	element: Element | null,
	callback: (event: Event) => void
): void {

	useEffect(
		() => {
			// Validate the element
			if (!isEnabled || !element) return;

			// Handle callback
			const eventCallback = (event: Event) => targetEvent(event, (callbackEvent) => callback(callbackEvent));

			// Observe click event
			element.addEventListener(eventType, eventCallback);

			// Dispose
			return () => {
				element.removeEventListener(eventType, eventCallback);
			};
		},
		[
			isEnabled,
			eventType,
			element,
			callback
		]
	);
}
