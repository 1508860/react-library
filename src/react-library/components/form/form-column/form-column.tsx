import { useFormGapContext } from "../shared/hooks/form-gap-context.hook";

import { formColumnStyle } from "./styles/form-column-style.function";
import type { FormColumnProps } from "./types/form-column-props.type";

/**
 * Form column component
 */
export function FormColumn(props: FormColumnProps) {

	// Local contexts
	const defaultGap = useFormGapContext();

	return (
		<div style={formColumnStyle(props, defaultGap)}>
			{props.children}
		</div>
	);
}
