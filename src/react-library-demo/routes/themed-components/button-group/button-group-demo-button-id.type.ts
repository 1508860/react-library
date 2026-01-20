export const ButtonGroupDemoButtonId = {
	First: 1,
	Second: 2,
	Third: 3,
	Fourth: 4,
	Fifth: 5
} as const satisfies Record<string, number>;

/**
 * Type for {@link ButtonGroupDemoButtonId}
 */
export type ButtonGroupDemoButtonId = (typeof ButtonGroupDemoButtonId)[keyof typeof ButtonGroupDemoButtonId];
