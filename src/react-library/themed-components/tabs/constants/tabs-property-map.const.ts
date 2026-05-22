import { Orientation } from "@react-library/common";

import type { TabsPropertyMap } from "../types/tabs-property-map.type";
import { TabsStyle } from "../enums/tabs-style.type";

/**
 * Constant values for tabs component style sizes
 */
export const TABS_PROPERTY_MAP: TabsPropertyMap = {
	style: {
		[TabsStyle.Primary]: {
			item: {
				activeIndicator: {
					borderTopLeftRadius: 3,
					borderTopRightRadius: 3,
					height: 3
				},
				content: {
					fontSize: 14,
					fontWeight: 500,
					iconSize: 24,
					lineHeight: "20px",
					orientation: {
						[Orientation.Horizontal]: {
							gap: 4,
							height: 48
						},
						[Orientation.Vertical]: {
							gap: undefined,
							height: 64
						}
					},
					paddingHorizontal: 16,
				},
				gap: 4,
				paddingHorizontal: undefined
			}
		},
		[TabsStyle.Secondary]: {
			item: {
				activeIndicator: {
					borderTopLeftRadius: undefined,
					borderTopRightRadius: undefined,
					height: 3
				},
				content: {
					fontSize: 14,
					fontWeight: 500,
					iconSize: 24,
					lineHeight: "20px",
					orientation: {
						[Orientation.Horizontal]: {
							gap: 4,
							height: 48
						},
						[Orientation.Vertical]: {
							gap: undefined,
							height: 64
						}
					},
					paddingHorizontal: undefined
				},
				gap: 4,
				paddingHorizontal: 16
			}
		}
	}
}
