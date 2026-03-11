import { useCallback } from "react";

import { targetEvent } from "@react-library/common";

import { modalBackdropStyle } from "./styles/modal-backdrop-style.function";
import type { ModalBackdropProps } from "./types/modal-backdrop-props.type";

/**
 * Modal backdrop
 * @param props
 */
export function ModalBackdrop(props: ModalBackdropProps) {

	const handleOnDismiss = useCallback(
		(event: React.MouseEvent) => {
			if (!props.onDismiss) return;
			targetEvent(event, props.onDismiss)
		},
		[props.onDismiss]
	);

	return (
		<div
			onClick={handleOnDismiss}
			style={modalBackdropStyle(props.backdropColour)}
		/>
	);
}
