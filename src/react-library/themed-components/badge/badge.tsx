import { Fragment, useEffect, useState } from "react";

import { useColourSchemeContext, useFontContext } from "@react-library/common";

import { resolveBadgeDisplayLabel } from "./functions/resolve-badge-display-label.function";
import { BADGE_CONTAINER_STYLE } from "./styles/badge-container-style.const";
import { BADGE_LABEL_CONTAINER_STYLE } from "./styles/badge-label-container-style.const";
import { badgeLabelStyle } from "./styles/badge-label-style.function";
import { badgeSmallStyle } from "./styles/badge-small-style.function";
import type { BadgeDisplayLabel } from "./types/badge-display-label.type";
import type { BadgeProps } from "./types/badge-props.type";

/**
 * Component to handle a badge
 * @param props
 */
export function Badge(props: BadgeProps) {
	return (
		<div
			id="badge-container"
			key="badge-container"
			style={BADGE_CONTAINER_STYLE}
		>
			{props.children}
			{
				props.show ? (
					props.label === undefined ?
						<BadgeSmall key="badge-small" /> :
						<BadgeLarge {...props} key="badge-large" />
				) : <Fragment key="badge-no-show" />
			}
		</div>
	);
}

function BadgeSmall() {

	const colourScheme = useColourSchemeContext();

	return (
		<div
			id="badge-small"
			key="badge-small"
			style={badgeSmallStyle(colourScheme)}
		/>
	);
}

function BadgeLarge(props: BadgeProps) {

	const colourScheme = useColourSchemeContext();
	const font = useFontContext();

	// Handle display label
	const [displayLabel, setDisplayLabel] = useState<BadgeDisplayLabel>(() => resolveBadgeDisplayLabel(props.label));

	useEffect(
		() => setDisplayLabel(resolveBadgeDisplayLabel(props.label)),
		[props.label]
	);

	return (
		<div
			id="badge-label-container"
			key="badge-label-container"
			style={BADGE_LABEL_CONTAINER_STYLE}
		>
			<div
				id="badge-label"
				key="badge-label"
				style={badgeLabelStyle(colourScheme, font)}>
				{displayLabel}
			</div>
		</div>
	);
}
