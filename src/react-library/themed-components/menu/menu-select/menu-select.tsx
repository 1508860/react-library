
import { MenuContainer } from "../shared/components/menu-container";
import { MenuGroup } from "../shared/components/menu-group";

import { MenuSelectVirtualScroll } from "./components/virtual-scroll";
import type { MenuSelectProps } from "./types/menu-select-props.type";

/**
 * Menu select component
 */
export function MenuSelect(props: MenuSelectProps) {
	return (
		<MenuContainer {...props}>
			<MenuGroup groupIndex={0}>
				<MenuSelectVirtualScroll
					{...props}
				/>
			</MenuGroup>
		</MenuContainer>
	);
}
