import type { DemoSelectorSubItems } from "@react-library-demo/shared";

import { ReactLibraryComponentsDemo } from "./react-library-components-demo.type";
import { ReactLibraryComponentsInputCurrencyDemo } from "./input-currency";
import { ReactLibraryComponentsModalDemo } from "./modal";
import { ReactLibraryComponentsPointerMoveDemo } from "./pointer-move";
import { ReactLibraryComponentsRootViewportPositionPxDemo } from "./root-viewport-position-px";
import { ReactLibraryComponentsTooltipsDemo } from "./tooltips";
import { ReactLibraryComponentsTransitionDemo } from "./transition";
import { ReactLibraryComponentsViewDividerDemo } from "./view-divider";
import { ReactLibraryComponentsVirtualScrollDemo } from "./virtual-scroll";

export function ReactLibraryComponentsDemoList(): DemoSelectorSubItems<ReactLibraryComponentsDemo> {
	return [
		{
			element: () => <ReactLibraryComponentsInputCurrencyDemo />,
			id: ReactLibraryComponentsDemo.InputCurrency,
			title: "Input Currency"
		},
		{
			element: () => <ReactLibraryComponentsModalDemo />,
			id: ReactLibraryComponentsDemo.Modal,
			title: "Modal"
		},
		{
			element: () => <ReactLibraryComponentsPointerMoveDemo />,
			id: ReactLibraryComponentsDemo.PointerMove,
			title: "Pointer Move"
		},
		{
			element: () => <ReactLibraryComponentsRootViewportPositionPxDemo />,
			id: ReactLibraryComponentsDemo.RootViewportPositionPx,
			title: "Root Viewport Position PX"
		},
		{
			element: () => <ReactLibraryComponentsTooltipsDemo />,
			id: ReactLibraryComponentsDemo.Tooltips,
			title: "Tooltips"
		},
		{
			element: () => <ReactLibraryComponentsTransitionDemo />,
			id: ReactLibraryComponentsDemo.Transition,
			title: "Transition"
		},
		{
			element: () => <ReactLibraryComponentsViewDividerDemo />,
			id: ReactLibraryComponentsDemo.ViewDivider,
			title: "View Divider"
		},
		{
			element: () => <ReactLibraryComponentsVirtualScrollDemo />,
			id: ReactLibraryComponentsDemo.VirtualScroll,
			title: "Virtual Scroll"
		}
	];
}
