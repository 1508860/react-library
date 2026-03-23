import { useCallback, useState } from "react";

import { HexRgb, Orientation } from "@react-library/common";
import {
	VirtualScroll,
	VirtualScrollItem,
	type VirtualScrollBarConfig,
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
import type { VirtualScrollDemoItemData } from "./types";

export function ReactLibraryComponentsVirtualScrollDemo() {

	// virtual scroll
	const [itemBufferCount] = useState<number>(() => 20);
	const [defaultItemSize] = useState<number>(() => 30);
	const [scrollBarConfig] = useState<VirtualScrollBarConfig>(() => ({
		colour: {
			thumb: new HexRgb("00", "FF", "00"),
			track: new HexRgb("FF", "00", "00")
		},
		show: true
	}));
	const [items] = useState<Array<VirtualScrollDemoItemData>>(() => resolveVirtualScrollDemoItems(1000, 10, 60, 2));

	const [showItemChildren, setShowItemChildren] = useState<VirtualScrollItemId | undefined>(() => undefined);
	const handleSetShowItemChildren = useCallback(
		(key: VirtualScrollItemId) => setShowItemChildren((prev => (prev !== key ? key : undefined))),
		[]
	);

	return (<>
		<VirtualScroll
			itemBufferCount={itemBufferCount}
			itemSize={defaultItemSize}
			orientation={Orientation.Vertical}
			scrollbar={scrollBarConfig}
		>
			{items.map((item, itemIndex) => ([
				<VirtualScrollItem
					id={item.id}
					key={item.id}
					index={[itemIndex]}
					size={item.virtualScrollRowSize}
				>
					{() => <DemoContent
						align={DemoContentAlign.Center}
						childrenType={DemoContentChildren.Text}
						colourScheme={item.virtualScrollRowSize === undefined ? DemoContentColourScheme.Primary : DemoContentColourScheme.Secondary}
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
								index={[itemIndex, itemChildIndex]}
								size={itemChild.virtualScrollRowSize}
							>
								{() => <DemoContent
									align={DemoContentAlign.Center}
									childrenType={DemoContentChildren.Text}
									colourScheme={DemoContentColourScheme.Tertiary}
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
