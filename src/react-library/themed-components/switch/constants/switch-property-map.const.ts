import type { SwitchPropertyMap } from "../types/switch-property-map.type";

/**
 * Defines values for switch component style sizes
 */
export const SWITCH_PROPERTY_MAP: SwitchPropertyMap = {
	label: {
		fontSize: 14,
		gap: 4,
		lineHeight: "32px"
	},
	thumb: {
		iconSize: 16,
		marginHorizontal: 2,
		size: 24,
		value: {
			false: {
				left: 4 // track border width + margin horizontal
			},
			true: {
				left: 24 // track width - (track border width + margin horizontal)
			}
		}
	},
	track: {
		borderRadius: 16,
		borderWidth: 2,
		height: 32,
		width: 52
	}
};
