import { useState } from "react";

import {
	useVirtualScrollContainerPropsContext,
	VirtualScroll,
	VirtualScrollContent
} from "@react-library/components";

import {
	ScrollBasic,
	ScrollBasicDirection,
	type ScrollBasicSizeAll
} from "../../shared";

import type { ThemedVirtualScrollProps } from "./types/virtual-scroll-props.type";

/**
 * Themed virtual scroll component
 * Note: Only virtual scroll items are required as children for this component
 */
export function ThemedVirtualScroll(props: ThemedVirtualScrollProps) {
	return (
		<VirtualScroll
			itemBufferCount={props.itemBufferCount}
			itemSize={props.itemSize}
			orientation={props.orientation}
		>
			<ThemedVirtualScrollContent {...props}>
				{props.children}
			</ThemedVirtualScrollContent>
		</VirtualScroll>
	);
}

function ThemedVirtualScrollContent(props: ThemedVirtualScrollProps) {

	// Virtual scroll contexts
	const containerProps = useVirtualScrollContainerPropsContext();

	const [size] = useState<ScrollBasicSizeAll>(() => ({
		height: "100%",
		width: "100%"
	}));

	return (
		<ScrollBasic
			colour={props.colour}
			direction={ScrollBasicDirection.Single}
			onScroll={containerProps.onScroll}
			orientation={props.orientation}
			ref={containerProps.ref}
			size={size}
		>
			<VirtualScrollContent>
				{props.children}
			</VirtualScrollContent>
		</ScrollBasic>
	);
}
