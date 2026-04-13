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
			"--background-colour": props.backgroundColour?.toColourString(),
			"--height": props.height !== null && props.height !== undefined ? toSizeWithUnits(props.height) : null,
			"--max-height": props.maxHeight !== null && props.maxHeight !== undefined ? toSizeWithUnits(props.maxHeight) : null,
			"--max-width": props.maxWidth !== null && props.maxWidth !== undefined ? toSizeWithUnits(props.maxWidth) : null,
			"--min-height": props.minHeight !== null && props.minHeight !== undefined ? toSizeWithUnits(props.minHeight) : null,
			"--min-width": props.minWidth !== null && props.minWidth !== undefined ? toSizeWithUnits(props.minWidth) : null,
			"--overflow-x": (props.direction === ScrollBasicDirection.Both || props.orientation === Orientation.Horizontal) ? "auto" : "unset",
			"--overflow-y": (props.direction === ScrollBasicDirection.Both || props.orientation === Orientation.Vertical) ? "auto" : "unset",
			"--scrollbar-background-colour": props.scrollbarBackgroundColour.toColourString(),
			"--scrollbar-colour": props.scrollbarColour.toColourString(),
			"--width": props.width !== null && props.width !== undefined ? toSizeWithUnits(props.width) : null
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
