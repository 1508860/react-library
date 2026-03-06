/**
 * Time display style
 */
export const TimeDisplayStyle = {
	Hour: "hour",
	Minute: "minute",
	Second: "second",
	Decisecond: "decisecond",
	Centisecond: "centisecond",
	Millisecond: "millisecond"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TimeDisplayStyle}
 */
export type TimeDisplayStyle = (typeof TimeDisplayStyle)[keyof typeof TimeDisplayStyle];
