import { MenuResolver } from "../shared/components/menu-resolver";

import type { MenuProps } from "./types/menu-props.type";

/**
 * Menu component
 */
export function Menu(props: MenuProps) {
	return (
		<MenuResolver {...props} />
	);
}
