import { CheckboxGroupContainerProvider } from "../shared/components/group-container-provider";

import type { CheckboxGroupContainerProps } from "./types/checkbox-group-container-props.type";

/**
 * Checkbox group container component
 */
export function CheckboxGroupContainer(props: CheckboxGroupContainerProps) {
	return (
		<CheckboxGroupContainerProvider>
			{props.children}
		</CheckboxGroupContainerProvider>
	);
}
