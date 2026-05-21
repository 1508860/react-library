/**
 * Navigation rail item id
 */
export const NavigationRailItemId = {
	Item1: 1,
	Item2: 2,
	Item3: 3,
	Item4: 4,
	Item5: 5,
	Item6: 6,
	Item7: 7
} as const satisfies Record<string, number>;

/**
 * Type for {@link NavigationRailItemId}
 */
export type NavigationRailItemId = (typeof NavigationRailItemId)[keyof typeof NavigationRailItemId];
