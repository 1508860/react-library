/**
 * Router guard state
 */
export const RouterGuardState = {
	Failure: "failure",
	Loading: "loading",
	Success: "success"
} as const satisfies Record<string, string>;

/**
 * Type for {@link RouterGuardState}
 */
export type RouterGuardState = (typeof RouterGuardState)[keyof typeof RouterGuardState];
