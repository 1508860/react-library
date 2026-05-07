import { Fragment } from "react";

import { MenuContainer } from "../menu-container";
import { MenuGroup } from "../menu-group";
import { MenuItemDivider } from "../menu-item-divider";
import { MenuItemResolver } from "../menu-item-resolver";

import type { MenuResolverProps } from "./types/menu-resolver-props.type";

/**
 * Menu resolver component
 */
export function MenuResolver(props: MenuResolverProps) {
	return (
		<MenuContainer {...props}>

			{props.groups.map((group, groupIndex) => (

				<MenuGroup
					groupIndex={groupIndex}
					key={group.id}
				>

					{group.sections.map((section, sectionIndex) => (

						<Fragment key={`${section.id}`}>

							{
								section.items.map(item => (
									<MenuItemResolver
										{...item}
										key={`item-${item.id}`}
									/>
								))
							}
							{
								(sectionIndex === (group.sections.length - 1)) ?
									<Fragment key="no-divider" /> :
									<MenuItemDivider key="divider" />
							}

						</Fragment>

					))}

				</MenuGroup>

			))}

		</MenuContainer>
	);
}
