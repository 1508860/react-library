import { useCallback, useState, type ReactElement } from "react";

import { Orientation, useResolveState, type Callback } from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";
import {
	NavigationBar,
	NavigationBarItemId,
	type NavigationBarItem,
	type NavigationBarItems
} from "@react-library/themed-components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsNavigationBarDemo() {

	const [itemId, setItemId] = useState<NavigationBarItemId>(() => NavigationBarItemId.Item1);

	const [navigationBardemoItems] = useState<NavigationBarItems>(() => [
		resolveNavigationBarDemoItem(NavigationBarItemId.Item1, MaterialIconName.Add, true, 123),
		resolveNavigationBarDemoItem(NavigationBarItemId.Item2, MaterialIconName.Favorite, true),
		resolveNavigationBarDemoItem(NavigationBarItemId.Item3, MaterialIconName.Home, false),
		resolveNavigationBarDemoItem(NavigationBarItemId.Item4, MaterialIconName.Settings, true, 1234),
		resolveNavigationBarDemoItem(NavigationBarItemId.Item5, MaterialIconName.Star, true, 5)
	]);

	const resolveElement = useCallback<Callback<ReactElement>>(
		() => (
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Primary}
				height={200}
				includeRenderCounter={true}
				justify={DemoContentJustify.Center}
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				text={`Navigation Item - ${itemId}`}
				width="100%"
			/>
		),
		[itemId]
	);
	const element = useResolveState(resolveElement);

	return (
		<>
			<DemoSection
				key="navigation-bar-horizontal"
				title="Navigation Bar - Horizontal"
			>
				<NavigationBar
					itemId={itemId}
					itemOrientation={Orientation.Horizontal}
					items={navigationBardemoItems}
					onItemChange={setItemId}
				>
					{element}
				</NavigationBar>
			</DemoSection>
			<DemoSection
				key="navigation-bar-vertical"
				title="Navigation Bar - Vertical"
			>
				<NavigationBar
					itemId={itemId}
					itemOrientation={Orientation.Vertical}
					items={navigationBardemoItems}
					onItemChange={setItemId}
				>
					{element}
				</NavigationBar>
			</DemoSection>
		</>
	);
}

function resolveNavigationBarDemoItem(
	itemId: NavigationBarItemId,
	iconName: MaterialIconName,
	showBadge: boolean,
	badgeLabel?: number
): NavigationBarItem {
	return {
		badgeLabel: badgeLabel,
		iconName: iconName,
		itemId: itemId,
		label: `Item ${itemId}`,
		showBadge: showBadge
	};
}
