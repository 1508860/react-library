import { useCallback } from "react";

import {
	Orientation,
	useColourSchemeContext,
	useResolveState,
	type Callback
} from "@react-library/common";

import {
	ScrollBasic,
	ScrollBasicDirection,
	type ScrollColour
} from "../../../../shared";

import { MODAL_FULL_COLOUR_SCROLLBAR_BACKGROUND } from "../../constants/modal-full-colour.const";

import { MODAL_FULL_CHILDREN_CONTAINER_SCROLLBAR_SIZE } from "./constants/modal-full-children-container-scrollbar.const";
import { modalFullChildrenContainerStyle } from "./styles/modal-full-children-container-style.function";
import type { ModalFullChildrenContainerProps } from "./types/modal-full-children-container-props.type";

/**
 * Modal full children container component
 * @param props
 */
export function ModalFullChildrenContainer(props: ModalFullChildrenContainerProps) {

	// Resolve colour
	const colourScheme = useColourSchemeContext();
	const resolveScrollBasicColour = useCallback<Callback<ScrollColour>>(
		() => ({
			scrollbarBackgroundColour: MODAL_FULL_COLOUR_SCROLLBAR_BACKGROUND,
			scrollbarColour: colourScheme.outline.outline,
		}),
		[colourScheme.outline.outline]
	);
	const scrollBasicColour = useResolveState(resolveScrollBasicColour);

	return (
		<ScrollBasic
			colour={scrollBasicColour}
			direction={ScrollBasicDirection.Single}
			orientation={Orientation.Vertical}
			size={MODAL_FULL_CHILDREN_CONTAINER_SCROLLBAR_SIZE}
		>
			<div style={modalFullChildrenContainerStyle(props.isFullWidth)}>
				{props.children}
			</div>
		</ScrollBasic>
	);
}
