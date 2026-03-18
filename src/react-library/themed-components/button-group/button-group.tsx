import { ButtonGroupContainer } from "./components/button-group-container";
import { ButtonGroupContent } from "./components/button-group-content";
import type { ButtonGroupProps } from "./types/button-group-props.type";

/**
 * Component to handle button groups
 * @param props
 */
export function ButtonGroup(props: ButtonGroupProps) {
	return (
		<ButtonGroupContainer buttonGroup={props}>
			<ButtonGroupContent buttonGroup={props} />
		</ButtonGroupContainer>
	);
}
