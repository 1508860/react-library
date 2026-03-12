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
 * Example router guard default failure component
 * @param props
 */
export function ReactLibraryRouterBasicDemoDefaultGuardFailure(props: RouterGuardFailureProps): ReactElement {
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
			text={`Default Guard: failed to route to - ${props.segmentId}`}
			width="100%"
		/>
	);
}
