import { useState, type ReactElement } from "react";

import { MaterialIconName } from "@react-library/material-icons";
import {
	NavigationRail,
	NavigationRailMenuStyle,
	type NavigationRailChildren,
	type NavigationRailItem
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
import { Orientation } from "@react-library/common";

export function ReactLibraryThemedComponentsNavigationRailDemo() {

	const [activeItemId, setActiveItemId] = useState<NavigationRailDemoItemId>(1);
	const [isExpanded, setIsExpanded] = useState<boolean>(true);

	const [headerChildren] = useState<ReactElement>(() => <HeaderChildren />)

	const [navigationRaildemoItems] = useState<NavigationRailChildren<NavigationRailDemoItemId>>([
		resolveNavigationRailDemoItem(1, MaterialIconName.Add, true, 123),
		resolveNavigationRailDemoItem(2, MaterialIconName.Favorite, true),
		resolveNavigationRailDemoItem(3, MaterialIconName.Home, false),
		resolveNavigationRailDemoItem(4, MaterialIconName.Settings, true, 1234),
		resolveNavigationRailDemoItem(5, MaterialIconName.Star, true, 5),
		resolveNavigationRailDemoItem(6, MaterialIconName.Search, false),
		resolveNavigationRailDemoItem(7, MaterialIconName.Delete, true, 321)
	]);

	return (
		<>
			<DemoSection
				contentHeight={600}
				key="navigation-rail-standard"
				title="Navigation Rail - Standard"
			>
				<NavigationRail<NavigationRailDemoItemId>
					activeItemId={activeItemId}
					centerItems={true}
					expandedMenuWidth={220}
					isExpanded={isExpanded}
					menuStyle={NavigationRailMenuStyle.Standard}
					navigationHeaderChildren={headerChildren}
					onExpandedChange={setIsExpanded}
					onItemChange={setActiveItemId}
				>
					{navigationRaildemoItems}
				</NavigationRail>
			</DemoSection>
			<DemoSection
				contentHeight={600}
				key="navigation-rail-immersive-standard"
				title="Navigation Rail - Immersive Standard"
			>
				<NavigationRail<NavigationRailDemoItemId>
					activeItemId={activeItemId}
					centerItems={true}
					expandedMenuWidth={220}
					isExpanded={isExpanded}
					menuStyle={NavigationRailMenuStyle.ImmersiveStandard}
					navigationHeaderChildren={headerChildren}
					onExpandedChange={setIsExpanded}
					onItemChange={setActiveItemId}
				>
					{navigationRaildemoItems}
				</NavigationRail>
			</DemoSection>
			<DemoSection
				contentHeight={600}
				key="navigation-rail-immersive-modal"
				title="Navigation Rail - Immersive Modal"
			>
				<NavigationRail<NavigationRailDemoItemId>
					activeItemId={activeItemId}
					centerItems={true}
					expandedMenuWidth={220}
					isExpanded={isExpanded}
					menuStyle={NavigationRailMenuStyle.ImmersiveModal}
					navigationHeaderChildren={headerChildren}
					onExpandedChange={setIsExpanded}
					onItemChange={setActiveItemId}
				>
					{navigationRaildemoItems}
				</NavigationRail>
			</DemoSection>
		</>
	);
}

function HeaderChildren(): ReactElement {
	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Any}
			colourScheme={DemoContentColourScheme.Secondary}
			height={80}
			includeRenderCounter={true}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			width="100%"
		/>
	);
}

type NavigationRailDemoItemId = (1 | 2 | 3 | 4 | 5 | 6 | 7);

function resolveNavigationRailDemoItem(
	itemId: NavigationRailDemoItemId,
	iconName: MaterialIconName,
	showBadge: boolean,
	badgeLabel?: number
): NavigationRailItem<NavigationRailDemoItemId> {
	return {
		badgeLabel: badgeLabel,
		element: () => (
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Primary}
				height="100%"
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
