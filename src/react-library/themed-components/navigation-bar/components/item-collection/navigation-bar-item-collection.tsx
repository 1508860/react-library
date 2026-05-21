import { useColourSchemeContext, useFontContext } from "@react-library/common";

import { NavigationBarItemContainer } from "../item-container";
import { navigationBarItemCollectionStyle } from "./styles/navigation-bar-item-collection-style.function";
import type { NavigationBarItemCollectionProps } from "./types/navigation-bar-item-collection-props.type";

/**
 * Component to handle a navigation bar item collection
 * @param props
 */
export function NavigationBarItemCollection(props: NavigationBarItemCollectionProps) {

	const colourScheme = useColourSchemeContext();
	const font = useFontContext();

	return (
		<div style={navigationBarItemCollectionStyle(colourScheme, font)}>
			{props.items.map(item =>
				<NavigationBarItemContainer
					activeItemId={props.activeItemId}
					badgeLabel={item.badgeLabel}
					iconName={item.iconName}
					itemId={item.itemId}
					key={item.itemId}
					label={item.label}
					onChange={props.onItemChange}
					showBadge={item.showBadge}
					orientation={props.itemOrientation}
				/>
			)}
		</div>
	);
}
