/**
 * Stop and event's default behaviour and from propogating
 * @param event
 */
export function stopDefaultAndPropagation<TEvent extends (React.UIEvent | Event)>(event: TEvent): TEvent {
	event.preventDefault();
	event.stopPropagation();
	return event;
}
