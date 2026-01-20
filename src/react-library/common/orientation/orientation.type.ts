/**
 * Orientation types
 */
export const Orientation = {
	Horizontal: "horizontal",
	Vertical: "vertical"
} as const satisfies Record<string, string>;

/**
 * Type for {@link Orientation}
 */
export type Orientation = (typeof Orientation)[keyof typeof Orientation];
