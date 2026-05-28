/**
 * Virtual scroll to index behaviour type
 */
export const VirtualScrollToIndexBehaviour = {
	Auto: "auto",
	Instant: "instant",
	Smooth: "smooth"
} as const satisfies Record<string, ScrollBehavior>;

/**
 * Type for {@link VirtualScrollToIndexBehaviour}
 */
export type VirtualScrollToIndexBehaviour = (typeof VirtualScrollToIndexBehaviour)[keyof typeof VirtualScrollToIndexBehaviour];
