import { useCallback, useEffect, useRef, useState, type RefCallback } from "react";

import {
	clamp,
	Orientation,
	orientationDimensionPx,
	SCALE_PERCENT_MAX,
	SCALE_PERCENT_MIN,
	type SizePx
} from "@react-library/common";

import { PointerMove, type PointerMoveOnChangeResult } from "../pointer-move";
import { ViewDividerView } from "./enums/view-divider-view.type";
import { viewDividerChildContainerStyle } from "./styles/view-divider-child-container-style.function";
import { viewDividerContainerStyle } from "./styles/view-divider-container-style.function";
import { viewDividerSeparatorStyle } from "./styles/view-divider-separator-style.function";
import type { ViewDividerProps } from "./types/view-divider-props.type";
import type { ViewDividerSize } from "./types/view-divider-size.type";

/**
 * Component to divide two child elements with an element that can be used to resize the adjacent view
 * @param props
 */
export function ViewDivider(props: ViewDividerProps) {

	// View divider elements
	const [startViewElement, setStartViewElement] = useState<HTMLDivElement | null>(null);
	const setStartViewElementCallback = useCallback<RefCallback<HTMLDivElement | null>>((element) => setStartViewElement(element), []);
	const [endViewElement, setEndViewElement] = useState<HTMLDivElement | null>(null);
	const setEndViewElementCallback = useCallback<RefCallback<HTMLDivElement | null>>((element) => setEndViewElement(element), []);

	const startViewInitialSize = useRef<SizePx>(0);
	const endViewInitialSize = useRef<SizePx>(0);

	// Pointer move
	const [startViewRatio, setStartViewRatio] = useState<ViewDividerSize>(() => ({
		type: "percent",
		denominator: SCALE_PERCENT_MAX,
		numerator: props.initialValue ?? (SCALE_PERCENT_MAX / 2)
	}));

	const handlePointerMoveStart = useCallback(
		() => {
			if (!startViewElement || !endViewElement) return;
			startViewInitialSize.current = orientationDimensionPx(startViewElement, props.orientation);
			endViewInitialSize.current = orientationDimensionPx(endViewElement, props.orientation);
		},
		[props.orientation, startViewElement, endViewElement]
	);

	const handlePointerMoveChange = useCallback(
		(pointerMoveOnChangeResult: PointerMoveOnChangeResult) => {
			const initialPointerPosition = pointerMoveOnChangeResult.initialPosition;
			const currentPointerPosition = pointerMoveOnChangeResult.currentPosition;

			const intialValue = props.orientation === Orientation.Horizontal ? initialPointerPosition.pageX : initialPointerPosition.pageY;
			const currentValue = props.orientation === Orientation.Horizontal ? currentPointerPosition.pageX : currentPointerPosition.pageY;

			// Percentage ratio
			if (props.staticView === undefined) {
				const totalViewSize = (startViewInitialSize.current + endViewInitialSize.current);
				const viewRatio = ((startViewInitialSize.current + (currentValue - intialValue)) / totalViewSize) * SCALE_PERCENT_MAX;
				setStartViewRatio({
					type: "percent",
					denominator: SCALE_PERCENT_MAX,
					numerator: clamp(viewRatio, SCALE_PERCENT_MIN, SCALE_PERCENT_MAX)
				});
			}
			// Static view
			else {
				setStartViewRatio({
					type: "static",
					endViewSize: (endViewInitialSize.current - (currentValue - intialValue)),
					startViewSize: (startViewInitialSize.current + (currentValue - intialValue)),
					staticView: props.staticView
				});
			}
		},
		[props.orientation, props.staticView]
	);

	const handlePointerMoveEnd = useCallback(
		() => {
			startViewInitialSize.current = 0;
			endViewInitialSize.current = 0;
		},
		[]
	);

	// Initial start view ratio based on props
	useEffect(
		() => {
			if (!startViewElement || !endViewElement) return;

			const startViewSize = orientationDimensionPx(startViewElement, props.orientation);
			const endViewSize = orientationDimensionPx(endViewElement, props.orientation);

			// Percentage ratio
			if (props.staticView === undefined) {
				const totalViewSize = (startViewSize + endViewSize);
				const viewRatio = (startViewSize / totalViewSize) * SCALE_PERCENT_MAX;
				setStartViewRatio({
					type: "percent",
					denominator: SCALE_PERCENT_MAX,
					numerator: clamp(viewRatio, SCALE_PERCENT_MIN, SCALE_PERCENT_MAX)
				});
			}
			// Static view
			else {
				setStartViewRatio({
					type: "static",
					endViewSize: endViewSize,
					startViewSize: startViewSize,
					staticView: props.staticView
				});
			}
		},
		[props.orientation, props.staticView, startViewElement, endViewElement]
	);

	return (
		<div
			style={viewDividerContainerStyle(props.orientation, props.separatorSize, props.startMinSize, props.endMinSize)}
		>

			<div
				key="view-divider-view-1"
				ref={setStartViewElementCallback}
				style={viewDividerChildContainerStyle(
					ViewDividerView.Start,
					props.orientation,
					startViewRatio,
					props.startMinSize,
					props.endMinSize
				)}
			>
				{props.children[0]}
			</div>

			<div
				key="view-divider-separator"
				style={viewDividerSeparatorStyle(props.orientation, props.separatorSize)}
			>
				<PointerMove
					isDisabled={props.isDisabled}
					onChangeStart={handlePointerMoveStart}
					onChange={handlePointerMoveChange}
					onChangeEnd={handlePointerMoveEnd}
				>
					{props.children[1]}
				</PointerMove>
			</div>

			<div
				key="view-divider-view-2"
				ref={setEndViewElementCallback}
				style={viewDividerChildContainerStyle(
					ViewDividerView.End,
					props.orientation,
					startViewRatio,
					props.startMinSize,
					props.endMinSize
				)}
			>
				{props.children[2]}
			</div>

		</div>
	);
}
