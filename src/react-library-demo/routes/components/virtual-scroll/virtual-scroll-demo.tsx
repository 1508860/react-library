import { useState } from "react";

import { Orientation, useRenderCounterRef } from "@react-library/common";
import { isVirtualScrollRowStandard, VirtualScrollAccordionParentView } from "@react-library/components";

import { resolveVirtualScrollDemoParentData } from "./functions";
import type { VirtualScrollTestParent, VirtualScrollTestStandard } from "./types";

export function ReactLibraryComponentsVirtualScrollDemo() {

	// virtual scroll
	const [defaultRowSize] = useState<number>(() => 30);
	const [vsData] = useState<Array<VirtualScrollTestParent>>(resolveVirtualScrollDemoParentData(1000, 10, defaultRowSize));

	return (<>
		<VirtualScrollAccordionParentView<VirtualScrollTestStandard, VirtualScrollTestParent>
			data={vsData}
			elementBufferCount={20}
			elementSize={defaultRowSize}
			orientation={Orientation.Vertical}
		>
			{
				(child) =>
					<div
						style={{
							backgroundColor: isVirtualScrollRowStandard(child) ? "white" : "lightblue",
							borderBottomWidth: 1,
							borderBottomStyle: "solid",
							boxSizing: "border-box",
							display: "flex",
							flexDirection: "row",
							height: "100%",
							paddingLeft: isVirtualScrollRowStandard(child) ? 200 : 0
						}}
					>
						<div key="id">Id = {child.id}</div>
						<VirtualScrollDemoText {...child} key="text" />
					</div>
			}
		</VirtualScrollAccordionParentView>
	</>);
}

function VirtualScrollDemoText(props: (VirtualScrollTestStandard | VirtualScrollTestParent)) {
	
	const renderCounter = useRenderCounterRef();

	return <div key="text">Text = {props.text} - {renderCounter}</div>
}
