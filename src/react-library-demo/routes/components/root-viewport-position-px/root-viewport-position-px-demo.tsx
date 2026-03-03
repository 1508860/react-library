import { Orientation } from "@react-library/common";
import {
	RootViewportPositionPx,
	useRootViewportPositionPxContext
} from "@react-library/components";

import {
	DemoContent,
	DemoContentChildren,
	DemoContentChildrenItem,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoResize,
	DemoSection,
	type DemoContentChildrenItemProps
} from "@react-library-demo/shared";

export function ReactLibraryComponentsRootViewportPositionPxDemo() {

	return (
		<DemoSection title="Root Viewport Position PX">
			<DemoResize
				height={500}
				resizeHorizontal={true}
				resizeVertical={true}
				width={500}
			>
				<RootViewportPositionPx>
					<DemoContent
						childrenType={DemoContentChildren.Any}
						colourScheme={DemoContentColourScheme.Primary}
						height="100%"
						includeRenderCounter={true}
						justify={DemoContentJustify.Center}
						orientation={Orientation.Vertical}
						width="100%"
					>
						<ChildComponent />
					</DemoContent>
				</RootViewportPositionPx>
			</DemoResize>
		</DemoSection>
	);
}

function ChildComponent() {

	const rootViewportPositionPx = useRootViewportPositionPxContext()

	return (
		<DemoContent
			childrenType={DemoContentChildren.Items}
			colourScheme={DemoContentColourScheme.Secondary}
			height="100%"
			includeRenderCounter={true}
			items={Object.entries(rootViewportPositionPx).map<DemoContentChildrenItemProps>(entry => ({
				type: DemoContentChildrenItem.Text,
				id: entry[0],
				text: `${entry[0]}: ${entry[1]}`
			}))}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			width="100%"
		/>
	);
}
