import { useCheckboxColourStateContext } from "../../hooks/checkbox-colour-state-context.hook";
import { useCheckboxSelectedStateContext } from "../../hooks/checkbox-selected-state-context.hook";

import { checkboxTargetStyle } from "./styles/checkbox-target-style.function";
import type { CheckboxTargetProps } from "./types/checkbox-target-props.type";

/**
 * Checkbox target
 */
export function CheckboxTarget(props: CheckboxTargetProps) {

	const checkboxColourState = useCheckboxColourStateContext();
	const checkboxSelectedState = useCheckboxSelectedStateContext();

	return (
		<div
			style={checkboxTargetStyle(checkboxColourState, checkboxSelectedState)}
		>
			{props.children}
		</div>
	);
}
