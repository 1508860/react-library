import { useCallback, useState } from "react";

import { useDelayCallback, useResolveState, type Callback } from "@react-library/common";
import { Modal } from "@react-library/components";

import { Backdrop } from "../../shared";

import { ModalBasicActions } from "./components/actions";
import { ModalBasicContainer } from "./components/container";
import { ModalBasicContentContainer } from "./components/content-container";
import { ModalBasicHeader } from "./components/header";
import { MODAL_BASIC_CONTENT_CONFIG } from "./constants/modal-basic-content-config.const";
import { MODAL_BASIC_POSITION_STRATEGY } from "./constants/modal-basic-position-strategy.const";
import { MODAL_BASIC_TRANSITION_MS } from "./constants/modal-basic-transition.const";
import type { ModalBasicActionConfirm, ModalBasicActionDismiss } from "./types/modal-basic-action.type";
import type { ModalBasicProps } from "./types/modal-basic-props.type";

/**
 * Modal basic component
 * @param props
 */
export function ModalBasic(props: ModalBasicProps) {

	const [showModal, setShowModal] = useState<boolean>(() => true);

	// On confirm callback
	const onConfirmCallback = useCallback<Callback<void>>(() => props.actionConfirm?.action(), [props.actionConfirm]);
	const onConfirmDelayCallback = useDelayCallback(onConfirmCallback, MODAL_BASIC_TRANSITION_MS);
	const handleOnConfirmCallback = useCallback<Callback<void>>(
		() => {
			setShowModal(false);
			onConfirmDelayCallback();
		},
		[onConfirmDelayCallback]
	);

	// On confirm action
	const resolveActionConfirm = useCallback<Callback<ModalBasicActionConfirm | undefined>>(
		() => (props.actionConfirm ? { action: handleOnConfirmCallback, text: props.actionConfirm.text } : undefined),
		[props.actionConfirm, handleOnConfirmCallback]
	);
	const actionConfirm = useResolveState<ModalBasicActionConfirm | undefined>(resolveActionConfirm);

	// On dismiss callback
	const onDismissCallback = useCallback<Callback<void>>(() => props.actionDismiss.action(), [props.actionDismiss]);
	const onDismissDelayCallback = useDelayCallback(onDismissCallback, MODAL_BASIC_TRANSITION_MS);
	const handleOnDismissCallback = useCallback<Callback<void>>(
		() => {
			setShowModal(false);
			onDismissDelayCallback();
		},
		[onDismissDelayCallback]
	);

	// On dismiss action
	const resolveActionDismiss = useCallback<Callback<ModalBasicActionDismiss>>(
		() => ({ action: handleOnDismissCallback, text: props.actionDismiss.text }),
		[props.actionDismiss, handleOnDismissCallback]
	);
	const actionDismiss = useResolveState<ModalBasicActionDismiss>(resolveActionDismiss);

	return (
		<Modal
			backdrop={
				<Backdrop
					isAbsolute={true}
					key="backdrop"
					onClick={handleOnDismissCallback}
					show={showModal}
					transitionDurationMs={MODAL_BASIC_TRANSITION_MS}
				/>
			}
			contentConfig={MODAL_BASIC_CONTENT_CONFIG}
			positionStrategy={MODAL_BASIC_POSITION_STRATEGY}
		>
			<ModalBasicContainer show={showModal}>
				<ModalBasicHeader
					hasChildren={props.children !== undefined}
					iconName={props.iconName}
					key="header"
					text={props.text}
					textMaxWidth={props.textMaxWidth}
					title={props.title}
				/>
				<ModalBasicContentContainer
					childrenSize={props.childrenSize}
					isFullWidth={props.isFullWidth}
					key="content-container"
				>
					{props.children}
				</ModalBasicContentContainer>
				<ModalBasicActions
					actionConfirm={actionConfirm}
					actionDismiss={actionDismiss}
					key="actions"
				/>
			</ ModalBasicContainer>
		</Modal>
	);
}

/**
 * TODO
 * 
 * Finish styling
 * Sort out max width / height for modal. Calc not working
 * Remove top padding for buttons if no custim content exists
 * Sort out scrolling for custom content?
 */
