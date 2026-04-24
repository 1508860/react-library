import { MaterialIconName } from "@react-library/material-icons";

import { IconClick } from "../../../../shared";

import { TEXT_FIELD_PROPERTY_MAP } from "../../constants/text-field-property-map.const";
import { useTextFieldColourStateContext } from "../../hooks/text-field-colour-state-context.hook";
import { useTextFieldEventsContext } from "../../hooks/text-field-events-context.hook";
import { useTextFieldShowContentContext } from "../../hooks/text-field-show-content-context.hook";

import type { TextFieldIconShowContentProps } from "./types/text-field-icon-show-content-props.type";

/**
 * Text field icon show content component
 */
export function TextFieldIconShowContent(props: TextFieldIconShowContentProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const showContent = useTextFieldShowContentContext();
	const textFieldEvents = useTextFieldEventsContext();

	if (showContent) return (
		<IconClick
			colour={colourState.style.trailingIcon}
			key={MaterialIconName.VisibilityOff}
			name={MaterialIconName.VisibilityOff}
			onClick={textFieldEvents.onHideContent}
			size={TEXT_FIELD_PROPERTY_MAP.style[props.style].iconSize}
		/>
	);

	return (
		<IconClick
			colour={colourState.style.trailingIcon}
			key={MaterialIconName.Visibility}
			name={MaterialIconName.Visibility}
			onClick={textFieldEvents.onShowContent}
			size={TEXT_FIELD_PROPERTY_MAP.style[props.style].iconSize}
		/>
	);
}
