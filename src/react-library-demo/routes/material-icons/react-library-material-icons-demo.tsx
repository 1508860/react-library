import type { DemoSelectorSubItems } from "@react-library-demo/shared";

import { ReactLibraryMaterialIconsDemo } from "./react-library-material-icons-demo.type";
import { ReactLibraryMaterialIconsDefaultDemo } from "./default";
import { ReactLibraryMaterialIconsDefaultFilledDemo } from "./default-filled";
import { ReactLibraryMaterialIconsThickDemo } from "./thick";

export function ReactLibraryMaterialIconsDemoList(): DemoSelectorSubItems<ReactLibraryMaterialIconsDemo> {
	return [
		{
			element: () => <ReactLibraryMaterialIconsDefaultDemo />,
			id: ReactLibraryMaterialIconsDemo.Default,
			title: "Default"
		},
		{
			element: () => <ReactLibraryMaterialIconsDefaultFilledDemo />,
			id: ReactLibraryMaterialIconsDemo.DefaultFilled,
			title: "Default Filled"
		},
		{
			element: () => <ReactLibraryMaterialIconsThickDemo />,
			id: ReactLibraryMaterialIconsDemo.Thick,
			title: "Thick"
		}
	];
}
