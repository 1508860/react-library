import { useCallback } from "react";

import {
	useColourSchemeContext,
	useFontContext,
	useResolveState,
	type Callback
} from "@react-library/common";

import { resolveBadgeDisplayLabel } from "../shared/functions/resolve-badge-display-label.function";
import type { BadgeDisplayLabel } from "../shared/types/badge-display-label.type";

import { badgeLargeStyle } from "./styles/badge-large-style.function";
import { badgeSmallStyle } from "./styles/badge-small-style.function";
import type { BadgeProps } from "./types/badge-props.type";

/**
 * Component to handle a badge
 * @param props
 */
export function Badge(props: BadgeProps) {

	if (props.label) return (
		<BadgeLarge {...props} key="badge-large" />
	);

	return (
		<BadgeSmall key="badge-small" />
	);
}

function BadgeSmall() {

	const colourScheme = useColourSchemeContext();

	return (
		<div style={badgeSmallStyle(colourScheme)} />
	);
}

function BadgeLarge(props: BadgeProps) {

	const colourScheme = useColourSchemeContext();
	const font = useFontContext();

	// Handle display label
	const resolveDisplayLabel = useCallback<Callback<BadgeDisplayLabel>>(
		() => resolveBadgeDisplayLabel(props.label),
		[props.label]
	);
	const displayLabel = useResolveState(resolveDisplayLabel);

	return (

		<div style={badgeLargeStyle(colourScheme, font)}>
			{displayLabel}
		</div>
	);
}
