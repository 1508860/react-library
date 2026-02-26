import type { ReactElement } from "react";

import { Orientation } from "@react-library/common";
import type { RouterElementWithChildrenProps } from "@react-library/router";

import {
	DemoContent,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify
} from "@react-library-demo/shared";

/**
 * Example router segment component that can have children
 * @param props
 */
export function ReactLibraryRouterBasicDemoElementWithChildren(props: RouterElementWithChildrenProps): ReactElement {
	return (
		<>
			<DemoContent
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Primary}
				height={20}
				includeRenderCounter={true}
				justify={DemoContentJustify.Start}
				key="element"
				orientation={Orientation.Horizontal}
				text={`Segment: ${props.segmentId}`}
				width="100%"
			/>
			<DemoContent
				childrenType={DemoContentChildren.Any}
				colourScheme={DemoContentColourScheme.Primary}
				height="auto"
				justify={DemoContentJustify.Start}
				key="children"
				orientation={Orientation.Vertical}
				width="100%"
			>
				{props.children}
			</DemoContent>
		</>
	);
}
