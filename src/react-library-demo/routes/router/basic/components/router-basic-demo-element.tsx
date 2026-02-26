import type { ReactElement } from "react";

import { Orientation } from "@react-library/common";
import type { RouterElementProps } from "@react-library/router";

import {
	DemoContent,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify
} from "@react-library-demo/shared";

/**
 * Example router segment component
 * @param props
 */
export function ReactLibraryRouterBasicDemoElement(props: RouterElementProps): ReactElement {
	return (
		<DemoContent
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Primary}
			height="100%"
			includeRenderCounter={true}
			justify={DemoContentJustify.Start}
			orientation={Orientation.Horizontal}
			text={`Segment: ${props.segmentId}`}
			width="100%"
		/>
	);
}
