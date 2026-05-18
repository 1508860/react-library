import { useCallback } from "react";

import {
	type Callback,
	useResolveState,
	Orientation
} from "@react-library/common";
import type { VirtualScrollItem, VirtualScrollItems } from "@react-library/components";

import { ThemedVirtualScroll } from "../../../../shared";

import { MenuItemStandard } from "../../../shared/components/menu-item-standard";
import { MENU_PROPERTY_MAP } from "../../../shared/constants/menu-property-map.const";
import { MENU_VIRTUAL_SCROLL_ITEM_BUFFER_COUNT } from "../../../shared/constants/menu-virtual-scroll.const";
import { isMenuPropsItemContentStandardEqual } from "../../../shared/functions/is-menu-props-item-content-standard-equal.function";
import { useMenuVirtualScrollColourState } from "../../../shared/hooks/use-menu-virtual-scroll-colour-state.hook";
import type { MenuPropsItemContentStandard } from "../../../shared/types/menu-props-item-content.type";

import type { MenuSelectVirtualScrollProps } from "./types/menu-select-virtual-scroll-props.type";

/**
 * Menu select virtual scroll component
 */
export function MenuSelectVirtualScroll(props: MenuSelectVirtualScrollProps) {

	const virtualScrollColourState = useMenuVirtualScrollColourState(props.style);

	// Resolve items
	const resolveItems = useCallback<Callback<VirtualScrollItems<MenuPropsItemContentStandard>>>(
		() => props.items.map<VirtualScrollItem<MenuPropsItemContentStandard>>(item => (
			{
				childProps: item,
				children: MenuItemStandard,
				id: item.id
			}
		)),
		[props.items]
	);
	const items = useResolveState(resolveItems);

	return (
		<ThemedVirtualScroll
			colour={virtualScrollColourState}
			isEqual={isMenuPropsItemContentStandardEqual}
			itemBufferCount={MENU_VIRTUAL_SCROLL_ITEM_BUFFER_COUNT}
			items={items}
			itemSize={MENU_PROPERTY_MAP.item.height}
			orientation={Orientation.Vertical}
		/>
	);
}
