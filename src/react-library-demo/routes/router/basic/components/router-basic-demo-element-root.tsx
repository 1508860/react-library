import type { ReactElement } from "react";

import { Orientation } from "@react-library/common";
import { useRouterNotifierContext, type RouterElementWithChildrenProps } from "@react-library/router";

import {
	DemoColumn,
	DemoColumnContainer,
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentChildrenItem,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow
} from "@react-library-demo/shared";

import { RouterBasicDemoSegmentId } from "../enums/router-basic-demo-segment-id.type";

/**
 * Example router segment component root
 * @param props
 */
export function ReactLibraryRouterBasicDemoElementRoot(props: RouterElementWithChildrenProps): ReactElement {
	const routerNotifier = useRouterNotifierContext();
	return (
		<DemoColumnContainer width="100%">
			<DemoColumn
				key="route-list"
				weight={1}
			>
				<DemoContent
					align={DemoContentAlign.Center}
					childrenType={DemoContentChildren.Items}
					colourScheme={DemoContentColourScheme.Primary}
					height="auto"
					includeRenderCounter={true}
					items={Object.values(RouterBasicDemoSegmentId).map(segmentId => ({
						id: segmentId,
						type: DemoContentChildrenItem.Button,
						action: () => routerNotifier.notify(segmentId),
						text: `Route To: ${segmentId}`
					}))}
					justify={DemoContentJustify.Start}
					key="children"
					orientation={Orientation.Vertical}
					overflow={DemoContentOverflow.Auto}
					paddingBottom={20}
					paddingLeft={20}
					paddingRight={20}
					paddingTop={20}
					width="100%"
				/>
			</DemoColumn>
			<DemoColumn
				key="route-elements"
				weight={5}
			>
				{props.children}
			</DemoColumn>
		</DemoColumnContainer>
	);
}
