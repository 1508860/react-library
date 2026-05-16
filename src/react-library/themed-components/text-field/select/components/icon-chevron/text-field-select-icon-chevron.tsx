import { useCallback } from "react";

import { ScaleDegrees, useResolveState, type Callback, type ScaleDegreesState } from "@react-library/common";
import {
	TransitionRotate,
	TransitionTiming,
	useTooltipShowContext
} from "@react-library/components";
import {
	MaterialIconName,
	MaterialIconStyle,
	MaterialIconSvg
} from "@react-library/material-icons";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../shared/constants/text-field-property-map.const";
import { useTextFieldColourStateContext } from "../../../shared/hooks/text-field-colour-state-context.hook";

import { TEXT_FIELD_SELECT_TRANSITION_MS } from "../../constants/text-field-select-transition.const";

import type { TextFieldSelectIconChevronProps } from "./types/text-field-select-icon-chevron-props.type";

/**
 * Text field select icon chevron component
 */
export function TextFieldSelectIconChevron(props: TextFieldSelectIconChevronProps) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const tooltipShow = useTooltipShowContext();

	// Resolve rotate state based on if menu is open
	const resolveRotate = useCallback<Callback<ScaleDegreesState>>(
		() => ({
			degrees: tooltipShow ? ScaleDegrees[180] : ScaleDegrees[0],
			rotationCount: 0
		}),
		[tooltipShow]
	);
	const rotate = useResolveState(resolveRotate);

	return (
		<TransitionRotate
			durationMs={TEXT_FIELD_SELECT_TRANSITION_MS}
			rotate={rotate}
			timing={TransitionTiming.OvershootInOut}
		>
			<MaterialIconSvg
				colour={colourState.style.trailingIcon}
				key="trailing-icon-error"
				name={MaterialIconName.KeyboardArrowDown}
				size={TEXT_FIELD_PROPERTY_MAP.style[props.style].iconSize}
				style={MaterialIconStyle.DefaultFilled}
			/>
		</TransitionRotate>
	);
}
