import type { DatePickerPropertyMap } from "../types/date-picker-property-map.type";

/**
 * Defines values for date picker style sizes
 */
export const DATE_PICKER_PROPERTY_MAP: DatePickerPropertyMap = {
	container: {
		borderRadius: 16,
		height: 460,
		padding: 12
	},
	monthItem: {
		date: {
			borderWidth: 1,
			fontSize: 16,
			fontWeight: 400,
			size: 40
		},
		title: {
			fontSize: 16,
			fontWeight: 400,
			height: 40
		},
		weekday: {
			fontSize: 16,
			fontWeight: 400,
			height: 24,
			width: 40
		},
		width: 280 // 7 weekdays wide
	},
	selection: {
		fontSize: 14,
		fontWeight: 500,
		iconSize: {
			arrow: 24,
			chevron: 24
		},
		marginBottom: 12
	},
	selectionMenu: {
		fontSize: 16,
		fontWeight: 400,
		gap: 16,
		iconSize: 24,
		itemHeight: 48
	}
};
