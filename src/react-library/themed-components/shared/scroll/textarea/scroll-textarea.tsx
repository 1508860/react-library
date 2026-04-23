import { useCallback } from "react";

import {
	useResolveState,
	useStyleCssVariableLoaderRefCallback,
	type Callback,
	type StyleCssVariableLoaderVariables
} from "@react-library/common";

import { SCROLL_SHARED_CLASS_NAME } from "../shared/constants/scroll-shared-class-name.const";
import "../shared/styles/scroll-shared-style.css";

import type { ScrollTextareaProps } from "./types/scroll-textarea-props.type";

/**
 * Scroll textarea container component
 */
export function ScrollTextArea(props: ScrollTextareaProps) {

	// CSS variables
	const resolveCssVariables = useCallback<Callback<StyleCssVariableLoaderVariables>>(
		() => ({
			"--background-colour": props.colour.backgroundColour?.toColourString(),
			"--scrollbar-background-colour": props.colour.scrollbarBackgroundColour?.toColourString(),
			"--scrollbar-colour": props.colour.scrollbarColour.toColourString()
		}),
		[props]
	);
	const cssVariables = useResolveState<StyleCssVariableLoaderVariables>(resolveCssVariables);

	// Ref to load CSS variables
	const refCallback = useStyleCssVariableLoaderRefCallback<HTMLTextAreaElement>(cssVariables, props.ref);

	return (
		<textarea
			{...props}
			className={SCROLL_SHARED_CLASS_NAME}
			ref={refCallback}
		/>
	);
}
