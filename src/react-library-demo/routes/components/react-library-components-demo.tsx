import type { DemoSelectorSubItems } from "@react-library-demo/shared";

import { ReactLibraryComponentsDemo } from "./react-library-components-demo.type";
import { ReactLibraryComponentsFormDemo } from "./form";
import { ReactLibraryComponentsHoverLayerDemo } from "./hover-layer";
import { ReactLibraryComponentsIconSvgDemo } from "./icon-svg";
import { ReactLibraryComponentsInputCurrencyDemo } from "./input-currency";
import { ReactLibraryComponentsModalDemo } from "./modal";
import { ReactLibraryComponentsOverlayPortalDemo } from "./overlay-portal";
import { ReactLibraryComponentsPointerMoveDemo } from "./pointer-move";
import { ReactLibraryComponentsRootViewportPositionPxDemo } from "./root-viewport-position-px";
import { ReactLibraryComponentsTooltipsDemo } from "./tooltips";
import { ReactLibraryComponentsTransitionDemo } from "./transition";
import { ReactLibraryComponentsViewDividerDemo } from "./view-divider";
import { ReactLibraryComponentsVirtualScrollDemo } from "./virtual-scroll";

export function ReactLibraryComponentsDemoList(): DemoSelectorSubItems<ReactLibraryComponentsDemo> {
	return [
		{
			element: () => <ReactLibraryComponentsFormDemo />,
			id: ReactLibraryComponentsDemo.Form,
			title: "Form"
		},
		{
			element: () => <ReactLibraryComponentsHoverLayerDemo />,
			id: ReactLibraryComponentsDemo.HoverLayer,
			title: "Hover Layer"
		},
		{
			element: () => <ReactLibraryComponentsIconSvgDemo />,
			id: ReactLibraryComponentsDemo.IconSvg,
			title: "Icon SVG"
		},
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
			element: () => <ReactLibraryComponentsOverlayPortalDemo />,
			id: ReactLibraryComponentsDemo.OverlayPortal,
			title: "Overlay Portal"
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
