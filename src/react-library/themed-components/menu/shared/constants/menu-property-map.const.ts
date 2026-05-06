import type { MenuPropertyMap } from "../types/menu-property-map.type";

/**
 * Defines values for menu style sizes
 */
export const MENU_PROPERTY_MAP: MenuPropertyMap = {
	container: {
		borderRadius: 16,
		gap: 2
	},
	divider: {
		paddingVertical: 12
	},
	group: {
		borderRadius: 8,
		paddingHorizontal: 4,
		paddingVertical: 2
	},
	item: {
		borderRadius: 12,
		gap: 8,
		height: 48,
		iconSize: 20,
		paddingHorizontal: 12,
		supportingText: {
			fontSize: 12,
			lineHeight: "16pt"
		},
		text: {
			fontSize: 14,
			lineHeight: "20pt"
		}
	}
};
