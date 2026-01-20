/**
 * Resize observer debounce option
 */
export const ResizeObserverDebounce = {
	"None": 0,
	"100Ms": 100
} as const satisfies Record<string, number>;

/**
 * Type for {@link ResizeObserverDebounce}
 */
export type ResizeObserverDebounce = (typeof ResizeObserverDebounce)[keyof typeof ResizeObserverDebounce];
