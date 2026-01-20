/**
 * Represent the return value when performing a sort comparison between two values
 */
export const SortOrder = {
	Ascending: 1,
	Descending: -1
} as const satisfies Record<string, number>;

/**
 * Type for {@link SortOrder}
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
