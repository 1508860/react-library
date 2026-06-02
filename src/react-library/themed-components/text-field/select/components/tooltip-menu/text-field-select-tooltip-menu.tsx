import { useCallback } from "react";

import { useTooltipChildPropsContext, useTooltipShowCallbackContext } from "@react-library/components";

import { TEXT_FIELD_ON_CLICK_CONTEXT } from "../../../shared/constants/text-field-on-click-context.const";
import type { TextFieldOnClick } from "../../../shared/types/text-field-on-click.type";

import { TEXT_FIELD_SELECT_REF_CONTEXT } from "../../constants/text-field-select-ref-context.const";
import { useTextFieldSelectMenuEffect } from "../../hooks/text-field-select-menu-effect.hook";
import type { TextFieldSelectItemId } from "../../types/text-field-select-item-id.type";

import type { TextFieldSelectTooltipMenuProps } from "./types/text-field-select-tooltip-menu-props.type";

/**
 * Text field select tooltip menu component
 */
export function TextFieldSelectTooltipMenu<TId extends TextFieldSelectItemId>(props: TextFieldSelectTooltipMenuProps<TId>) {

	// Tooltip contexts
	const tooltipChildProps = useTooltipChildPropsContext();
	const tooltipShowCallback = useTooltipShowCallbackContext();

	// Handle tooltp show
	const handleTooltipShow = useCallback<TextFieldOnClick>(
		() => {
			if (props.isDisabled) return;
			tooltipShowCallback(true);
		},
		[props.isDisabled, tooltipShowCallback]
	);

	// Resolve tooltip content
	useTextFieldSelectMenuEffect(props.interaction, props.isDisabled, props.items, props.menuHeight, props.menuWidth, props.menuStyle);

	return (
		<TEXT_FIELD_ON_CLICK_CONTEXT value={handleTooltipShow}>
			<TEXT_FIELD_SELECT_REF_CONTEXT value={tooltipChildProps.ref}>
				{props.children}
			</TEXT_FIELD_SELECT_REF_CONTEXT>
		</TEXT_FIELD_ON_CLICK_CONTEXT>
	);
}
