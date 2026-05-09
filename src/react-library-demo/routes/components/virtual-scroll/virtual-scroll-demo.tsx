import { useCallback, useState, type PropsWithChildren } from "react";

import { HexRgb, Orientation, type Colour } from "@react-library/common";
import {
	useVirtualScrollContainerPropsContext,
	VirtualScroll,
	VirtualScrollContent,
	VirtualScrollItem,
	type VirtualScrollContainer,
	type VirtualScrollItemChildProps,
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
	const [items] = useState<Array<VirtualScrollDemoItemData>>(() => resolveVirtualScrollDemoItems(1000, 10, 60, 2));

	// Virtual scroll item
	const [showItemChildren, setShowItemChildren] = useState<VirtualScrollItemId | undefined>(() => undefined);
	const handleSetShowItemChildren = useCallback(
		(key: VirtualScrollItemId) => setShowItemChildren((prev => (prev !== key ? key : undefined))),
		[]
	);

	return (
		<VirtualScroll
			itemBufferCount={itemBufferCount}
			itemSize={defaultItemSize}
			orientation={Orientation.Vertical}
		>
			<ReactLibraryComponentsVirtualScrollDemoScrollbar>
				<VirtualScrollContent>
					{items.map((item, itemIndex) => ([
						<VirtualScrollItem<VirtualScrollItemChildProps>
							childProps={{}}
							id={item.id}
							index={[itemIndex]}
							key={item.id}
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
									<VirtualScrollItem<VirtualScrollItemChildProps>
										childProps={{}}
										id={`${item.id}-${itemChild.id}`}
										index={[itemIndex, itemChildIndex]}
										key={`${item.id}-${itemChild.id}`}
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
				</VirtualScrollContent>
			</ReactLibraryComponentsVirtualScrollDemoScrollbar>
		</VirtualScroll>
	);
}

function ReactLibraryComponentsVirtualScrollDemoScrollbar(props: PropsWithChildren): VirtualScrollContainer {

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
