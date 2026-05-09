import { Fragment, useCallback, useRef, useState } from "react";

import {
	useResolveState,
	type Callback,
	type CallbackWithParameter,
	type IOnSelect
} from "@react-library/common";
import {
	MenuItemContent,
	MenuSelect,
	MenuSelectedItemsProvider,
	MenuStyle,
	type MenuPropsItemContentStandard,
	type MenuPropsSelectItems
} from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";
import { MaterialIconName } from "@react-library/material-icons";

export function ReactLibraryThemedComponentsMenuSelectDemo() {

	const [selectedMenuItemIds, setSelectedMenuItemIds] = useState<Set<number>>(() => new Set<number>());
	const selectedMenuItemIdsRef = useRef<Set<number>>(selectedMenuItemIds);
	const handleSetSelectedMenuItemId = useCallback<CallbackWithParameter<number, void>>(
		(id) => {
			const newState = new Set<number>(selectedMenuItemIdsRef.current);
			if (!selectedMenuItemIdsRef.current.has(id)) newState.add(id);
			else newState.delete(id);
			selectedMenuItemIdsRef.current = newState;
			setSelectedMenuItemIds(newState);
		},
		[]
	);

	return (
		<MenuSelectedItemsProvider selectedIds={selectedMenuItemIds}>
			<ReactLibraryThemedComponentsMenuSelectChildDemo onSelect={handleSetSelectedMenuItemId} />
		</MenuSelectedItemsProvider>
	);
}

export function ReactLibraryThemedComponentsMenuSelectChildDemo(props: (IOnSelect<CallbackWithParameter<number, void>>)) {

	const [menuStyles] = useState<Array<MenuStyle>>(() => Object.values(MenuStyle));

	const [menuIds] = useState<Array<number>>(() => Array.from({ length: 1000 }, (_, i) => i + 1));

	const resolveMenuItems = useCallback<Callback<MenuPropsSelectItems>>(
		() => ({
			items: menuIds.map<MenuPropsItemContentStandard>(id => ({
				content: MenuItemContent.Standard,
				id: id,
				onSelect: () => props.onSelect(id),
				text: `Item - ${id}`,
				isDisabled: (id % 10 === 3),
				supportingText: (id % 10 === 5) ? "Supporting text" : undefined,
				trailingIconName: (id % 10 === 7) ? MaterialIconName.Error : undefined
			}))
		}),
		[props, menuIds]
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
