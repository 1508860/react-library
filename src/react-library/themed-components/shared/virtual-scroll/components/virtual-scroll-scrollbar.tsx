import { useState } from "react";

import {
	useVirtualScrollContainerPropsContext,
	type VirtualScrollScrollbarProps
} from "@react-library/components";

import {
	type ScrollBasicSizeAll,
	ScrollBasic,
	ScrollBasicDirection
} from "../../scroll";

import {
	useThemedVirtualScrollScrollbarColourContext
} from "../hooks/virtual-scroll-scrollbar-colour-context.hook";

/**
 * Themed virtual scroll scrollbar component
 */
export function ThemedVirtualScrollScrollbar(props: VirtualScrollScrollbarProps) {

	// Virtual scroll contexts
	const containerProps = useVirtualScrollContainerPropsContext();

	// Local contexts
	const colour = useThemedVirtualScrollScrollbarColourContext();

	// Scrollbar size 
	const [size] = useState<ScrollBasicSizeAll>(() => ({
		height: "100%",
		width: "100%"
	}));

	return (
		<ScrollBasic
			colour={colour}
			direction={ScrollBasicDirection.Single}
			onScroll={containerProps.onScroll}
			orientation={containerProps.orientation}
			ref={containerProps.ref}
			size={size}
		>
			{props.children}
		</ScrollBasic>
	);
}
