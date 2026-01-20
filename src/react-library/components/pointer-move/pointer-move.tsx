import React, { useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { stopDefaultAndPropagation, targetEvent, type IPagePosition } from "@react-library/common";

import { useOverlayPortalContext } from "../overlay-portal";
import { PointerMoveInteraction } from "./enums/pointer-move-iteraction.type";
import { POINTER_MOVE_PORTAL_STYLE } from "./styles/pointer-move-portal-style.const";
import { POINTER_MOVE_STYLE } from "./styles/pointer-move-style.const";
import type { PointerMoveProps } from "./types/pointer-move-props.type";
import type { PointerMoveStartState, PointerMoveStartStateTouch } from "./types/pointer-move-start-state.type";

/**
 * Component to handle tracking a pointer moving
 * @param props
 */
export function PointerMove(props: PointerMoveProps) {

	// Overlay portal
	const overlayPortal = useOverlayPortalContext();

	// Pointer move state
	const [startState, setStartState] = useState<PointerMoveStartState | null>(null);
	const latestTouchPagePosition = useRef<IPagePosition>({ pageX: 0, pageY: 0 });

	// Mouse move handlers

	const handleMouseStart = useCallback(
		(event: React.MouseEvent) => {
			stopDefaultAndPropagation(event);
			const newStartState: PointerMoveStartState = {
				interactionType: PointerMoveInteraction.Mouse,
				position: {
					pageX: event.pageX,
					pageY: event.pageY
				}
			};
			setStartState(newStartState);
			props.onChangeStart({
				currentPosition: newStartState.position,
				initialPosition: newStartState.position
			});
		},
		[props, setStartState]
	);

	const handleMouseMove = useCallback(
		(event: React.MouseEvent) => {
			if (!startState || startState.interactionType !== PointerMoveInteraction.Mouse) return;
			targetEvent(
				event,
				(targetEvent) => {
					props.onChange({
						currentPosition: {
							pageX: targetEvent.pageX,
							pageY: targetEvent.pageY
						},
						initialPosition: startState.position
					});
				}
			);
		},
		[props, startState]
	);

	const handleMouseEnd = useCallback(
		(event: React.MouseEvent) => {
			if (!startState || startState.interactionType !== PointerMoveInteraction.Mouse) return;
			targetEvent(
				event,
				(targetEvent) => {
					props.onChangeEnd({
						currentPosition: {
							pageX: targetEvent.pageX,
							pageY: targetEvent.pageY
						},
						initialPosition: startState.position
					});
					setStartState(null);
				}
			);
		},
		[props, startState, setStartState]
	);

	// Touch move handlers

	const getCurrentTouch = useCallback<(touchList: React.TouchList, touchStartState: PointerMoveStartStateTouch) => IPagePosition | null>(
		(touchList, touchStartState) => {
			for (let index = 0; index < touchList.length; index++) {
				const currentTouch = touchList.item(index);
				if (currentTouch.identifier === touchStartState.touchId) return {
					pageX: currentTouch.pageX,
					pageY: currentTouch.pageY
				};
			}
			return null;
		},
		[]
	);

	const handleTouchStart = useCallback(
		(event: React.TouchEvent) => {
			const firstTouch = event.touches[0];
			const newStartState: PointerMoveStartState = {
				interactionType: PointerMoveInteraction.Touch,
				position: {
					pageX: firstTouch.pageX,
					pageY: firstTouch.pageY
				},
				touchId: firstTouch.identifier
			};
			setStartState(newStartState);
			props.onChangeStart({
				currentPosition: newStartState.position,
				initialPosition: newStartState.position
			});
		},
		[props, setStartState]
	);

	const handleTouchMove = useCallback(
		(event: React.TouchEvent) => {
			if (!startState || startState.interactionType !== PointerMoveInteraction.Touch) return;
			const touch = getCurrentTouch(event.changedTouches, startState) ?? latestTouchPagePosition.current;
			props.onChange({
				currentPosition: {
					pageX: touch.pageX,
					pageY: touch.pageY
				},
				initialPosition: startState.position
			});
		},
		[props, startState, getCurrentTouch]
	);

	const handleTouchEnd = useCallback(
		(event: React.TouchEvent) => {
			if (!startState || startState.interactionType !== PointerMoveInteraction.Touch) return;
			const touch = getCurrentTouch(event.changedTouches, startState) ?? latestTouchPagePosition.current;
			props.onChangeEnd({
				currentPosition: {
					pageX: touch.pageX,
					pageY: touch.pageY
				},
				initialPosition: startState.position
			});
			latestTouchPagePosition.current = { pageX: 0, pageY: 0 };
			setStartState(null);
		},
		[props, startState, setStartState, getCurrentTouch]
	);

	return (
		<>

			<div
				id="pointe-move"
				onMouseDown={props.isDisabled ? undefined : handleMouseStart}
				onTouchStart={props.isDisabled ? undefined : handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				onTouchCancel={handleTouchEnd}
				style={POINTER_MOVE_STYLE}
			>
				{props.children}
			</div>
			{
				startState?.interactionType !== PointerMoveInteraction.Mouse ? <></> :
					createPortal(
						<div id="pointe-move-portal"
							onMouseMove={handleMouseMove}
							onMouseUp={handleMouseEnd}
							onMouseLeave={handleMouseEnd}
							style={POINTER_MOVE_PORTAL_STYLE}
						/>,
						overlayPortal
					)
			}
		</>
	);
}
