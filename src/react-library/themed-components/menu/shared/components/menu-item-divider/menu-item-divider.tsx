import { Orientation } from "@react-library/common";

import { Divider } from "../../../../divider";

import { MENU_PROPERTY_MAP } from "../../constants/menu-property-map.const";

/**
 * Menu item divider component
 */
export function MenuItemDivider() {
	return (
		<Divider
			orientation={Orientation.Horizontal}
			marginAfter={MENU_PROPERTY_MAP.divider.paddingVertical}
			marginBefore={MENU_PROPERTY_MAP.divider.paddingVertical}
		/>
	);
}
