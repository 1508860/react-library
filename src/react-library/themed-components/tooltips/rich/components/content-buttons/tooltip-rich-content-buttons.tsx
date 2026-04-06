import { Fragment } from "react";

import { Orientation } from "@react-library/common";

import { ButtonContent, ButtonSize, ButtonStyle } from "../../../../button";
import { ButtonGroup, ButtonGroupAction } from "../../../../button-group";

import { TooltipRichStyle } from "../../enums/tooltip-rich-style-type.type";

import { TOOLTIP_RICH_CONTENT_BUTTONS_STYLE } from "./styles/tooltip-rich-content-buttons-style.function";
import type { TooltipRichContentButtonsProps } from "./types/tooltip-rich-content-buttons-props.type";

/**
 * Tooltip rich content buttons component
 * @param props
 */
export function TooltipRichContentButtons(props: TooltipRichContentButtonsProps) {
	if (
		!props.content ||
		!(
			props.content.style === TooltipRichStyle.All ||
			props.content.style === TooltipRichStyle.BodyAndAction
		)
	) return (
		<Fragment key="no-tooltip-rich-content-buttons" />
	);

	return (
		<div
			key="tooltip-rich-content-buttons"
			style={TOOLTIP_RICH_CONTENT_BUTTONS_STYLE}
		>
			<ButtonGroup
				action={ButtonGroupAction.Text}
				orientation={Orientation.Horizontal}
				size={ButtonSize.Small}
				style={ButtonStyle.Text}
			>
				{props.content.actions.map(action => ({
					content: {
						content: ButtonContent.Label,
						label: action.text
					},
					isDisabled: false,
					key: action.id,
					onClick: action.action
				}))}
			</ButtonGroup>
		</div>
	);
}
