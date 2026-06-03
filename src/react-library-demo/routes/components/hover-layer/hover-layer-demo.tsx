import { useState } from "react";

import {
	HexRgb,
	Orientation,
	UseArrayIncrementDirection,
	useArrayIncrementState,
	type Colour,
	type UseArrayIncrementStateProps
} from "@react-library/common";
import {
	HoverLayer,
	HoverLayerColourProvider,
	HoverLayerShowProvider
} from "@react-library/components";

import {
	DEMO_LOREM_IPSUM,
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryComponentsHoverLayerDemo() {

	const [hoverLayerColour] = useState<Colour>(() => new HexRgb("00", "00", "00").toColourWithStyleOpacity(0.2))

	const [hoverLayerStates] = useState<Array<boolean>>(() => [false, true])
	const [increpementProps] = useState<UseArrayIncrementStateProps>(() => ({
		intervalProps: {
			direction: UseArrayIncrementDirection.Forwards,
			intervalMs: 1000
		}
	}));

	const { state: showHoverLayer } = useArrayIncrementState<boolean, Array<boolean>>(hoverLayerStates, increpementProps);

	return (
		<DemoSection title="Hover Layer">
			<DemoItem label={`Show: ${showHoverLayer}`}>
				<DemoContent
					align={DemoContentAlign.Center}
					childrenType={DemoContentChildren.Any}
					colourScheme={DemoContentColourScheme.Primary}
					height={500}
					justify={DemoContentJustify.Center}
					orientation={Orientation.Vertical}
					overflow={DemoContentOverflow.Auto}
					paddingBottom={50}
					paddingLeft={50}
					paddingRight={50}
					paddingTop={50}
					width={500}
				>
					<span>{DEMO_LOREM_IPSUM}</span>
					<HoverLayerColourProvider colour={hoverLayerColour}>
						<HoverLayerShowProvider show={showHoverLayer}>
							<HoverLayer />
						</HoverLayerShowProvider>
					</HoverLayerColourProvider>
				</DemoContent>
			</DemoItem>
		</DemoSection>
	);
}
