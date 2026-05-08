import { Fragment, useCallback, useState } from "react";

import {
	useResolveState,
	type Callback,
	type CallbackWith2Parameters
} from "@react-library/common";
import {
	MenuItemContent,
	MenuSelect,
	MenuStyle,
	type MenuPropsItemContentStandard,
	type MenuPropsSelectItems
} from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";
import { MaterialIconName } from "@react-library/material-icons";

export function ReactLibraryThemedComponentsMenuSelectdDemo() {

	const [menuStyles] = useState<Array<MenuStyle>>(() => Object.values(MenuStyle));

	const [menuIds] = useState<Array<number>>(() => Array.from({ length: 100 }, (_, i) => i + 1));

	const [selectedMenuItemIds, setSelectedMenuItemIds] = useState<Set<number>>(() => new Set<number>());
	const handleSetSelectedMenuItemId = useCallback<CallbackWith2Parameters<boolean, number, void>>(
		(isSelected, id) => setSelectedMenuItemIds((prevState) => {
			const newState = new Set<number>(prevState);
			if (isSelected) return newState.add(id);
			newState.delete(id);
			return newState;
		}),
		[]
	);

	const resolveMenuItems = useCallback<Callback<MenuPropsSelectItems>>(
		() => ({
			items: menuIds.map<MenuPropsItemContentStandard>(id => ({
				content: MenuItemContent.Standard,
				id: id,
				isSelected: selectedMenuItemIds.has(id),
				onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, id),
				text: `Item - ${id}`,
				isDisabled: (id % 10 === 3),
				leadingIconName: selectedMenuItemIds.has(id) ? MaterialIconName.CheckSmall : undefined,
				supportingText: (id % 10 === 5) ? "Supporting text" : undefined,
				trailingIconName: (id % 10 === 7) ? MaterialIconName.Error : undefined
			}))
		}),
		[menuIds, selectedMenuItemIds, handleSetSelectedMenuItemId]
	);

	const menuItems = useResolveState(resolveMenuItems);

	return (
		<DemoSection title="Menu">
			{menuStyles.map(menuStyle => (
				<Fragment key={menuStyle}>
					<DemoItem
						label={menuStyle}
					>
						<MenuSelect
							containerHeight={500}
							containerWidth={300}
							items={menuItems.items}
							style={menuStyle}
						/>
					</DemoItem>
				</ Fragment>
			))}
		</DemoSection>
	);
}
