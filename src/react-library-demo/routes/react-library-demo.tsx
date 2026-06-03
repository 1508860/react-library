

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

import { DEMO_COLOUR_SCHEME, DEMO_FONT, ReactLibraryCommonDemo, ReactLibraryCommonDemoList } from "./common";
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
										ReactLibraryCommonDemo |
										ReactLibraryComponentsDemo |
										ReactLibraryMaterialIconsDemo |
										ReactLibraryRouterDemo |
										ReactLibraryThemedComponentsDemo
									>
										defaultSubItemId={ReactLibraryComponentsDemo.Form}
									>
										{{
											id: 1,
											subItems: ReactLibraryCommonDemoList(),
											title: "Common"
										}}
										{{
											id: 2,
											subItems: ReactLibraryComponentsDemoList(),
											title: "Components"
										}}
										{{
											id: 3,
											subItems: ReactLibraryMaterialIconsDemoList(),
											title: "Material Icons"
										}}
										{{
											id: 4,
											subItems: ReactLibraryRouterDemoList(),
											title: "Router"
										}}
										{{
											id: 5,
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
