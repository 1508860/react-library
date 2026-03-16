import { useCallback, useState } from "react";

import { Orientation } from "@react-library/common";
import {
	VirtualScroll,
	VirtualScrollItem,
	type VirtualScrollItemId
} from "@react-library/components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow
} from "@react-library-demo/shared";

import { resolveVirtualScrollDemoItems } from "./functions";
import type {
	VirtualScrollDemoItemData
} from "./types";

export function ReactLibraryComponentsVirtualScrollDemo() {

	// virtual scroll
	const [itemBufferCount] = useState<number>(() => 20);
	const [defaultRowSize] = useState<number>(() => 30);
	const [items] = useState<Array<VirtualScrollDemoItemData>>(() => resolveVirtualScrollDemoItems(
		1000,
		10,
		defaultRowSize,
		60,
		2
	));

	const [showItemChildren, setShowItemChildren] = useState<VirtualScrollItemId | undefined>(() => undefined);
	const handleSetShowItemChildren = useCallback(
		(key: VirtualScrollItemId) => setShowItemChildren((prev => (prev !== key ? key : undefined))),
		[]
	);

	return (<>
		<VirtualScroll
			itemBufferCount={itemBufferCount}
			itemSize={defaultRowSize}
			orientation={Orientation.Vertical}
		>
			{items.map((item, itemIndex) => ([
				<VirtualScrollItem
					id={item.id}
					key={item.id}
					sortOrder={[itemIndex]}
					size={item.virtualScrollRowSize}
				>
					{() => <DemoContent
						align={DemoContentAlign.Center}
						childrenType={DemoContentChildren.Text}
						colourScheme={DemoContentColourScheme.Primary}
						height="100%"
						includeRenderCounter={true}
						justify={DemoContentJustify.Start}
						onClick={() => handleSetShowItemChildren(item.id)}
						orientation={Orientation.Horizontal}
						overflow={DemoContentOverflow.Auto}
						text={item.text}
						width="100%"
					/>}
				</VirtualScrollItem>,
				...(
					showItemChildren === item.id ?
						item.children.map((itemChild, itemChildIndex) => (
							<VirtualScrollItem
								id={`${item.id}-${itemChild.id}`}
								key={`${item.id}-${itemChild.id}`}
								sortOrder={[itemIndex, itemChildIndex]}
								size={itemChild.virtualScrollRowSize}
							>
								{() => <DemoContent
									align={DemoContentAlign.Center}
									childrenType={DemoContentChildren.Text}
									colourScheme={DemoContentColourScheme.Primary}
									height="100%"
									includeRenderCounter={true}
									indentIndex={2}
									justify={DemoContentJustify.Start}
									orientation={Orientation.Horizontal}
									overflow={DemoContentOverflow.Auto}
									text={itemChild.text}
									width="100%"
								/>}
							</VirtualScrollItem>
						)) :
						[]
				)
			])).flat()}
		</VirtualScroll>
	</>);
}
