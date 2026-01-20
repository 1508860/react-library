import { Fragment, useState } from "react";

import { useFontContext } from "@react-library/common";

import type {
	IDemoSelectorProps,
	IDemoSelectorSubItem
} from "./demo-selector-props.interface";
import {
	demoSelctorStyle,
	demoSelectorContentStyle,
	demoSelectorItemListStyle,
	demoSelectorItemStyle,
	demoSelectorSubItemStyle
} from "./demo-selector-style.function";

export function DemoSelector<TSubItemId>(props: IDemoSelectorProps<TSubItemId>) {

	const font = useFontContext();

	const [currentSubItem, setCurrentSubItem] = useState<IDemoSelectorSubItem<TSubItemId>>(() => {
		if (props.defaulSubItemId !== undefined) {
			for (let itemIndex = 0; itemIndex < props.children.length; itemIndex++) {
				const defaultSubItem = props.children[itemIndex].subItems.find(subItem => subItem.id === props.defaulSubItemId);
				if (!defaultSubItem) continue
				return defaultSubItem;
			}
		}
		return props.children[0].subItems[0]
	});

	return (
		<div
			style={demoSelctorStyle()}
		>
			<div
				key="list"
				style={demoSelectorItemListStyle()}
			>
				{
					props.children.map(child => (
						<Fragment key={`fragment-${child.id}`}>
							<div
								key={`item-${child.id}`}
								style={demoSelectorItemStyle(font)}
							>
								{child.title}
							</div>
							{child.subItems.map(subItem => (
								<div
									key={`item-${child.id}-sub-item-${subItem.id}`}
									onClick={() => setCurrentSubItem(subItem)}
									style={demoSelectorSubItemStyle(font, currentSubItem.id === subItem.id)}
								>
									{subItem.title}
								</div>
							))}
						</Fragment>
					))
				}
			</div>
			<div
				key="content"
				style={demoSelectorContentStyle()}
			>
				{currentSubItem.element()}
			</div>
		</div>
	);
}
