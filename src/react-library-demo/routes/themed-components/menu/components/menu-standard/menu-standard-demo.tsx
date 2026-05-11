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
import {
	Menu,
	MenuItemContent,
	MenuSelectedItemsProvider,
	MenuStyle,
	type MenuPropsItemContentContainer
} from "@react-library/themed-components";
import { MaterialIconName } from "@react-library/material-icons";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

import { MENU_STANDARD_DEMO_ON_SELECT_CONTEXT } from "./constants/menu-standard-demo-on-select-context.const";
import { MenuStandardDemoId } from "./enums/menu-standard-demo-id.type";
import { useMenuStandardDemoOnSelectContext } from "./hooks/menu-standard-demo-on-select-context.hook";
import type { MenuStandardDemoOnSelect } from "./types/menu-standard-demo-on-select.type";

export function ReactLibraryThemedComponentsMenuStandardDemo() {
	return (
		<ReactLibraryThemedComponentsMenuStandardProviderDemo>
			<ReactLibraryThemedComponentsMenuStandardChildDemo />
		</ReactLibraryThemedComponentsMenuStandardProviderDemo>
	);
}

export function ReactLibraryThemedComponentsMenuStandardProviderDemo(props: PropsWithChildren) {

	const [selectedMenuItemIds, setSelectedMenuItemIds] = useState<Array<MenuStandardDemoId>>(() => []);
	const handleSetSelectedMenuItemId = useCallback<MenuStandardDemoOnSelect>(
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
		<MENU_STANDARD_DEMO_ON_SELECT_CONTEXT value={handleSetSelectedMenuItemId}>
			<MenuSelectedItemsProvider selectedIds={selectedMenuItemIds}>
				{props.children}
			</MenuSelectedItemsProvider>
		</MENU_STANDARD_DEMO_ON_SELECT_CONTEXT>
	);
}

export function ReactLibraryThemedComponentsMenuStandardChildDemo() {

	const menuStandardDemoOnSelect = useMenuStandardDemoOnSelectContext();

	const [menuStyles] = useState<Array<MenuStyle>>(() => Object.values(MenuStyle));
	const [containerWidth] = useState<Size>(() => 300);

	const resolveMenuGroups = useCallback<Callback<MenuPropsItemContentContainer>>(
		() => ({
			groups: [
				{
					id: MenuStandardDemoId.Group1,
					sections: [
						{
							id: MenuStandardDemoId.Section1,
							items: [
								{
									content: MenuItemContent.Title,
									id: MenuStandardDemoId.Title1,
									title: MenuStandardDemoId.Title1
								},
								{
									content: MenuItemContent.Standard,
									id: MenuStandardDemoId.Standard1,
									onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard1),
									text: MenuStandardDemoId.Standard1
								},
								{
									content: MenuItemContent.Standard,
									id: MenuStandardDemoId.Standard2,
									onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard2),
									text: MenuStandardDemoId.Standard2
								}
							]
						},
						{
							id: MenuStandardDemoId.Section2,
							items: [
								{
									content: MenuItemContent.Title,
									id: MenuStandardDemoId.Title2,
									title: MenuStandardDemoId.Title2
								},
								{
									content: MenuItemContent.Standard,
									id: MenuStandardDemoId.Standard3,
									onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard3),
									text: MenuStandardDemoId.Standard3
								},
								{
									content: MenuItemContent.Standard,
									id: MenuStandardDemoId.Standard4,
									isDisabled: true,
									onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard4),
									text: MenuStandardDemoId.Standard4
								},
								{
									containerWidth: 200,
									content: MenuItemContent.Submenu,
									groups: [
										{
											id: MenuStandardDemoId.Group3,
											sections: [
												{
													id: MenuStandardDemoId.Section4,
													items: [
														{
															content: MenuItemContent.Title,
															id: MenuStandardDemoId.Title4,
															title: MenuStandardDemoId.Title4
														},
														{
															content: MenuItemContent.Standard,
															id: MenuStandardDemoId.Standard7,
															onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard7),
															text: MenuStandardDemoId.Standard7
														},
														{
															content: MenuItemContent.Standard,
															id: MenuStandardDemoId.Standard8,
															onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard8),
															text: MenuStandardDemoId.Standard8
														},
														{
															content: MenuItemContent.Standard,
															id: MenuStandardDemoId.Standard9,
															onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard9),
															text: MenuStandardDemoId.Standard9
														},
														{
															containerWidth: 200,
															content: MenuItemContent.Submenu,
															id: MenuStandardDemoId.Submenu2,
															groups: [
																{
																	id: MenuStandardDemoId.Group4,
																	sections: [
																		{
																			id: MenuStandardDemoId.Section5,
																			items: [
																				{
																					content: MenuItemContent.Title,
																					id: MenuStandardDemoId.Title5,
																					title: MenuStandardDemoId.Title5
																				},
																				{
																					content: MenuItemContent.Standard,
																					id: MenuStandardDemoId.Standard10,
																					onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard10),
																					text: MenuStandardDemoId.Standard10
																				},
																				{
																					content: MenuItemContent.Standard,
																					id: MenuStandardDemoId.Standard11,
																					onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard11),
																					text: MenuStandardDemoId.Standard11
																				},
																				{
																					content: MenuItemContent.Standard,
																					id: MenuStandardDemoId.Standard12,
																					onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard12),
																					text: MenuStandardDemoId.Standard12
																				}
																			]
																		}
																	]
																}
															],
															text: MenuStandardDemoId.Submenu2
														}
													]
												}
											]
										}
									],
									id: MenuStandardDemoId.Submenu1,
									leadingIconName: MaterialIconName.Home,
									text: MenuStandardDemoId.Submenu1
								}
							]
						}
					]
				},
				{
					id: MenuStandardDemoId.Group2,
					sections: [
						{
							id: MenuStandardDemoId.Section3,
							items: [
								{
									content: MenuItemContent.Title,
									id: MenuStandardDemoId.Title3,
									title: MenuStandardDemoId.Title3
								},
								{
									content: MenuItemContent.Standard,
									id: MenuStandardDemoId.Standard5,
									leadingIconName: MaterialIconName.Favorite,
									onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard5),
									text: MenuStandardDemoId.Standard5,
									trailingIconName: MaterialIconName.Error
								},
								{
									content: MenuItemContent.Standard,
									id: MenuStandardDemoId.Standard6,
									onSelect: () => menuStandardDemoOnSelect(MenuStandardDemoId.Standard6),
									text: MenuStandardDemoId.Standard6
								}
							]
						}
					]
				}
			]
		}),
		[menuStandardDemoOnSelect]
	);

	const menuGoups = useResolveState(resolveMenuGroups);

	return (
		<DemoSection title="Menu">
			{menuStyles.map(menuStyle => (
				<Fragment key={menuStyle}>
					<DemoItem
						label={menuStyle}
					>
						<Menu
							containerWidth={containerWidth}
							groups={menuGoups.groups}
							style={menuStyle}
						/>
					</DemoItem>
				</ Fragment>
			))}
		</DemoSection>
	);
}
