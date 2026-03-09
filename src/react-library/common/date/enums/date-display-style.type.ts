/**
 * Date display style
 */
export const DateDisplayStyle = {
	Year: "year",
	Month: "month",
	Day: "day"
} as const satisfies Record<string, string>;

/**
 * Type for {@link DateDisplayStyle}
 */
export type DateDisplayStyle = (typeof DateDisplayStyle)[keyof typeof DateDisplayStyle];
