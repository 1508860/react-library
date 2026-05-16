import { useCallback, useState } from "react";

import {
	HexRgb,
	Orientation,
	useResolveState,
	type Callback,
	type Colour
} from "@react-library/common";
import {
	useVirtualScrollContainerPropsContext,
	VirtualScroll,
	type VirtualScrollItemId,
	type VirtualScrollItems,
	type VirtualScrollScrollbarProps,
	type VirtualScrollScrollbarResult
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
	const [items] = useState<Array<VirtualScrollDemoItemData>>(() => resolveVirtualScrollDemoItems(1000, 10, 60, 2));

	// Virtual scroll item
	const [showItemChildren, setShowItemChildren] = useState<VirtualScrollItemId | undefined>(() => undefined);
	const handleSetShowItemChildren = useCallback(
		(key: VirtualScrollItemId) => setShowItemChildren((prev => (prev !== key ? key : undefined))),
		[]
	);

	// Resolve items
	const resolveVirtualScrollItems = useCallback<Callback<VirtualScrollItems<{hello: string}>>>(
		() => {
			const result: VirtualScrollItems<{hello: string}> = [];

			items.forEach(item => {
				result.push({
					childProps: {hello: ""},
					children: () => <DemoContent
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
					/>,
					id: item.id,
					size: item.virtualScrollRowSize
				});

				if (showItemChildren !== undefined && item.id === showItemChildren) {
					item.children.forEach(itemChild => {
						result.push({
							childProps: { hello: ""},
							children: () => <DemoContent
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
							/>,
							id: `${item.id}-${itemChild.id}`,
							size: itemChild.virtualScrollRowSize
						})
					});
				}

			});

			return result;
		},
		[items, showItemChildren, handleSetShowItemChildren]
	);
	const virtualScrollItems = useResolveState(resolveVirtualScrollItems);

	return (
		<VirtualScroll
			itemBufferCount={itemBufferCount}
			items={virtualScrollItems}
			itemSize={defaultItemSize}
			orientation={Orientation.Vertical}
			scrollElement={ReactLibraryComponentsVirtualScrollDemoScrollbar}
		/>
	);
}

function ReactLibraryComponentsVirtualScrollDemoScrollbar(props: VirtualScrollScrollbarProps): VirtualScrollScrollbarResult {

	const containerProps = useVirtualScrollContainerPropsContext();

	const [scrollbarBackgroundColour] = useState<Colour>(() => new HexRgb("00", "00", "00"));
	const [scrollbarColour] = useState<Colour>(() => new HexRgb("FF", "FF", "FF"));

	return (
		<div
			onScroll={containerProps.onScroll}
			ref={containerProps.ref}
			style={{
				height: "100%",
				overflowX: containerProps.orientation === Orientation.Horizontal ? "auto" : "unset",
				overflowY: containerProps.orientation === Orientation.Vertical ? "auto" : "unset",
				scrollbarColor: `${scrollbarColour.toColourString()} ${scrollbarBackgroundColour.toColourString() ?? "#000000"}`,
				width: "100%"
			}}
		>
			{props.children}
		</div>
	)
}
