import type { DemoSelectorSubItems } from "@react-library-demo/shared";

import { ReactLibraryRouterDemo } from "./react-library-router-demo.type";
import { ReactLibraryRouterBasicDemo } from "./basic";

export function ReactLibraryRouterDemoList(): DemoSelectorSubItems<ReactLibraryRouterDemo> {
	return [
		{
			element: () => <ReactLibraryRouterBasicDemo />,
			id: ReactLibraryRouterDemo.Basic,
			title: "Basic"
		}
	];
}
