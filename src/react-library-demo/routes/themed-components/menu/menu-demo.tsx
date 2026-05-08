import { Fragment, useCallback, useState } from "react";

import {
	useResolveState,
	type Callback,
	type CallbackWith2Parameters
} from "@react-library/common";
import {
	Menu,
	MenuItemContent,
	MenuStyle,
	type MenuPropsItemContentContainer
} from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

import { MenuDemoId } from "./enums/menu-demo-id.type";
import { MaterialIconName } from "@react-library/material-icons";

export function ReactLibraryThemedComponentsMenuDemo() {

	const [menuStyles] = useState<Array<MenuStyle>>(() => Object.values(MenuStyle));

	const [selectedMenuItemIds, setSelectedMenuItemIds] = useState<Set<MenuDemoId>>(() => new Set<MenuDemoId>());
	const handleSetSelectedMenuItemId = useCallback<CallbackWith2Parameters<boolean, MenuDemoId, void>>(
		(isSelected, menuDemoId) => setSelectedMenuItemIds((prevState) => {
			const newState = new Set<MenuDemoId>(prevState);
			if (isSelected) return newState.add(menuDemoId);
			newState.delete(menuDemoId);
			return newState;
		}),
		[]
	);

	const resolveMenuGroups = useCallback<Callback<MenuPropsItemContentContainer>>(
		() => ({
			groups: [
				{
					id: MenuDemoId.Group1,
					sections: [
						{
							id: MenuDemoId.Section1,
							items: [
								{
									content: MenuItemContent.Title,
									id: MenuDemoId.Title1,
									title: MenuDemoId.Title1
								},
								{
									content: MenuItemContent.Standard,
									id: MenuDemoId.Standard1,
									isSelected: selectedMenuItemIds.has(MenuDemoId.Standard1),
									onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard1),
									text: MenuDemoId.Standard1
								},
								{
									content: MenuItemContent.Standard,
									id: MenuDemoId.Standard2,
									isSelected: selectedMenuItemIds.has(MenuDemoId.Standard2),
									onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard2),
									text: MenuDemoId.Standard2
								}
							]
						},
						{
							id: MenuDemoId.Section2,
							items: [
								{
									content: MenuItemContent.Title,
									id: MenuDemoId.Title2,
									title: MenuDemoId.Title2
								},
								{
									content: MenuItemContent.Standard,
									id: MenuDemoId.Standard3,
									isSelected: selectedMenuItemIds.has(MenuDemoId.Standard3),
									onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard3),
									text: MenuDemoId.Standard3
								},
								{
									content: MenuItemContent.Standard,
									id: MenuDemoId.Standard4,
									isDisabled: true,
									isSelected: selectedMenuItemIds.has(MenuDemoId.Standard4),
									onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard4),
									text: MenuDemoId.Standard4
								},
								{
									content: MenuItemContent.Submenu,
									groups: [
										{
											id: MenuDemoId.Group3,
											sections: [
												{
													id: MenuDemoId.Section4,
													items: [
														{
															content: MenuItemContent.Title,
															id: MenuDemoId.Title4,
															title: MenuDemoId.Title4
														},
														{
															content: MenuItemContent.Standard,
															id: MenuDemoId.Standard7,
															isSelected: selectedMenuItemIds.has(MenuDemoId.Standard7),
															onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard7),
															text: MenuDemoId.Standard7
														},
														{
															content: MenuItemContent.Standard,
															id: MenuDemoId.Standard8,
															isSelected: selectedMenuItemIds.has(MenuDemoId.Standard8),
															onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard8),
															text: MenuDemoId.Standard8
														},
														{
															content: MenuItemContent.Standard,
															id: MenuDemoId.Standard9,
															isSelected: selectedMenuItemIds.has(MenuDemoId.Standard9),
															onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard9),
															text: MenuDemoId.Standard9
														},
														{
															content: MenuItemContent.Submenu,
															id: MenuDemoId.Submenu2,
															groups: [
																{
																	id: MenuDemoId.Group4,
																	sections: [
																		{
																			id: MenuDemoId.Section5,
																			items: [
																				{
																					content: MenuItemContent.Title,
																					id: MenuDemoId.Title5,
																					title: MenuDemoId.Title5
																				},
																				{
																					content: MenuItemContent.Standard,
																					id: MenuDemoId.Standard10,
																					isSelected: selectedMenuItemIds.has(MenuDemoId.Standard10),
																					onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard10),
																					text: MenuDemoId.Standard10
																				},
																				{
																					content: MenuItemContent.Standard,
																					id: MenuDemoId.Standard11,
																					isSelected: selectedMenuItemIds.has(MenuDemoId.Standard11),
																					onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard11),
																					text: MenuDemoId.Standard11
																				},
																				{
																					content: MenuItemContent.Standard,
																					id: MenuDemoId.Standard12,
																					isSelected: selectedMenuItemIds.has(MenuDemoId.Standard12),
																					onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard12),
																					text: MenuDemoId.Standard12
																				}
																			]
																		}
																	]
																}
															],
															groupWidth: 200,
															text: MenuDemoId.Submenu2
														}
													]
												}
											]
										}
									],
									groupWidth: 200,
									id: MenuDemoId.Submenu1,
									leadingIconName: MaterialIconName.Home,
									text: MenuDemoId.Submenu1
								}
							]
						}
					]
				},
				{
					id: MenuDemoId.Group2,
					sections: [
						{
							id: MenuDemoId.Section3,
							items: [
								{
									content: MenuItemContent.Title,
									id: MenuDemoId.Title3,
									title: MenuDemoId.Title3
								},
								{
									content: MenuItemContent.Standard,
									id: MenuDemoId.Standard5,
									isSelected: selectedMenuItemIds.has(MenuDemoId.Standard5),
									leadingIconName: MaterialIconName.Favorite,
									onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard5),
									text: MenuDemoId.Standard5,
									trailingIconName: MaterialIconName.Error
								},
								{
									content: MenuItemContent.Standard,
									id: MenuDemoId.Standard6,
									isSelected: selectedMenuItemIds.has(MenuDemoId.Standard6),
									onSelect: (value) => handleSetSelectedMenuItemId(value.isSelected, MenuDemoId.Standard6),
									text: MenuDemoId.Standard6
								}
							]
						}
					]
				}
			]
		}),
		[selectedMenuItemIds, handleSetSelectedMenuItemId]
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
							groups={menuGoups.groups}
							groupWidth={300}
							style={menuStyle}
						/>
					</DemoItem>
				</ Fragment>
			))}
		</DemoSection>
	);
}
