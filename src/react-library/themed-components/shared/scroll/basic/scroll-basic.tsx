import { useCallback } from "react";

import {
	Orientation,
	toSizeWithUnits,
	useResolveState,
	useStyleCssVariableLoaderRefCallback,
	type Callback,
	type StyleCssVariableLoaderVariables
} from "@react-library/common";

import { SCROLL_SHARED_CLASS_NAME } from "../shared/constants/scroll-shared-class-name.const";
import "../shared/styles/scroll-shared-style.css";

import { ScrollBasicDirection } from "./enums/scroll-basic-direction.type";
import type { ScrollBasicProps } from "./types/scroll-basic-props.type";

/**
 * Scroll basic container component
 */
export function ScrollBasic(props: ScrollBasicProps) {

	// CSS variables
	const resolveCssVariables = useCallback<Callback<StyleCssVariableLoaderVariables>>(
		() => ({
			"--background-colour": props.colour.backgroundColour?.toColourString(),
			"--height": props.size.height !== null && props.size.height !== undefined ? toSizeWithUnits(props.size.height) : null,
			"--max-height": props.size.maxHeight !== null && props.size.maxHeight !== undefined ? toSizeWithUnits(props.size.maxHeight) : null,
			"--max-width": props.size.maxWidth !== null && props.size.maxWidth !== undefined ? toSizeWithUnits(props.size.maxWidth) : null,
			"--min-height": props.size.minHeight !== null && props.size.minHeight !== undefined ? toSizeWithUnits(props.size.minHeight) : null,
			"--min-width": props.size.minWidth !== null && props.size.minWidth !== undefined ? toSizeWithUnits(props.size.minWidth) : null,
			"--overflow-x": (props.direction === ScrollBasicDirection.Both || props.orientation === Orientation.Horizontal) ? "auto" : "unset",
			"--overflow-y": (props.direction === ScrollBasicDirection.Both || props.orientation === Orientation.Vertical) ? "auto" : "unset",
			"--scrollbar-background-colour": props.colour.scrollbarBackgroundColour.toColourString(),
			"--scrollbar-colour": props.colour.scrollbarColour.toColourString(),
			"--width": props.size.width !== null && props.size.width !== undefined ? toSizeWithUnits(props.size.width) : null
		}),
		[props]
	);
	const cssVariables = useResolveState<StyleCssVariableLoaderVariables>(resolveCssVariables);

	// Ref to load CSS variables
	const refCallback = useStyleCssVariableLoaderRefCallback<HTMLDivElement>(cssVariables);

	return (
		<div
			className={SCROLL_SHARED_CLASS_NAME}
			ref={refCallback}
		>
			{props.children}
		</div>
	);
}
