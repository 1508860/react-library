import { useFormGapContext } from "../shared/hooks/form-gap-context.hook";

import { formRowStyle } from "./styles/form-row-style.function";
import type { FormRowProps } from "./types/form-row-props.type";

/**
 * Form row component
 */
export function FormRow(props: FormRowProps) {

	// Local contexts
	const defaultGap = useFormGapContext();

	return (
		<div style={formRowStyle(props, defaultGap)}>
			{props.children}
		</div>
	);
}
