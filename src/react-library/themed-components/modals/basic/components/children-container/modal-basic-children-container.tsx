import { useCallback } from "react";

import {
	HexRgba,
	Orientation,
	useColourSchemeContext,
	useResolveState,
	type Callback
} from "@react-library/common";

import {
	ScrollBasic,
	ScrollBasicDirection,
	type ScrollBasicSizeAll,
	type ScrollColour
} from "../../../../shared";

import type { ModalBasicChildrenContainerProps } from "./types/modal-basic-children-container-props.type";

/**
 * Modal basic children container component
 * @param props
 */
export function ModalBasicChildrenContainer(props: ModalBasicChildrenContainerProps) {

	// Resolve colour
	const colourScheme = useColourSchemeContext();
	const resolveScrollBasicColour = useCallback<Callback<ScrollColour>>(
		() => ({
			scrollbarBackgroundColour: new HexRgba("00", "00", "00", "00"),
			scrollbarColour: colourScheme.outline.outline,
		}),
		[colourScheme.outline.outline]
	);
	const scrollBasicColour = useResolveState(resolveScrollBasicColour);

	// Resolve size
	const resolveScrollBasicSize = useCallback<Callback<ScrollBasicSizeAll>>(
		() => ({
			height: props.childrenSize.height,
			maxHeight: props.childrenSize.maxHeight,
			minHeight: props.childrenSize.minHeight,
			width: "100%"
		}),
		[props.childrenSize.height, props.childrenSize.maxHeight, props.childrenSize.minHeight]
	);
	const scrollBasicSize = useResolveState(resolveScrollBasicSize);

	return (
		<ScrollBasic
			colour={scrollBasicColour}
			direction={ScrollBasicDirection.Single}
			orientation={Orientation.Vertical}
			size={scrollBasicSize}
		>
			{props.children}
		</ScrollBasic>
	);
}
