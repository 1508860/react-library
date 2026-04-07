import { Fragment } from "react";

import { MODAL_BACKDROP_STYLE } from "./styles/modal-backdrop-style.const";
import type { ModalBackdropProps } from "./types/modal-backdrop-props.type";

/**
 * Modal backdrop
 * @param props
 */
export function ModalBackdrop(props: ModalBackdropProps) {

	if (!props.children) return (
		<Fragment key="no-backdrop" />
	);

	return (
		<div
			key="backdrop"
			style={MODAL_BACKDROP_STYLE}
		>
			{props.children}
		</div>
	);
}
