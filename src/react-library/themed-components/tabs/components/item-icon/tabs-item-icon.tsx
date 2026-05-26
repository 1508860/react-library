import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";
import { MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { TABS_PROPERTY_MAP } from "../../constants/tabs-property-map.const";
import { useTabsColourState } from "../../hooks/tabs-colour-state.hook";
import { useTabsItemIsActiveContext } from "../../hooks/tabs-item-is-active-context.hook";

import type { TabsItemIconProps } from "./types/tabs-item-icon-props.type";

/**
 * Component to handle a tabs item icon
 * @param props
 */
export function TabsItemIcon(props: TabsItemIconProps) {

	// Local contexts
	const colourState = useTabsColourState();
	const isActive = useTabsItemIsActiveContext();

	// Resolve icon style
	const resolveIconStyle = useCallback<Callback<MaterialIconStyle>>(
		() => (!isActive || !props.iconName) ? MaterialIconStyle.Default : MaterialIconStyle.DefaultFilled,
		[props.iconName, isActive]
	);
	const iconStyle = useResolveState(resolveIconStyle);

	return (
		<MaterialIconSvg
			colour={colourState.isActive[`${isActive}`].icon}
			key="icon"
			name={props.iconName}
			size={TABS_PROPERTY_MAP.style[props.style].item.content.iconSize}
			style={iconStyle}
		/>
	);
}
