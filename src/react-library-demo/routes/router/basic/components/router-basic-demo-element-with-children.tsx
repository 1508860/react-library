import type { ReactElement } from "react";

import { Orientation } from "@react-library/common";
import type { RouterElementWithChildrenProps } from "@react-library/router";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow
} from "@react-library-demo/shared";

/**
 * Example router segment component that can have children
 * @param props
 */
export function ReactLibraryRouterBasicDemoElementWithChildren(props: RouterElementWithChildrenProps): ReactElement {
	return (
		<>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Primary}
				height={20}
				includeRenderCounter={true}
				justify={DemoContentJustify.Start}
				key="element"
				orientation={Orientation.Horizontal}
				overflow={DemoContentOverflow.Auto}
				text={`Segment: ${props.segmentId}`}
				width="100%"
			/>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Any}
				colourScheme={DemoContentColourScheme.Primary}
				height="auto"
				justify={DemoContentJustify.Start}
				key="children"
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				width="100%"
			>
				{props.children}
			</DemoContent>
		</>
	);
}
