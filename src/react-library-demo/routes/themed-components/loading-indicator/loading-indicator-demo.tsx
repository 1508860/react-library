import { ColourSchemeStyle, Orientation } from "@react-library/common";
import {
	LoadingIndicator,
	LoadingIndicatorPosition,
	LoadingIndicatorStyle
} from "@react-library/themed-components";

import {
	DemoContent,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsLoadingIndicatorDemo() {
	return (
		<>
			<DemoSection
				key="default"
				title="Loading Indicator - Default"
			>
				<DemoContent
					childrenType={DemoContentChildren.Any}
					colourScheme={DemoContentColourScheme.Primary}
					height={300}
					includeRenderCounter={true}
					justify={DemoContentJustify.Center}
					orientation={Orientation.Vertical}
					width={300}
				>
					<LoadingIndicator
						colourSchemeStyle={ColourSchemeStyle.Primary}
						position={LoadingIndicatorPosition.Fill}
						style={LoadingIndicatorStyle.Default}
					/>
				</DemoContent>
			</DemoSection>
			<DemoSection
				key="contained"
				title="Loading Indicator - Contained"
			>
				<DemoContent
					childrenType={DemoContentChildren.Any}
					colourScheme={DemoContentColourScheme.Primary}
					height={300}
					includeRenderCounter={true}
					justify={DemoContentJustify.Center}
					orientation={Orientation.Vertical}
					width={300}
				>
					<LoadingIndicator
						colourSchemeStyle={ColourSchemeStyle.Primary}
						position={LoadingIndicatorPosition.Fill}
						style={LoadingIndicatorStyle.Contained}
					/>
				</DemoContent>
			</DemoSection>
		</>
	);
}
