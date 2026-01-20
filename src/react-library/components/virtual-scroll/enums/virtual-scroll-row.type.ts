/**
 * Used to distinguish between types of rows that might exist in a virtual scroll element array
 */
export const VirtualScrollRow = {
	Parent: "parent",
	GrandParent: "grand-parent",
	GreatGrandParent: "great-grand-parent"
} as const satisfies Record<string, (string)>;

/**
 * Type for {@link VirtualScrollRow}
 */
export type VirtualScrollRow = (typeof VirtualScrollRow)[keyof typeof VirtualScrollRow];
