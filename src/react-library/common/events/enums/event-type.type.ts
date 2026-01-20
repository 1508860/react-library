/**
 * Event types
 * Compatible with add event listener
 */
export const EventType = {
	Click: "click",
	Mousedown: "mousedown",
	Mouseenter: "mouseenter",
	Mouseleave: "mouseleave",
	Mousemove: "mousemove",
	Mouseup: "mouseup",
	Scroll: "scroll",
	Scrollend: "scrollend",
	Touchcancel: "touchcancel",
	Touchend: "touchend",
	Touchmove: "touchmove",
	Touchstart: "touchstart"
} as const satisfies Record<string, string>;

/**
 * Type for {@link EventType}
 */
export type EventType = (typeof EventType)[keyof typeof EventType];
