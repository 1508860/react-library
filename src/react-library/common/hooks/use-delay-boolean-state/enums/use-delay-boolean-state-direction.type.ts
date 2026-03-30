/**
 * Describes direction that a delay is applied to a change of boolean state
 */
export const UseDelayBooleanStateDirection = {
	All: "all",
	ToFalse: "to-false",
	ToTrue: "to-true"
} as const satisfies Record<string, string>;

/**
 * Type for {@link UseDelayBooleanStateDirection}
 */
export type UseDelayBooleanStateDirection = (typeof UseDelayBooleanStateDirection)[keyof typeof UseDelayBooleanStateDirection];
