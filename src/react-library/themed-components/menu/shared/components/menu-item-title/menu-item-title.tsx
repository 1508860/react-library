
import type { MenuPropsItemContentTitle } from "../../types/menu-props-item-content.type";

import { MenuItem } from "../menu-item";
import { MenuTextContainer } from "../menu-text-container";
import { MenuTitle } from "../menu-title";

/**
 * Menu item title component
 */
export function MenuItemTitle(props: MenuPropsItemContentTitle) {

	return (
		<MenuItem>
			<MenuTextContainer key="text-container">
				<MenuTitle {...props} />
			</MenuTextContainer>
		</MenuItem>
	);
}
