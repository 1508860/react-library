import { useEffect, useRef, useState, type ReactElement } from "react";

import type { NavigationBarItemId } from "../../types/navigation-bar-item-id.type";
import type { NavigationBarItem } from "../../types/navigation-bar-item.type";
import { NAVIGATION_BAR_CONTENT_STYLE } from "./styles/navigation-bar-content-style.const";
import type { NavigationBarContentProps } from "./types/navigation-bar-content-props.type";

/**
 * Component to handle a navigation bar content
 * @param props
 */
export function NavigationBarContent<TItemId extends NavigationBarItemId>(props: NavigationBarContentProps<TItemId>) {

	// Active child
	const [activeChildElement, setActiveChildElement] = useState<ReactElement | undefined>(undefined);
	const activeChildId = useRef<TItemId | undefined>(undefined);

	useEffect(
		() => {
			const activeChild: NavigationBarItem<TItemId> | undefined = props.children.find(child => child.itemId === props.activeItemId);

			// Terminate if no change in id
			if (activeChildId.current === activeChild?.itemId) return;

			activeChildId.current = activeChild?.itemId;
			setActiveChildElement(activeChild?.element);
		},
		[props.children, props.activeItemId]
	);

	return (
		<div style={NAVIGATION_BAR_CONTENT_STYLE}>
			{activeChildElement}
		</div>
	);
}
