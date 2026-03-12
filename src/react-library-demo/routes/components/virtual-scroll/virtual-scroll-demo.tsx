import { useState } from "react";

import { Orientation } from "@react-library/common";
import {
	isVirtualScrollRowStandard,
	VirtualScrollAccordionParentView
} from "@react-library/components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow
} from "@react-library-demo/shared";

import { resolveVirtualScrollDemoParentData } from "./functions";
import type {
	VirtualScrollTestParent,
	VirtualScrollTestStandard
} from "./types";

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
					<DemoContent
						align={DemoContentAlign.Center}
						childrenType={DemoContentChildren.Text}
						colourScheme={isVirtualScrollRowStandard(child) ? DemoContentColourScheme.Primary : DemoContentColourScheme.Secondary}
						height="100%"
						includeRenderCounter={true}
						indentIndex={isVirtualScrollRowStandard(child) ? 2 : 1}
						justify={DemoContentJustify.Start}
						orientation={Orientation.Horizontal}
						overflow={DemoContentOverflow.Auto}
						text={child.text}
						width="100%"
					/>
			}
		</VirtualScrollAccordionParentView>
	</>);
}
