import { ButtonSplitContainer } from "./components/button-split-container";
import { ButtonSplitMenu } from "./components/button-split-menu";
import { ButtonSplitStandard } from "./components/button-split-standard";
import type { ButtonSplitProps } from "./types/button-split-props.type";

/**
 * Component to handle standard split buttons
 * @param props
 */
export function ButtonSplit(props: ButtonSplitProps) {
	return (
		<ButtonSplitContainer>
			<ButtonSplitStandard {...props} key="left" />
			<ButtonSplitMenu {...props} key="menu" />
		</ButtonSplitContainer>
	);
}
