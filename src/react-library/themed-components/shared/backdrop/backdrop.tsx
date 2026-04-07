import {
	Fragment,
	useCallback,
	useEffect,
	useState
} from "react";

import {
	useColourSchemeContext,
	type Callback,
	type CallbackWithParameter
} from "@react-library/common";
import {
	TransitionFade,
	TransitionFadeDirection,
	TransitionTiming,
	type TransitionFadeOnCompleteParam
} from "@react-library/components";

import { backdropContainerStyle } from "./styles/backdrop-container-style.function";
import { backdropContentStyle } from "./styles/backdrop-content-style.function";
import type { BackdropProps } from "./types/backdrop-props.type";

/**
 * Component to handle a backdrop
 * @param props
 */
export function Backdrop(props: BackdropProps) {

	const colourScheme = useColourSchemeContext();

	// Is collapsed
	const [isCollapsed, setIsCollapsed] = useState(() => !props.show);

	useEffect(
		() => {
			if (!props.show) return;
			setIsCollapsed(false);
		},
		[props.show]
	);

	// Show pointer
	const resolveShowPointer = useCallback<Callback<boolean>>(
		() => (!!props.onClick || !!props.onPointerEnter || !!props.onPointerLeave),
		[props.onClick, props.onPointerEnter, props.onPointerLeave]
	);
	const [showPointer, setShowPointer] = useState(() => resolveShowPointer());
	useEffect(() => setShowPointer(resolveShowPointer()), [resolveShowPointer]);

	// Handle transition on complete
	const handleTransitionFadeOnComplete = useCallback<CallbackWithParameter<TransitionFadeOnCompleteParam, void>>(
		(param) => {
			if (param.direction === TransitionFadeDirection.Out) setIsCollapsed(true);
			if (props.onComplete) props.onComplete({
				show: param.direction === TransitionFadeDirection.In
			});
		},
		[props]
	);

	if (isCollapsed) return (
		<Fragment key="no-backdrop" />
	);

	return (
		<div
			key="backdrop"
			style={backdropContainerStyle(props.isAbsolute)}
		>
			<TransitionFade
				direction={props.show ? TransitionFadeDirection.In : TransitionFadeDirection.Out}
				durationMs={props.transitionDurationMs}
				height={"100%"}
				onComplete={handleTransitionFadeOnComplete}
				timing={TransitionTiming.EaseInOut}
				width={"100%"}
			>
				<div
					onClick={props.onClick}
					onPointerEnter={props.onPointerEnter}
					onPointerLeave={props.onPointerLeave}
					style={backdropContentStyle(colourScheme, showPointer)}
				/>
			</TransitionFade>
		</div>
	);
}
