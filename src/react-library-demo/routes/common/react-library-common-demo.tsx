import type { DemoSelectorSubItems } from "@react-library-demo/shared";

import { ReactLibraryCommonDemo } from "./react-library-common-demo.type";
import { ReactLibraryCommonDateDemo } from "./date";

export function ReactLibraryCommonDemoList(): DemoSelectorSubItems<ReactLibraryCommonDemo> {
	return [
		{
			element: () => <ReactLibraryCommonDateDemo />,
			id: ReactLibraryCommonDemo.Date,
			title: "Date"
		}
	];
}
