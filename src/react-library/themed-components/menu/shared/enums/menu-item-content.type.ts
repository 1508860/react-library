/**
 * Menu item content types
 */
export const MenuItemContent = {
	Standard: "standard",
	Submenu: "submenu",
	Title: "title"
} as const satisfies Record<string, string>;

/**
 * Type for {@link MenuItemContent}
 */
export type MenuItemContent = (typeof MenuItemContent)[keyof typeof MenuItemContent];
