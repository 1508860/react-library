import {
	useCallback,
	useState,
	type PropsWithChildren,
	type RefCallback
} from "react";

import {
	ResizeObserverDebounce,
	useResizeObserverState,
	useResolveState
} from "@react-library/common";

import { RootViewportPositionPxProvider } from "./providers/root-viewport-position-px-provider";
import { ROOT_VIEWPORT_POSITION_PX_STYLE } from "./styles/root-viewport-position-px-style.const";

/**
 * Root viewport position px element for measuring the size of the app's window
 * Should be used once at the start of the application
 * @param props
 */
export function RootViewportPositionPx(props: PropsWithChildren) {

	const [viewportElement, setViewportElement] = useState<HTMLDivElement | null>(null);
	const setViewportElementCallback = useCallback<RefCallback<HTMLDivElement | null>>((element) => setViewportElement(element), []);

	// Root viewport position container resize state
	const [viewportDimensions] = useResizeObserverState(true, true, viewportElement, "border-box", ResizeObserverDebounce["100Ms"]);

	const resolveProviderState = useCallback(
		() => ({
			height: viewportDimensions.height,
			marginBottom: 0,
			marginLeft: 0,
			marginRight: 0,
			marginTop: 0,
			width: viewportDimensions.width
		}),
		[viewportDimensions.height, viewportDimensions.width]
	);

	const providerState = useResolveState(resolveProviderState);

	return (
		<div
			ref={setViewportElementCallback}
			style={ROOT_VIEWPORT_POSITION_PX_STYLE}
		>
			{
				!viewportElement ? <></> :
					<RootViewportPositionPxProvider value={providerState}>
						{props.children}
					</RootViewportPositionPxProvider>
			}
		</div>
	);
}
