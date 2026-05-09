import { Fragment, useCallback, useState } from "react";

import {
	useResolveState,
	type Callback,
	type CallbackWithParameter
} from "@react-library/common";
import {
	Menu,
	MenuItemContent,
	MenuStyle,
	type MenuPropsItemContentContainer
} from "@react-library/themed-components";
import { MaterialIconName } from "@react-library/material-icons";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

import { MenuDemoId } from "../enums/menu-demo-id.type";

export function ReactLibraryThemedComponentsMenuStandardDemo() {

	const [menuStyles] = useState<Array<MenuStyle>>(() => Object.values(MenuStyle));

	const [selectedMenuItemIds, setSelectedMenuItemIds] = useState<Set<MenuDemoId>>(() => new Set<MenuDemoId>());
	const handleSetSelectedMenuItemId = useCallback<CallbackWithParameter<MenuDemoId, void>>(
		(menuDemoId) => setSelectedMenuItemIds((prevState) => {
			const newState = new Set<MenuDemoId>(prevState);
			if (!selectedMenuItemIds.has(MenuDemoId.Standard1)) return newState.add(menuDemoId);
			newState.delete(menuDemoId);
			return newState;
		}),
		[selectedMenuItemIds]
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
									onSelect: () => handleSetSelectedMenuItemId(MenuDemoId.Standard1),
									text: MenuDemoId.Standard1
								},
								{
									content: MenuItemContent.Standard,
									id: MenuDemoId.Standard2,
									onSelect: () => handleSetSelectedMenuItemId( MenuDemoId.Standard2),
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
									onSelect: () => handleSetSelectedMenuItemId( MenuDemoId.Standard3),
									text: MenuDemoId.Standard3
								},
								{
									content: MenuItemContent.Standard,
									id: MenuDemoId.Standard4,
									isDisabled: true,
									onSelect: () => handleSetSelectedMenuItemId( MenuDemoId.Standard4),
									text: MenuDemoId.Standard4
								},
								{
									containerWidth: 200,
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
															onSelect: () => handleSetSelectedMenuItemId( MenuDemoId.Standard7),
															text: MenuDemoId.Standard7
														},
														{
															content: MenuItemContent.Standard,
															id: MenuDemoId.Standard8,
															onSelect: () => handleSetSelectedMenuItemId( MenuDemoId.Standard8),
															text: MenuDemoId.Standard8
														},
														{
															content: MenuItemContent.Standard,
															id: MenuDemoId.Standard9,
															onSelect: () => handleSetSelectedMenuItemId( MenuDemoId.Standard9),
															text: MenuDemoId.Standard9
														},
														{
															containerWidth: 200,
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
																					onSelect: () => handleSetSelectedMenuItemId( MenuDemoId.Standard10),
																					text: MenuDemoId.Standard10
																				},
																				{
																					content: MenuItemContent.Standard,
																					id: MenuDemoId.Standard11,
																					onSelect: () => handleSetSelectedMenuItemId( MenuDemoId.Standard11),
																					text: MenuDemoId.Standard11
																				},
																				{
																					content: MenuItemContent.Standard,
																					id: MenuDemoId.Standard12,
																					onSelect: () => handleSetSelectedMenuItemId( MenuDemoId.Standard12),
																					text: MenuDemoId.Standard12
																				}
																			]
																		}
																	]
																}
															],
															text: MenuDemoId.Submenu2
														}
													]
												}
											]
										}
									],
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
									leadingIconName: MaterialIconName.Favorite,
									onSelect: () => handleSetSelectedMenuItemId( MenuDemoId.Standard5),
									text: MenuDemoId.Standard5,
									trailingIconName: MaterialIconName.Error
								},
								{
									content: MenuItemContent.Standard,
									id: MenuDemoId.Standard6,
									onSelect: () => handleSetSelectedMenuItemId( MenuDemoId.Standard6),
									text: MenuDemoId.Standard6
								}
							]
						}
					]
				}
			]
		}),
		[handleSetSelectedMenuItemId]
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
							containerWidth={300}
							groups={menuGoups.groups}
							style={menuStyle}
						/>
					</DemoItem>
				</ Fragment>
			))}
		</DemoSection>
	);
}
