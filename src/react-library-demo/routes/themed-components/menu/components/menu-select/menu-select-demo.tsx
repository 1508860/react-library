import {
	Fragment,
	useCallback,
	useState,
	type PropsWithChildren
} from "react";

import {
	useResolveState,
	type Callback,
	type Size
} from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";
import {
	MenuItemContent,
	MenuSelect,
	MenuSelectedItemsProvider,
	MenuStyle,
	type MenuPropsItemContentStandard,
	type MenuPropsSelectItems
} from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

import { MENU_SELECT_DEMO_ON_SELECT_CONTEXT } from "./constants/menu-select-demo-on-select-context.const";
import { useMenuSelectDemoOnSelectContext } from "./hooks/menu-select-demo-on-select-context.hook";
import type { MenuSelectDemoOnSelect } from "./types/menu-select-demo-on-select.type";

export function ReactLibraryThemedComponentsMenuSelectDemo() {
	return (
		<ReactLibraryThemedComponentsMenuSelectProviderDemo>
			<ReactLibraryThemedComponentsMenuSelectChildDemo />
		</ReactLibraryThemedComponentsMenuSelectProviderDemo>
	);
}

function ReactLibraryThemedComponentsMenuSelectProviderDemo(props: PropsWithChildren) {

	const [selectedMenuItemIds, setSelectedMenuItemIds] = useState<Array<number>>(() => []);
	const handleSetSelectedMenuItemId = useCallback<MenuSelectDemoOnSelect>(
		(id) => {
			setSelectedMenuItemIds((prev) => {
				const newState = [...prev];
				if (newState.includes(id)) return newState.filter(x => x !== id);
				newState.push(id);
				return newState;
			});
		},
		[]
	);

	return (
		<MENU_SELECT_DEMO_ON_SELECT_CONTEXT value={handleSetSelectedMenuItemId}>
			<MenuSelectedItemsProvider selectedIds={selectedMenuItemIds}>
				{props.children}
			</MenuSelectedItemsProvider>
		</MENU_SELECT_DEMO_ON_SELECT_CONTEXT>
	);
}

function ReactLibraryThemedComponentsMenuSelectChildDemo() {

	const menuSelectDemoOnSelect = useMenuSelectDemoOnSelectContext();

	const [menuStyles] = useState<Array<MenuStyle>>(() => Object.values(MenuStyle));
	const [containerHeight] = useState<Size>(() => 500);
	const [containerWidth] = useState<Size>(() => 300);

	const [menuIds] = useState<Array<number>>(() => Array.from({ length: 1000 }, (_, i) => i + 1));

	const resolveMenuItems = useCallback<Callback<MenuPropsSelectItems>>(
		() => ({
			items: menuIds.map<MenuPropsItemContentStandard>(id => ({
				content: MenuItemContent.Standard,
				id: id,
				onSelect: () => menuSelectDemoOnSelect(id),
				text: `Item - ${id}`,
				isDisabled: (id % 10 === 3),
				supportingText: (id % 10 === 5) ? "Supporting text" : undefined,
				trailingIconName: (id % 10 === 7) ? MaterialIconName.Error : undefined
			}))
		}),
		[menuSelectDemoOnSelect, menuIds]
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
							containerHeight={containerHeight}
							containerWidth={containerWidth}
							items={menuItems.items}
							style={menuStyle}
						/>
					</DemoItem>
				</ Fragment>
			))}
		</DemoSection>
	);
}
