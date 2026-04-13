import { useCallback } from "react";

import {
	Orientation,
	useResolveState,
	useStyleCssVariableLoaderRefCallback,
	type Callback,
	type StyleCssVariableLoaderVariables
} from "@react-library/common";
import {
	useVirtualScrollContainerPropsContext,
	type VirtualScrollContainer
} from "@react-library/components";

import { SCROLL_SHARED_CLASS_NAME } from "../shared/constants/scroll-shared-class-name.const";
import "../shared/styles/scroll-shared-style.css";

import type { ScrollVirtualProps } from "./types/scroll-virtual-props.type";

/**
 * Scroll virtual container component
 */
export function ScrollVirtual(props: ScrollVirtualProps): VirtualScrollContainer {

	// Virtual scroll contexts
	const containerProps = useVirtualScrollContainerPropsContext();

	// CSS variables
	const resolveCssVariables = useCallback<Callback<StyleCssVariableLoaderVariables>>(
		() => ({
			"--background-colour": props.backgroundColour?.toColourString(),
			"--scrollbar-background-colour": props.scrollbarBackgroundColour.toColourString(),
			"--scrollbar-colour": props.scrollbarColour.toColourString(),
			"--height": "100%",
			"--overflow-x": containerProps.orientation === Orientation.Horizontal ? "auto" : "unset",
			"--overflow-y": containerProps.orientation === Orientation.Vertical ? "auto" : "unset",
			"--width": "100%"
		}),
		[props.backgroundColour, props.scrollbarBackgroundColour, props.scrollbarColour, containerProps.orientation]
	);
	const cssVariables = useResolveState<StyleCssVariableLoaderVariables>(resolveCssVariables);

	// Ref to load CSS variables
	const refCallback = useStyleCssVariableLoaderRefCallback<HTMLDivElement>(cssVariables, containerProps.ref);

	return (
		<div
			className={SCROLL_SHARED_CLASS_NAME}
			onScroll={containerProps.onScroll}
			ref={refCallback}
		>
			{props.children}
		</div>
	);
}
