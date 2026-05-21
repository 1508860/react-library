import { useCallback, useState, type ReactElement } from "react";

import { Orientation, useResolveState, type Callback } from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";
import {
	NavigationRail,
	NavigationRailItemId,
	NavigationRailMenuStyle,
	type NavigationRailItem,
	type NavigationRailItems
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

export function ReactLibraryThemedComponentsNavigationRailDemo() {

	const [activeItemId, setActiveItemId] = useState<NavigationRailItemId>(NavigationRailItemId.Item1);
	const [isExpanded, setIsExpanded] = useState<boolean>(true);

	const [headerChildren] = useState<ReactElement>(() => <HeaderChildren />)

	const [navigationRaildemoItems] = useState<NavigationRailItems>([
		resolveNavigationRailDemoItem(1, MaterialIconName.Add, true, 123),
		resolveNavigationRailDemoItem(2, MaterialIconName.Favorite, true),
		resolveNavigationRailDemoItem(3, MaterialIconName.Home, false),
		resolveNavigationRailDemoItem(4, MaterialIconName.Settings, true, 1234),
		resolveNavigationRailDemoItem(5, MaterialIconName.Star, true, 5),
		resolveNavigationRailDemoItem(6, MaterialIconName.Search, false),
		resolveNavigationRailDemoItem(7, MaterialIconName.Delete, true, 321)
	]);

	const resolveElement = useCallback<Callback<ReactElement>>(
		() => (
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Primary}
				height="100%"
				includeRenderCounter={true}
				justify={DemoContentJustify.Center}
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				text={`Navigation Item - ${activeItemId}`}
				width="100%"
			/>
		),
		[activeItemId]
	);
	const element = useResolveState(resolveElement);

	return (
		<>
			<DemoSection
				contentHeight={600}
				key="navigation-rail-standard"
				title="Navigation Rail - Standard"
			>
				<NavigationRail
					activeItemId={activeItemId}
					centerItems={true}
					expandedMenuWidth={220}
					isExpanded={isExpanded}
					items={navigationRaildemoItems}
					menuStyle={NavigationRailMenuStyle.Standard}
					navigationHeaderChildren={headerChildren}
					onExpandedChange={setIsExpanded}
					onItemChange={setActiveItemId}
				>
					{element}
				</NavigationRail>
			</DemoSection>
			<DemoSection
				contentHeight={600}
				key="navigation-rail-immersive-standard"
				title="Navigation Rail - Immersive Standard"
			>
				<NavigationRail
					activeItemId={activeItemId}
					centerItems={true}
					expandedMenuWidth={220}
					isExpanded={isExpanded}
					items={navigationRaildemoItems}
					menuStyle={NavigationRailMenuStyle.ImmersiveStandard}
					navigationHeaderChildren={headerChildren}
					onExpandedChange={setIsExpanded}
					onItemChange={setActiveItemId}
				>
					{element}
				</NavigationRail>
			</DemoSection>
			<DemoSection
				contentHeight={600}
				key="navigation-rail-immersive-modal"
				title="Navigation Rail - Immersive Modal"
			>
				<NavigationRail
					activeItemId={activeItemId}
					centerItems={true}
					expandedMenuWidth={220}
					isExpanded={isExpanded}
					items={navigationRaildemoItems}
					menuStyle={NavigationRailMenuStyle.ImmersiveModal}
					navigationHeaderChildren={headerChildren}
					onExpandedChange={setIsExpanded}
					onItemChange={setActiveItemId}
				>
					{element}
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

function resolveNavigationRailDemoItem(
	itemId: NavigationRailItemId,
	iconName: MaterialIconName,
	showBadge: boolean,
	badgeLabel?: number
): NavigationRailItem {
	return {
		badgeLabel: badgeLabel,
		iconName: iconName,
		itemId: itemId,
		label: `Item ${itemId}`,
		showBadge: showBadge
	};
}
