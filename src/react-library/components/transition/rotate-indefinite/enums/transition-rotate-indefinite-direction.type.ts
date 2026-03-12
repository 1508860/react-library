/**
 * Sets the direction of the rotate indefinite transition
 */
export const TransitionRotateIndefiniteDirection = {
	Backwards: "backwards",
	Forwards: "forwards"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TransitionRotateIndefiniteDirection}
 */
export type TransitionRotateIndefiniteDirection = (typeof TransitionRotateIndefiniteDirection)[keyof typeof TransitionRotateIndefiniteDirection];
