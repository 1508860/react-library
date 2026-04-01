import type { DemoSelectorSubItems } from "@react-library-demo/shared";

import { ReactLibraryThemedComponentsDemo } from "./react-library-themed-components-demo.type";
import { ReactLibraryThemedComponentsBadgeDemo } from "./badge";
import { ReactLibraryThemedComponentsButtonDemo } from "./button";
import { ReactLibraryThemedComponentsButtonGroupDemo } from "./button-group";
import { ReactLibraryFloatingButtonGroupDemo } from "./floating-button-group";
import { ReactLibraryThemedComponentsLoadingIndicatorDemo } from "./loading-indicator";
import { ReactLibraryThemedComponentsNavigationBarDemo } from "./navigation-bar";
import { ReactLibraryThemedComponentsNavigationRailDemo } from "./navigation-rail";
import { ReactLibraryThemedComponentsProgressIndicatorDemo } from "./progress-indicator";
import { ReactLibraryThemedComponentsSideSheetDemo } from "./side-sheet";
import { ReactLibraryThemedComponentsTooltipsDemo } from "./tooltips";

export function ReactLibraryThemedComponentsDemoList(): DemoSelectorSubItems<ReactLibraryThemedComponentsDemo> {
	return [
		{
			element: () => <ReactLibraryThemedComponentsBadgeDemo />,
			id: ReactLibraryThemedComponentsDemo.Badge,
			title: "Badge"
		},
		{
			element: () => <ReactLibraryThemedComponentsButtonDemo />,
			id: ReactLibraryThemedComponentsDemo.Button,
			title: "Button"
		},
		{
			element: () => <ReactLibraryThemedComponentsButtonGroupDemo />,
			id: ReactLibraryThemedComponentsDemo.ButtonGroup,
			title: "Button Group"
		},
		{
			element: () => <ReactLibraryFloatingButtonGroupDemo />,
			id: ReactLibraryThemedComponentsDemo.FloatingButtonGroup,
			title: "Floating Button Group"
		},
		{
			element: () => <ReactLibraryThemedComponentsLoadingIndicatorDemo />,
			id: ReactLibraryThemedComponentsDemo.LoadingIndicator,
			title: "Loading Indicator"
		},
		{
			element: () => <ReactLibraryThemedComponentsNavigationBarDemo />,
			id: ReactLibraryThemedComponentsDemo.NavigationBar,
			title: "Navigation Bar"
		},
		{
			element: () => <ReactLibraryThemedComponentsNavigationRailDemo />,
			id: ReactLibraryThemedComponentsDemo.NavigationRail,
			title: "Navigation Rail"
		},
		{
			element: () => <ReactLibraryThemedComponentsProgressIndicatorDemo />,
			id: ReactLibraryThemedComponentsDemo.ProgressIndicator,
			title: "Progress Indicator"
		},
		{
			element: () => <ReactLibraryThemedComponentsSideSheetDemo />,
			id: ReactLibraryThemedComponentsDemo.SideSheet,
			title: "Side Sheet"
		},
		{
			element: () => <ReactLibraryThemedComponentsTooltipsDemo />,
			id: ReactLibraryThemedComponentsDemo.Tooltips,
			title: "Tooltips"
		}
	];
}
