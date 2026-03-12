import { useState } from "react";

import { Orientation } from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";
import {
	NavigationBar,
	type NavigationBarChildren,
	type NavigationBarItem
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

	const [itemId, setItemId] = useState<NavigationBarDemoItemId>(1);

	const [navigationBardemoItems] = useState<NavigationBarChildren<NavigationBarDemoItemId>>([
		resolveNavigationBarDemoItem(1, MaterialIconName.Add, true, 123),
		resolveNavigationBarDemoItem(2, MaterialIconName.Favorite, true),
		resolveNavigationBarDemoItem(3, MaterialIconName.Home, false),
		resolveNavigationBarDemoItem(4, MaterialIconName.Settings, true, 1234),
		resolveNavigationBarDemoItem(5, MaterialIconName.Star, true, 5)
	]);

	return (
		<>
			<DemoSection
				key="navigation-bar-horizontal"
				title="Navigation Bar - Horizontal"
			>
				<NavigationBar<NavigationBarDemoItemId>
					itemId={itemId}
					itemOrientation={Orientation.Horizontal}
					onItemChange={setItemId}
				>
					{navigationBardemoItems}
				</NavigationBar>
			</DemoSection>
			<DemoSection
				key="navigation-bar-vertical"
				title="Navigation Bar - Vertical"
			>
				<NavigationBar<NavigationBarDemoItemId>
					itemId={itemId}
					itemOrientation={Orientation.Vertical}
					onItemChange={setItemId}
				>
					{navigationBardemoItems}
				</NavigationBar>
			</DemoSection>
		</>
	);
}

type NavigationBarDemoItemId = (1 | 2 | 3 | 4 | 5);

function resolveNavigationBarDemoItem(
	itemId: NavigationBarDemoItemId,
	iconName: MaterialIconName,
	showBadge: boolean,
	badgeLabel?: number
): NavigationBarItem<NavigationBarDemoItemId> {
	return {
		badgeLabel: badgeLabel,
		element: () => (
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
		iconName: iconName,
		itemId: itemId,
		label: `Item ${itemId}`,
		showBadge: showBadge
	};
}
