import {
	useCallback,
	useState,
	type PropsWithChildren,
	type RefCallback
} from "react";

import {
	ResizeObserverDebounce,
	useResizeObserverState
} from "@react-library/common";

import { RootViewportPositionProvider } from "./providers/root-viewport-position-provider";
import { ROOT_VIEWPORT_POSITION_STYLE } from "./styles/root-viewport-position-style.const";

/**
 * Root viewport position element for measuring the size of the app's window
 * Should be used once at the start of the application
 * @param props
 */
export function RootViewportPosition(props: PropsWithChildren) {

	const [viewportElement, setViewportElement] = useState<HTMLDivElement | null>(null);
	const setViewportElementCallback = useCallback<RefCallback<HTMLDivElement | null>>((element) => setViewportElement(element), []);

	// Root viewport position container resize state
	const [viewportDimensions] = useResizeObserverState(true, true, viewportElement, "border-box", ResizeObserverDebounce["100Ms"]);

	return (
		<div
			ref={setViewportElementCallback}
			style={ROOT_VIEWPORT_POSITION_STYLE}
		>
			{
				!viewportElement ? <></> :
					<RootViewportPositionProvider value={{
						height: viewportDimensions.height,
						marginBottom: 0,
						marginLeft: 0,
						marginRight: 0,
						marginTop: 0,
						width: viewportDimensions.width
					}}					>
						{props.children}
					</RootViewportPositionProvider>
			}
		</div>
	);
}
