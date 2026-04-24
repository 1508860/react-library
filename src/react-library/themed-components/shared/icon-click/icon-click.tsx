import { IconClickContainer } from "./components/container";
import { IconClickEffect } from "./components/effect";

import type { IconClickProps } from "./types/icon-click-props.type";

/**
 * Icon click component
 */
export function IconClick(props: IconClickProps) {
	return (
		<IconClickContainer {...props}>
			<IconClickEffect {...props} />
		</IconClickContainer>
	);
}
