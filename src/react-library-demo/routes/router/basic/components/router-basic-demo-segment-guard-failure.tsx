import type { ReactElement } from "react";

import { Orientation } from "@react-library/common";
import type { RouterGuardFailureProps } from "@react-library/router";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow
} from "@react-library-demo/shared";

/**
 * Example router guard segment failure component
 * @param props
 */
export function ReactLibraryRouterBasicDemoSegmentGuardFailure(props: RouterGuardFailureProps): ReactElement {
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
			text={`Segment Guard: failed to route to - ${props.segmentId}`}
			width="100%"
		/>
	);
}
