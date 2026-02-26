

import {
	CurrencyCodeProvider,
	CurrencyCode,
	LanguageCodeProvider,
	LanguageCode,
	ColourSchemeProvider,
	FontProvider
} from "@react-library/common";
import { OverlayPortal, RootViewportPositionPx } from "@react-library/components";

import { DemoSelector } from "@react-library-demo/shared";

import { DEMO_COLOUR_SCHEME, DEMO_FONT } from "./common";
import { ReactLibraryComponentsDemo, ReactLibraryComponentsDemoList } from "./components";
import { ReactLibraryMaterialIconsDemo, ReactLibraryMaterialIconsDemoList } from "./material-icons";
import { ReactLibraryRouterDemo, ReactLibraryRouterDemoList } from "./router";
import { ReactLibraryThemedComponentsDemoList, ReactLibraryThemedComponentsDemo } from "./themed-components";

export function ReactLibraryDemo() {
	return (
		<div style={{ height: "100vh", width: "100vw" }}>
			<RootViewportPositionPx>
				<CurrencyCodeProvider value={CurrencyCode.Gbp}>
					<LanguageCodeProvider value={LanguageCode.En_Gb}>
						<ColourSchemeProvider value={DEMO_COLOUR_SCHEME}>
							<FontProvider value={DEMO_FONT}>
								<OverlayPortal>
									<DemoSelector<
										ReactLibraryComponentsDemo |
										ReactLibraryMaterialIconsDemo |
										ReactLibraryRouterDemo |
										ReactLibraryThemedComponentsDemo
									>
										defaultSubItemId={ReactLibraryComponentsDemo.Tooltips}
									>
										{{
											id: 1,
											subItems: ReactLibraryComponentsDemoList(),
											title: "Components"
										}}
										{{
											id: 2,
											subItems: ReactLibraryMaterialIconsDemoList(),
											title: "Material Icons"
										}}
										{{
											id: 3,
											subItems: ReactLibraryRouterDemoList(),
											title: "Router"
										}}
										{{
											id: 4,
											subItems: ReactLibraryThemedComponentsDemoList(),
											title: "Themed Components"
										}}
									</DemoSelector>
								</OverlayPortal>
							</FontProvider>
						</ColourSchemeProvider>
					</LanguageCodeProvider>
				</CurrencyCodeProvider>
			</RootViewportPositionPx>
		</div>
	);
}
