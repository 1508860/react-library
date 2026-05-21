/**
 * Navigation bar item id
 */
export const NavigationBarItemId = {
	Item1: 1,
	Item2: 2,
	Item3: 3,
	Item4: 4,
	Item5: 5
} as const satisfies Record<string, number>;

/**
 * Type for {@link NavigationBarItemId}
 */
export type NavigationBarItemId = (typeof NavigationBarItemId)[keyof typeof NavigationBarItemId];
