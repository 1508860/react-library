import type { ReactElement } from "react";

import { RouterChildOutlet, useRouterNotifierContext, type RouterElementProps } from "@react-library/router";

import { DemoColumn } from "@react-library-demo/shared";

import { RouterBasicDemoSegmentId } from "../enums/router-basic-demo-segment-id.type";

/**
 * Example router segment component root
 * @param props
 */
export function ReactLibraryRouterBasicDemoComponentRoot(props: RouterElementProps): ReactElement {
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
				key="route-components"
				weight={10}
			>
				<RouterChildOutlet segmentId={props.segmentId} />
			</DemoColumn>
		</>
	);
}
