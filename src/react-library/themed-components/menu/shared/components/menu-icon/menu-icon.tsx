import { MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { MENU_PROPERTY_MAP } from "../../constants/menu-property-map.const";
import { useMenuItemColourStateContext } from "../../hooks/menu-item-colour-state-context.hook";

import type { MenuIconProps } from "./types/menu-icon-props.type";

/**
 * Menu icon component
 */
export function MenuIcon(props: MenuIconProps) {

	const colourState = useMenuItemColourStateContext();

	return (
		<MaterialIconSvg
			colour={colourState.icon}
			name={props.iconName}
			size={MENU_PROPERTY_MAP.item.iconSize}
			style={MaterialIconStyle.Default}
		/>
	);
}
