import type { ReactElement } from "react";

import { Orientation } from "@react-library/common";
import type { RouterGuardLoadingProps } from "@react-library/router";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow
} from "@react-library-demo/shared";

/**
 * Example router guard segment loading component
 * @param props
 */
export function ReactLibraryRouterBasicDemoSegmentGuardLoading(props: RouterGuardLoadingProps): ReactElement {
	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Primary}
			height="100%"
			includeRenderCounter={true}
			justify={DemoContentJustify.Start}
			orientation={Orientation.Horizontal}
			overflow={DemoContentOverflow.Auto}
			text={`Segment Guard Loading - ${props.segmentId}`}
			width="100%"
		/>
	);
}
