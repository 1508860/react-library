/**
 * Defines the type of a render element in a virtual scroll
 */
export const VirtualScrollRenderElement = {
	StartBuffer: "start-buffer",
	InView: "in-view",
	EndBuffer: "end-buffer"
} as const satisfies Record<string, string>;

/**
 * Type for {@link VirtualScrollRenderElement}
 */
export type VirtualScrollRenderElement = (typeof VirtualScrollRenderElement)[keyof typeof VirtualScrollRenderElement];
