import { useState, type ReactElement } from "react";

import { MaterialIconName } from "@react-library/material-icons";
import {
	NavigationRail,
	NavigationRailMenuStyle,
	type NavigationRailChildren,
	type NavigationRailItem
} from "@react-library/themed-components";

import { DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsNavigationRailDemo() {

	const [activeItemId, setActiveItemId] = useState<NavigationRailDemoItemId>(1);
	const [isExpanded, setIsExpanded] = useState<boolean>(true);

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
				contentHeight={500}
				key="navigation-rail-standard"
				title="Navigation Rail - Standard"
			>
				<NavigationRail<NavigationRailDemoItemId>
					centerItems={true}
					expandedMenuWidth={220}
					expandedOnChange={setIsExpanded}
					isExpanded={isExpanded}
					activeItemId={activeItemId}
					itemOnChange={setActiveItemId}
					menuStyle={NavigationRailMenuStyle.Standard}
					navigationHeaderChildren={HeaderContainer}
				>
					{navigationRaildemoItems}
				</NavigationRail>
			</DemoSection>
			<DemoSection
				contentHeight={500}
				key="navigation-rail-immersive-standard"
				title="Navigation Rail - Immersive Standard"
			>
				<NavigationRail<NavigationRailDemoItemId>
					centerItems={true}
					expandedMenuWidth={220}
					expandedOnChange={setIsExpanded}
					isExpanded={isExpanded}
					activeItemId={activeItemId}
					itemOnChange={setActiveItemId}
					menuStyle={NavigationRailMenuStyle.ImmersiveStandard}
					navigationHeaderChildren={HeaderContainer}
				>
					{navigationRaildemoItems}
				</NavigationRail>
			</DemoSection>
			<DemoSection
				contentHeight={500}
				key="navigation-rail-immersive-modal"
				title="Navigation Rail - Immersive Modal"
			>
				<NavigationRail<NavigationRailDemoItemId>
					centerItems={true}
					expandedMenuWidth={220}
					expandedOnChange={setIsExpanded}
					isExpanded={isExpanded}
					activeItemId={activeItemId}
					itemOnChange={setActiveItemId}
					menuStyle={NavigationRailMenuStyle.ImmersiveModal}
					navigationHeaderChildren={HeaderContainer}
				>
					{navigationRaildemoItems}
				</NavigationRail>
			</DemoSection>
		</>
	);
}

function HeaderContainer(): ReactElement {
	return (
		<div
			style={{
				backgroundColor: "black",
				height: 40,
				width: "100%"
			}}
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
		element: () => (
			<div
				style={{
					alignItems: "center",
					backgroundColor: "coral",
					display: "flex",
					height: "100%",
					justifyContent: "center",
					width: "100%"
				}}
			>
				Navigation Item - {itemId}
			</div>
		),
		iconName: iconName,
		itemId: itemId,
		label: `Item ${itemId}`,
		showBadge: showBadge,
		badgeLabel: badgeLabel
	};
}
