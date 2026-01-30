import type { ReactElement } from "react";

import { RouterChildOutlet, type RouterElementProps } from "@react-library/router";

/**
 * Example router segment component that can have children
 * @param props
 */
export function ReactLibraryRouterBasicDemoElementWithChildren(props: RouterElementProps): ReactElement {
	return (
		<>
			<div
				key="text"
				style={{
					alignItems: "start",
					backgroundColor: "coral",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					minHeight: 20,
					paddingLeft: 20,
					paddingRight: 20,
					width: "100%"
				}}
			>
				<span>Segment: {props.segmentId}</span>
			</div>
			<div
				key="children"
				style={{
					display: "block",
					paddingRight: 20,
					width: "100%"
				}}
			>
				<RouterChildOutlet segmentId={props.segmentId} />
			</div>
		</>
	);
}
