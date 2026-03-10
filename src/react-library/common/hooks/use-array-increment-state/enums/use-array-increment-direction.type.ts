/**
 * Direction for use array increment state hook
 */
export const UseArrayIncrementDirection = {
	Backwards: "backwards",
	Forwards: "forwards"
} as const satisfies Record<string, string>;

/**
 * Type for {@link UseArrayIncrementDirection}
 */
export type UseArrayIncrementDirection = (typeof UseArrayIncrementDirection)[keyof typeof UseArrayIncrementDirection];

/**
 * Maps {@link UseArrayIncrementDirection} to an increment / decrement amount
 */
export const UseArrayIncrementDirectionAmountMap = {
	[UseArrayIncrementDirection.Backwards]: -1,
	[UseArrayIncrementDirection.Forwards]: 1
} as const satisfies Record<UseArrayIncrementDirection, number>;
