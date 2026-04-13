import { Fragment, useCallback } from "react";

import { useColourSchemeContext, useFontContext, useResolveState, type Callback } from "@react-library/common";
import { MaterialIconName } from "@react-library/material-icons";

import {
	ButtonContent,
	ButtonSize,
	ButtonStyle,
	ButtonText,
	type ButtonTextContent
} from "../../../../button";
import { IconClick } from "../../../../shared";
import { TooltipTextOverflow } from "../../../../tooltips";

import { ModalFullActionConfirmTextMap } from "../../enums/modal-full-action-confirm-text.type";

import { MODAL_FULL_HEADER_STYLE } from "./styles/modal-full-header-style.const";
import { modalFullHeaderTitleStyle } from "./styles/modal-full-header-title-style.function";
import type { ModalFullHeaderProps } from "./types/modal-full-header-props.type";

/**
 * Modal full header component
 * @param props
 */
export function ModalFullHeader(props: ModalFullHeaderProps) {

	const colourScheme = useColourSchemeContext();
	const font = useFontContext();

	// Confirm button
	const resolveConfirmButtonTextContent = useCallback<Callback<ButtonTextContent | undefined>>(
		() => {
			if (!props.actionConfirm) return undefined;
			return ({
				content: ButtonContent.Label,
				label: ModalFullActionConfirmTextMap[props.actionConfirm.text]
			});
		},
		[props.actionConfirm]
	);
	const confirmButtonTextContent = useResolveState<ButtonTextContent | undefined>(resolveConfirmButtonTextContent);

	return (
		<div style={MODAL_FULL_HEADER_STYLE}>
			<IconClick
				colour={colourScheme.surface.default.onColour}
				isDisabled={props.actionDismiss.isDisabled}
				key="action-dismiss"
				name={MaterialIconName.Close}
				onClick={props.actionDismiss.action}
				size={24}
			/>
			{
				props.title ?
					<div
						key="title"
						style={modalFullHeaderTitleStyle(colourScheme, font)}
					>
						<TooltipTextOverflow
							content={props.title}
							width="100%"
						/>
					</div> :
					<Fragment key="no-title" />
			}
			{
				(props.actionConfirm && confirmButtonTextContent) ?
					<ButtonText
						content={confirmButtonTextContent}
						isDisabled={props.actionConfirm.isDisabled}
						key="action-confirm"
						onClick={props.actionConfirm.action}
						size={ButtonSize.Medium}
						style={ButtonStyle.Text}
					/> :
					<Fragment key="no-action-confirm" />
			}
		</div>
	);
}
