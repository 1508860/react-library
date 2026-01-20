/**
 * Floating button group button types
 */
export const FloatingButtonGroupButton = {
	Default: "default",
	Menu: "menu"
} as const satisfies Record<string, string>;

/**
 * Type for {@link FloatingButtonGroupButton}
 */
export type FloatingButtonGroupButton = (typeof FloatingButtonGroupButton)[keyof typeof FloatingButtonGroupButton];
