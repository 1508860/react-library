import { useCallback, useState } from "react";

import {
	HexRgb,
	Orientation,
	useResolveState,
	type Callback,
	type Colour,
	type EqualityCallback
} from "@react-library/common";
import {
	useVirtualScrollContainerPropsContext,
	useVirtualScrollToIndexCallbackContext,
	VirtualScroll,
	VirtualScrollToIndexBehaviour,
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

import { VirtualScrollDemoItemStyle } from "./enums";
import { resolveVirtualScrollDemoItems } from "./functions";
import type {
	VirtualScrollDemoItemChildPropsAll,
	VirtualScrollDemoItemData
} from "./types";

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
	const resolveVirtualScrollItems = useCallback<Callback<VirtualScrollItems<VirtualScrollDemoItemChildPropsAll>>>(
		() => {
			const result: VirtualScrollItems<VirtualScrollDemoItemChildPropsAll> = [];

			items.forEach(item => {
				result.push({
					childProps: {
						colourScheme: item.virtualScrollRowSize === undefined ? DemoContentColourScheme.Primary : DemoContentColourScheme.Secondary,
						onClick: () => handleSetShowItemChildren(item.id),
						style: VirtualScrollDemoItemStyle.Item,
						text: item.text
					},
					children: VirtualScrollDemoItem,
					id: item.id,
					size: item.virtualScrollRowSize
				});

				if (showItemChildren !== undefined && item.id === showItemChildren) {
					item.children.forEach(itemChild => {
						result.push({
							childProps: {
								indentIndex: 2,
								style: VirtualScrollDemoItemStyle.ItemChild,
								text: itemChild.text
							},
							children: VirtualScrollDemoItem,
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

	// Is item equal
	const isItemEqual = useCallback<EqualityCallback<VirtualScrollDemoItemChildPropsAll>>(
		(a, b) => a === b,
		[]
	);

	return (
		<VirtualScroll
			isEqual={isItemEqual}
			itemBufferCount={itemBufferCount}
			items={virtualScrollItems}
			itemSize={defaultItemSize}
			orientation={Orientation.Vertical}
			scrollElement={VirtualScrollDemoScrollbar}
		/>
	);
}

function VirtualScrollDemoScrollbar(props: VirtualScrollScrollbarProps): VirtualScrollScrollbarResult {

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

function VirtualScrollDemoItem(props: VirtualScrollDemoItemChildPropsAll) {

	const scrollToIndex = useVirtualScrollToIndexCallbackContext();
	const handleScrollToTop = useCallback<Callback<void>>(
		() => scrollToIndex(0, VirtualScrollToIndexBehaviour.Smooth),
		[scrollToIndex]
	);

	if (props.style === VirtualScrollDemoItemStyle.ItemChild) return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Tertiary}
			height="100%"
			includeRenderCounter={true}
			indentIndex={props.indentIndex}
			justify={DemoContentJustify.Start}
			orientation={Orientation.Horizontal}
			overflow={DemoContentOverflow.Auto}
			text={props.text}
			width="100%"
		/>
	);

	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Any}
			colourScheme={props.colourScheme}
			height="100%"
			includeRenderCounter={true}
			justify={DemoContentJustify.Start}
			onClick={props.onClick}
			orientation={Orientation.Horizontal}
			overflow={DemoContentOverflow.Auto}
			width="100%"
		>
			<span>{props.text}</span>
			<button onClick={handleScrollToTop}>
				Scroll To Top
			</button>
		</DemoContent>
	);
}
