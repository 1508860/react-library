/**
 * Navigation rail menu style
 */
export const NavigationRailMenuStyle = {
	ImmersiveStandard: "immersive-standard",
	ImmersiveModal: "immersive-modal",
	Standard: "standard"
} as const satisfies Record<string, string>;

/**
 * Type for {@link NavigationRailMenuStyle}
 */
export type NavigationRailMenuStyle = (typeof NavigationRailMenuStyle)[keyof typeof NavigationRailMenuStyle];
