import { NAVIGATION_BAR_CONTENT_STYLE } from "./styles/navigation-bar-content-style.const";
import type { NavigationBarContentProps } from "./types/navigation-bar-content-props.type";

/**
 * Component to handle a navigation bar content
 * @param props
 */
export function NavigationBarContent(props: NavigationBarContentProps) {

	return (
		<div style={NAVIGATION_BAR_CONTENT_STYLE}>
			{props.children}
		</div>
	);
}
