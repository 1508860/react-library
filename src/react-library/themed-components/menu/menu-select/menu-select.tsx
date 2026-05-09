import { Orientation } from "@react-library/common";
import { VirtualScrollItem } from "@react-library/components";

import { ThemedVirtualScroll } from "../../shared";

import { MenuContainer } from "../shared/components/menu-container";
import { MenuGroup } from "../shared/components/menu-group";
import { MenuItemStandard } from "../shared/components/menu-item-standard";
import { MENU_PROPERTY_MAP } from "../shared/constants/menu-property-map.const";
import { MENU_VIRTUAL_SCROLL_ITEM_BUFFER_COUNT } from "../shared/constants/menu-virtual-scroll.const";
import { useMenuVirtualScrollColourState } from "../shared/hooks/use-menu-virtual-scroll-colour-state.hook";
import type { MenuPropsItemContentStandard } from "../shared/types/menu-props-item-content.type";

import type { MenuSelectProps } from "./types/menu-select-props.type";

/**
 * Menu select component
 */
export function MenuSelect(props: MenuSelectProps) {

	const virtualScrollColourState = useMenuVirtualScrollColourState(props.style);

	return (
		<MenuContainer {...props}>
			<MenuGroup groupIndex={0}>
				<ThemedVirtualScroll
					colour={virtualScrollColourState}
					itemBufferCount={MENU_VIRTUAL_SCROLL_ITEM_BUFFER_COUNT}
					itemSize={MENU_PROPERTY_MAP.item.height}
					orientation={Orientation.Vertical}
				>
					{
						props.items.map((item, itemIndex) => (
							<VirtualScrollItem<MenuPropsItemContentStandard>
								childProps={item}
								id={item.id}
								index={[itemIndex]}
								key={item.id}
							>
								{MenuItemStandard}
							</VirtualScrollItem>
						))
					}
				</ThemedVirtualScroll>
			</MenuGroup>
		</MenuContainer>
	);
}
