import type { ReactElement } from "react";

import { Orientation } from "@react-library/common";
import type { RouterGuardFailureProps } from "@react-library/router";

import {
	DemoContent,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify
} from "@react-library-demo/shared";

/**
 * Example router guard default failure component
 * @param props
 */
export function ReactLibraryRouterBasicDemoDefaultGuardFailure(props: RouterGuardFailureProps): ReactElement {
	return (
		<DemoContent
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Primary}
			height="100%"
			includeRenderCounter={true}
			justify={DemoContentJustify.Start}
			orientation={Orientation.Horizontal}
			text={`Default Guard: failed to route to - ${props.segmentId}`}
			width="100%"
		/>
	);
}
