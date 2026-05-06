import { Fragment } from "react";

import { MenuContainer } from "../shared/components/menu-container";
import { MenuGroup } from "../shared/components/menu-group";
import { MenuItemDivider } from "../shared/components/menu-item-divider";
import { MenuItemResolver } from "../shared/components/menu-item-resolver";
import type { MenuProps } from "./types/menu-props.type";

/**
 * Menu component
 */
export function Menu(props: MenuProps) {
	return (
		<MenuContainer {...props}>

			{props.groups.map(group => (

				<MenuGroup key={group.id}>

					{group.sections.map((section, sectionIndex) => (

						<Fragment key={`${section.id}`}>

							{
								section.items.map(item => (
									<MenuItemResolver
										{...item}
										key={`${item.id}`}
									/>
								))
							}
							{
								(sectionIndex === 0 || (sectionIndex === (section.items.length - 1))) ?
									<Fragment key="no-divider" /> :
									< MenuItemDivider key="divider" />
							}

						</Fragment>

					))}

				</MenuGroup>

			))}

		</MenuContainer>
	);
}
