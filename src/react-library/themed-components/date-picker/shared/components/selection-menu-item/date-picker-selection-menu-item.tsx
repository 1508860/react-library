import { useState, useCallback } from "react";

import { useFontContext, type Callback } from "@react-library/common";
import { HoverLayer, HoverLayerShowProvider } from "@react-library/components";

import { MaterialIconName, MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { DATE_PICKER_PROPERTY_MAP } from "../../constants/date-picker-property-map.const";
import { useDatePickerColourStateContext } from "../../hooks/date-picker-colour-state-context.hook";

import { DATE_PICKER_SELECTION_MENU_ITEM_ICON_PLACEHOLDER_STYLE } from "./styles/date-picker-selection-menu-item-icon-placeholder-style.const";
import { datePickerSelectionMenuItemLabelStyle } from "./styles/date-picker-selection-menu-item-label-style.function";
import { DATE_PICKER_SELECTION_MENU_ITEM_STYLE } from "./styles/date-picker-selection-menu-item-style.const";
import type { DatePickerSelectionMenuItemProps } from "./types/date-picker-selection-menu-item-props.type";

/**
 * Date picker Selection menu item
 */
export function DatePickerSelectionMenuItem(props: DatePickerSelectionMenuItemProps) {

	// Contexts
	const font = useFontContext();

	// Local contexts
	const colourState = useDatePickerColourStateContext();

	// Hover state
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const onPointerEnter = useCallback<Callback<void>>(() => setIsHovered(true), []);
	const onPointerLeave = useCallback<Callback<void>>(() => setIsHovered(false), []);

	return (
		<div
			onClick={props.onClick}
			onPointerCancel={onPointerLeave}
			onPointerEnter={onPointerEnter}
			onPointerLeave={onPointerLeave}
			style={DATE_PICKER_SELECTION_MENU_ITEM_STYLE}
		>
			{
				props.isActive ?
					<MaterialIconSvg
						colour={colourState.selectionMenu.icon}
						name={MaterialIconName.CheckSmall}
						size={DATE_PICKER_PROPERTY_MAP.selectionMenu.iconSize}
						style={MaterialIconStyle.Default}
						key="icon"
					/> :
					<div
						key="no-icon"
						style={DATE_PICKER_SELECTION_MENU_ITEM_ICON_PLACEHOLDER_STYLE}
					/>
			}
			<span
				key="label"
				style={datePickerSelectionMenuItemLabelStyle(font, colourState)}
			>
				{props.label}
			</span>
			<HoverLayerShowProvider
				key="hover-layer"
				show={isHovered}
			>
				<HoverLayer />
			</HoverLayerShowProvider>
		</div>
	);
}
