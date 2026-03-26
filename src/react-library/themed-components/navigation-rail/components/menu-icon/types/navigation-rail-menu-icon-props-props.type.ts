import type { CallbackWithParameter, IIsExpanded, IOnChange } from "@react-library/common";

/**
 * Props for a navigation rail menu icon
 */
export type NavigationRailMenuIconProps = (
	IIsExpanded &
	IOnChange<CallbackWithParameter<boolean, void>>
);
