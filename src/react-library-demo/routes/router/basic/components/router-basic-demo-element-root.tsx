import type { ReactElement } from "react";

import { useRouterNotifierContext, type RouterElementWithChildrenProps } from "@react-library/router";

import { DemoColumn } from "@react-library-demo/shared";

import { RouterBasicDemoSegmentId } from "../enums/router-basic-demo-segment-id.type";

/**
 * Example router segment component root
 * @param props
 */
export function ReactLibraryRouterBasicDemoElementRoot(props: RouterElementWithChildrenProps): ReactElement {
	const routerNotifier = useRouterNotifierContext();
	return (
		<>
			<DemoColumn
				key="route-list"
				weight={1}
			>
				<div style={{
					display: "inline-flex",
					flexDirection: "column",
					gap: 4
				}}>
					{
						Object.values(RouterBasicDemoSegmentId).map(segmentId => (
							<button
								key={`button-${segmentId}`}
								onClick={() => routerNotifier.notify(segmentId)}
							>
								Route To: {segmentId}
							</button>
						))
					}
				</div>
			</DemoColumn>
			<DemoColumn
				key="route-elements"
				weight={10}
			>
				{props.children}
			</DemoColumn>
		</>
	);
}
