/**
 * Date display style
 */
export const DateDisplayStyle = {
	"Short": "short",
	"Medium": "medium",
	"Long": "long"
} as const satisfies Record<string, string>;

/**
 * Type for {@link DateDisplayStyle}
 */
export type DateDisplayStyle = (typeof DateDisplayStyle)[keyof typeof DateDisplayStyle];
