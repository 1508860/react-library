import { Orientation } from "@react-library/common";
import { ViewDivider } from "@react-library/components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow
} from "@react-library-demo/shared";

export function ReactLibraryComponentsViewDividerDemo() {
	return (
		<ViewDivider
			initialValue={40}
			minSizeEnd={200}
			minSizeStart={300}
			orientation={Orientation.Horizontal}
			separatorSize={100}
			staticView="start"
		>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Primary}
				height="100%"
				includeRenderCounter={true}
				justify={DemoContentJustify.Center}
				key="view-divider-view-1"
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				text={"This is view 1"}
				width="100%"
			/>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Tertiary}
				height="100%"
				includeRenderCounter={true}
				justify={DemoContentJustify.Center}
				key="view-divider-separator"
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				text={"Separator"}
				width="100%"
			/>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Secondary}
				height="100%"
				includeRenderCounter={true}
				justify={DemoContentJustify.Center}
				key="view-divider-view-2"
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				text={"This is view 2"}
				width="100%"
			/>
		</ViewDivider>
	);
}
