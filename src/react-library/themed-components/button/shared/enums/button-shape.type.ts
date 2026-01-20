/**
 * Button shape types
 */
export const ButtonShape = {
	Round: "round",
	Soft: "soft"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ButtonShape}
 */
export type ButtonShape = (typeof ButtonShape)[keyof typeof ButtonShape];
