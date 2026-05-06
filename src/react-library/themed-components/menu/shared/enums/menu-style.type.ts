/**
 * Menu styles
 */
export const MenuStyle = {
	Standard: "standard",
	Vibrant: "vibrant"
} as const satisfies Record<string, string>;

/**
 * Type for {@link MenuStyle}
 */
export type MenuStyle = (typeof MenuStyle)[keyof typeof MenuStyle];
