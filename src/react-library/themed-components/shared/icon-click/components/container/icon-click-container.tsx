import { useCallback } from "react";

import type { IconClickContainerProps } from "./types/icon-click-container-props.type";

/**
 * Icon click container component
 */
export function IconClickContainer(props: IconClickContainerProps) {

	const handleClick = useCallback(
		(event: React.MouseEvent<Element>) => {
			if (props.isDisabled) return;
			props.onClick(event);
		},
		[props]
	);

	return (
		<div
			onClick={handleClick}
		>
			{props.children}
		</div>
	);
}
