/**
 * Date display length
 */
export const DateTimeDisplayLength = {
	Short: "short",
	Medium: "medium",
	Long: "long"
} as const satisfies Record<string, string>;

/**
 * Type for {@link DateTimeDisplayLength}
 */
export type DateTimeDisplayLength = (typeof DateTimeDisplayLength)[keyof typeof DateTimeDisplayLength];
