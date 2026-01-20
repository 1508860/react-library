/**
 * Pointer move interactions
 */
export const PointerMoveInteraction = {
	Mouse: "mouse",
	Touch: "touch"
} as const satisfies Record<string, string>;

/**
 * Type for {@link PointerMoveInteraction}
 */
export type PointerMoveInteraction = (typeof PointerMoveInteraction)[keyof typeof PointerMoveInteraction];
