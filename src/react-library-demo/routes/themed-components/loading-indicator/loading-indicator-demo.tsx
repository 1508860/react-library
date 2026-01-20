import { ColourSchemeStyle } from "@react-library/common";
import {
	LoadingIndicator,
	LoadingIndicatorPosition,
	LoadingIndicatorStyle
} from "@react-library/themed-components";

import { DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsLoadingIndicatorDemo() {
	return (
		<>
			<DemoSection
				key="default"
				title="Loading Indicator - Default"
			>
				<div
					style={{
						backgroundColor: "coral",
						height: 300,
						width: 300
					}}
				>
					<LoadingIndicator
						colourSchemeStyle={ColourSchemeStyle.Primary}
						position={LoadingIndicatorPosition.Fill}
						style={LoadingIndicatorStyle.Default}
					/>
				</div>
			</DemoSection>
			<DemoSection
				key="contained"
				title="Loading Indicator - Contained"
			>
				<div
					style={{
						backgroundColor: "coral",
						height: 300,
						width: 300
					}}
				>
					<LoadingIndicator
						colourSchemeStyle={ColourSchemeStyle.Primary}
						position={LoadingIndicatorPosition.Fill}
						style={LoadingIndicatorStyle.Contained}
					/>
				</div>
			</DemoSection>
		</>
	);
}
