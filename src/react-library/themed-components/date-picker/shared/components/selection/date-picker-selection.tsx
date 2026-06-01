import { Fragment, useCallback } from "react";

import { useFontContext, useResolveState, type Callback, type Colour } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { IconClick } from "../../../../shared";

import { DATE_PICKER_PROPERTY_MAP } from "../../constants/date-picker-property-map.const";
import { useDatePickerColourStateContext } from "../../hooks/date-picker-colour-state-context.hook";

import { datePickerSelectionButtonStyle } from "./styles/date-picker-selection-button-style.function";
import { datePickerSelectionLabelStyle } from "./styles/date-picker-selection-label-style.function";
import { datePickerSelectionStyle } from "./styles/date-picker-selection-style.function";
import type { DatePickerSelectionProps } from "./types/date-picker-selection-props.type";

/**
 * Date picker Selection
 */
export function DatePickerSelection(props: DatePickerSelectionProps) {

	// Contexts
	const font = useFontContext();

	// Local contexts
	const colourState = useDatePickerColourStateContext();

	// Disabled states
	const resolveIsPreviousDisabled = useCallback<Callback<boolean>>(
		() => (props.index - Math.abs(props.incrementBy)) < 0,
		[props.incrementBy, props.index]
	);
	const isPreviousDisabled = useResolveState(resolveIsPreviousDisabled);

	const resolveIsNextDisabled = useCallback<Callback<boolean>>(
		() => (props.index + Math.abs(props.incrementBy)) > props.lastIndex,
		[props.incrementBy, props.index, props.lastIndex]
	);
	const isNextDisabled = useResolveState(resolveIsNextDisabled);

	// Handle click events
	const onPrevious = useCallback<Callback<void>>(
		() => props.onIncrement(Math.max((props.index - props.incrementBy), 0)),
		[props]
	);
	const onNext = useCallback<Callback<void>>(
		() => props.onIncrement(Math.min((props.index + props.incrementBy), props.lastIndex)),
		[props]
	);
	const onClick = useCallback<Callback<void>>(
		() => {
			if (props.isDisabled) return;
			props.onClick();
		},
		[props]
	);

	// Colour
	const resolveColour = useCallback<Callback<Colour>>(
		() => colourState.selection.disabled[`${props.isDisabled}`].colour,
		[props.isDisabled, colourState.selection.disabled]
	);
	const colour = useResolveState(resolveColour);

	const resolvePreviousColour = useCallback<Callback<Colour>>(
		() => colourState.selection.disabled[`${props.isDisabled || isPreviousDisabled}`].colour,
		[props.isDisabled, colourState.selection.disabled, isPreviousDisabled]
	);
	const previousColour = useResolveState(resolvePreviousColour);

	const resolveNextColour = useCallback<Callback<Colour>>(
		() => colourState.selection.disabled[`${props.isDisabled || isNextDisabled}`].colour,
		[props.isDisabled, colourState.selection.disabled, isNextDisabled]
	);
	const nextColour = useResolveState(resolveNextColour);

	return (
		<div style={datePickerSelectionStyle(props.isDisabled, props.isOpen)}>
			{
				(!props.isOpen && !props.isDisabled) ?
					<IconClick
						colour={previousColour}
						isDisabled={isPreviousDisabled}
						key={`previous-${isPreviousDisabled}`}
						name={MaterialIconName.ChevronLeft}
						onClick={onPrevious}
						size={DATE_PICKER_PROPERTY_MAP.selection.iconSize.arrow}
					/> :
					<Fragment key="no-previous" />
			}
			<div
				key="selection-button"
				onClick={onClick}
				style={datePickerSelectionButtonStyle(props.isDisabled)}
			>
				<span
					key="label"
					style={datePickerSelectionLabelStyle(font, colour)}
				>
					{props.label}
				</span>
				{
					!props.isDisabled ?
						<MaterialIconSvg
							colour={colour}
							key="icon"
							name={props.isOpen ? MaterialIconName.KeyboardArrowUp : MaterialIconName.KeyboardArrowDown}
							size={DATE_PICKER_PROPERTY_MAP.selection.iconSize.chevron}
							style={MaterialIconStyle.Default}
						/> :
						<Fragment key="no-icon" />
				}
			</div>
			{
				(!props.isOpen && !props.isDisabled) ?
					<IconClick
						colour={nextColour}
						isDisabled={isNextDisabled}
						key={`next-${isNextDisabled}`}
						name={MaterialIconName.ChevronRight}
						onClick={onNext}
						size={DATE_PICKER_PROPERTY_MAP.selection.iconSize.arrow}
					/> :
					<Fragment key="no-next" />
			}
		</div>
	);
}
