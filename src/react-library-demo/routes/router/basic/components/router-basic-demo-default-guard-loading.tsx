import type { ReactElement } from "react";

import { Orientation } from "@react-library/common";
import type { RouterGuardLoadingProps } from "@react-library/router";

import {
	DemoContent,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify
} from "@react-library-demo/shared";

/**
 * Example router guard default loading component
 * @param props
 */
export function ReactLibraryRouterBasicDemoDefaultGuardLoading(props: RouterGuardLoadingProps): ReactElement {
	return (
		<DemoContent
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Primary}
			height="100%"
			includeRenderCounter={true}
			justify={DemoContentJustify.Start}
			orientation={Orientation.Horizontal}
			text={`Default Guard Loading - ${props.segmentId}`}
			width="100%"
		/>
	);
}
