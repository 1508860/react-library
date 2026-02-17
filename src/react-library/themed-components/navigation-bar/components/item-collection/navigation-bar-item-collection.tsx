import { useColourSchemeContext, useFontContext } from "@react-library/common";

import type { NavigationBarItemId } from "../../types/navigation-bar-item-id.type";
import { NavigationBarItemContainer } from "../item-container";
import { navigationBarItemCollectionStyle } from "./styles/navigation-bar-item-collection-style.function";
import type { NavigationBarItemCollectionProps } from "./types/navigation-bar-item-collection-props.type";

/**
 * Component to handle a navigation bar item collection
 * @param props
 */
export function NavigationBarItemCollection<TItemId extends NavigationBarItemId>(props: NavigationBarItemCollectionProps<TItemId>) {

	const colourScheme = useColourSchemeContext();
	const font = useFontContext();

	return (
		<div style={navigationBarItemCollectionStyle(colourScheme, font)}>
			{props.children.map(child =>
				<NavigationBarItemContainer
					activeItemId={props.activeItemId}
					badgeLabel={child.badgeLabel}
					element={child.element}
					iconName={child.iconName}
					itemId={child.itemId}
					key={child.itemId}
					label={child.label}
					onChange={props.onItemChange}
					showBadge={child.showBadge}
					orientation={props.itemOrientation}
				/>
			)}
		</div>
	);
}
