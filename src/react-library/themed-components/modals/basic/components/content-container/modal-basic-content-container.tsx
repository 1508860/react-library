import { Fragment } from "react";

import { Orientation } from "@react-library/common";

import { Divider } from "../../../../divider";

import { modalBasicContentContainerStyle } from "./styles/modal-basic-content-container-style.function";
import type { ModalBasicContentContainerProps } from "./types/modal-basic-content-container-props.type";

/**
 * Modal basic content container component
 * @param props
 */
export function ModalBasicContentContainer(props: ModalBasicContentContainerProps) {

	if (!props.children) return (
		<Fragment key="no-content-container" />
	);

	return (
		<div
			key="content-container"
			style={modalBasicContentContainerStyle(props.isFullWidth)}
		>
			<Divider
				key="divider-top"
				orientation={Orientation.Horizontal}
			/>
			{props.children}
			<Divider
				key="divider-bottom"
				orientation={Orientation.Horizontal}
			/>
		</div>
	);
}
