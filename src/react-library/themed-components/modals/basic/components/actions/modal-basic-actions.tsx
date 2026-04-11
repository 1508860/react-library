import { useCallback } from "react";

import { Orientation, useResolveState, type Callback } from "@react-library/common";

import {
	ButtonContent,
	ButtonSize,
	ButtonStyle
} from "../../../../button";
import {
	ButtonGroup,
	ButtonGroupAction,
	type ButtonGroupButtonText
} from "../../../../button-group";

import { ModalBasicActionDismissTextMap } from "../../enums/modal-basic-action-dismiss-text.type";

import { MODAL_BASIC_ACTIONS_STYLE } from "./styles/modal-basic-actions-style.const";
import type { ModalBasicActionsProps } from "./types/modal-basic-actions-props.type";

/**
 * Modal basic actions component
 * @param props
 */
export function ModalBasicActions(props: ModalBasicActionsProps) {

	const resolveButtonGroupChildren = useCallback<Callback<Array<ButtonGroupButtonText>>>(
		() => {
			const result: Array<ButtonGroupButtonText> = [{
				content: {
					content: ButtonContent.Label,
					label: ModalBasicActionDismissTextMap[props.actionDismiss.text]
				},
				isDisabled: false,
				key: 1,
				onClick: props.actionDismiss.action
			}];

			if (props.actionConfirm) result.push({
				content: {
					content: ButtonContent.Label,
					label: props.actionConfirm.text
				},
				isDisabled: false,
				key: 2,
				onClick: props.actionConfirm.action
			})

			return result;
		},
		[props.actionConfirm, props.actionDismiss.action, props.actionDismiss.text]
	);

	const buttonGroupChildren = useResolveState<Array<ButtonGroupButtonText>>(resolveButtonGroupChildren);

	return (
		<div style={MODAL_BASIC_ACTIONS_STYLE}>
			<ButtonGroup
				action={ButtonGroupAction.Text}
				orientation={Orientation.Horizontal}
				size={ButtonSize.Medium}
				style={ButtonStyle.Text}
			>
				{buttonGroupChildren}
			</ButtonGroup>
		</div>
	);
}
