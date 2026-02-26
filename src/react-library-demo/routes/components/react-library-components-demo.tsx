import type { DemoSelectorSubItems } from "@react-library-demo/shared";

import { ReactLibraryComponentsDemo } from "./react-library-components-demo.type";
import { ReactLibraryComponentsInputCurrencyDemo } from "./input-currency";
import { ReactLibraryComponentsTooltipsDemo } from "./tooltips";
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
			element: () => <ReactLibraryComponentsTooltipsDemo />,
			id: ReactLibraryComponentsDemo.Tooltips,
			title: "Tooltips"
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
