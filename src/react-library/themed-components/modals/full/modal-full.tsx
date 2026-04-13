import { useCallback, useState } from "react";

import { useDelayCallback, useResolveState, type Callback } from "@react-library/common";
import { Modal } from "@react-library/components";

import { ModalFullChildrenContainer } from "./components/children-container";
import { ModalFullContainer } from "./components/container";
import { ModalFullHeader } from "./components/header";
import { MODAL_FULL_CONTENT_CONFIG } from "./constants/modal-full-content-config.const";
import { MODAL_FULL_POSITION_STRATEGY } from "./constants/modal-full-position-strategy.const";
import { MODAL_FULL_TRANSITION_MS } from "./constants/modal-full-transition.const";
import type { ModalFullActionConfirm, ModalFullActionDismiss } from "./types/modal-full-action.type";
import type { ModalFullProps } from "./types/modal-full-props.type";

/**
 * Modal full component
 * @param props
 */
export function ModalFull(props: ModalFullProps) {

	const [showModal, setShowModal] = useState<boolean>(() => true);

	// On confirm callback
	const onConfirmCallback = useCallback<Callback<void>>(() => props.actionConfirm?.action(), [props.actionConfirm]);
	const onConfirmDelayCallback = useDelayCallback(onConfirmCallback, MODAL_FULL_TRANSITION_MS);
	const handleOnConfirmCallback = useCallback<Callback<void>>(
		() => {
			setShowModal(false);
			onConfirmDelayCallback();
		},
		[onConfirmDelayCallback]
	);

	// On confirm action
	const resolveActionConfirm = useCallback<Callback<ModalFullActionConfirm | undefined>>(
		() => {
			if (!props.actionConfirm) return undefined
			return {
				action: handleOnConfirmCallback,
				isDisabled: props.actionConfirm.isDisabled,
				text: props.actionConfirm.text
			};
		},
		[props.actionConfirm, handleOnConfirmCallback]
	);
	const actionConfirm = useResolveState<ModalFullActionConfirm | undefined>(resolveActionConfirm);

	// On dismiss callback
	const onDismissCallback = useCallback<Callback<void>>(() => props.actionDismiss.action(), [props]);
	const onDismissDelayCallback = useDelayCallback(onDismissCallback, MODAL_FULL_TRANSITION_MS);
	const handleOnDismissCallback = useCallback<Callback<void>>(
		() => {
			setShowModal(false);
			onDismissDelayCallback();
		},
		[onDismissDelayCallback]
	);

	// On dismiss action
	const resolveActionDismiss = useCallback<Callback<ModalFullActionDismiss>>(
		() => ({
			action: handleOnDismissCallback,
			isDisabled: props.actionDismiss.isDisabled
		}),
		[props.actionDismiss, handleOnDismissCallback]
	);
	const actionDismiss = useResolveState<ModalFullActionDismiss>(resolveActionDismiss);

	return (
		<Modal
			contentConfig={MODAL_FULL_CONTENT_CONFIG}
			positionStrategy={MODAL_FULL_POSITION_STRATEGY}
		>
			<ModalFullContainer show={showModal}>
				<ModalFullHeader
					actionConfirm={actionConfirm}
					actionDismiss={actionDismiss}
					key="header"
					title={props.title}
				/>
				<ModalFullChildrenContainer
					isFullWidth={props.isFullWidth}
					key="content-container"
				>
					{props.children}
				</ModalFullChildrenContainer>
			</ ModalFullContainer>
		</Modal>
	);
}
