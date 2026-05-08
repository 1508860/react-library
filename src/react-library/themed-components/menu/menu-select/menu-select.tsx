import { Orientation } from "@react-library/common";
import { VirtualScroll, VirtualScrollContent, VirtualScrollItem } from "@react-library/components";

import { ScrollVirtual } from "../../shared";

import { MenuContainer } from "../shared/components/menu-container";
import { MenuGroup } from "../shared/components/menu-group";
import { MenuItemStandard } from "../shared/components/menu-item-standard";
import { MENU_PROPERTY_MAP } from "../shared/constants/menu-property-map.const";
import { MENU_VIRTUAL_SCROLL_ITEM_BUFFER_COUNT } from "../shared/constants/menu-virtual-scroll.const";
import { useMenuVirtualScrollColourState } from "../shared/hooks/use-menu-virtual-scroll-colour-state.hook";

import type { MenuSelectProps } from "./types/menu-select-props.type";

/**
 * Menu select component
 */
export function MenuSelect(props: MenuSelectProps) {

	const virtualScrollColourState = useMenuVirtualScrollColourState(props.style);

	return (
		<MenuContainer {...props}>
			<MenuGroup groupIndex={0}>
				<VirtualScroll
					itemBufferCount={MENU_VIRTUAL_SCROLL_ITEM_BUFFER_COUNT}
					itemSize={MENU_PROPERTY_MAP.item.height}
					orientation={Orientation.Vertical}
				>
					<ScrollVirtual colour={virtualScrollColourState}>
						<VirtualScrollContent>
							{
								props.items.map((item, itemIndex) => (
									<VirtualScrollItem
										id={item.id}
										key={`${item.id}-${item.isSelected}`}
										index={[itemIndex]}
									>
										{() => (
											<MenuItemStandard
												{...item}
											/>
										)}
									</VirtualScrollItem>
								))
							}
						</VirtualScrollContent>
					</ScrollVirtual>
				</VirtualScroll>
			</MenuGroup>
		</MenuContainer>
	);
}

/**
 * TODO
 * - Resolve virtual scroll hover / clicked inset issue
 * - How to resolve key updates for virtual scroll items
 */
