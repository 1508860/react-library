import {
	useCallback,
	useEffect,
	useState,
	type PropsWithChildren,
	type RefCallback
} from "react";

import {
	ResizeObserverDebounce,
	resolveElementViewportPosition,
	useResizeObserverState,
	VIEWPORT_POSITION_DEFAULT,
	type IViewportPosition
} from "@react-library/common";

import { useRootViewportPositionContext } from "../root-viewport-position";

import { OverlayPortalProvider } from "./providers/overlay-portal-provider";
import { OverlayPortalViewportPositionProvider } from "./providers/overlay-portal-viewport-position-provider";
import { OVERLAY_PORTAL_STYLE } from "./styles/overlay-portal-style.const";
import type { OverlayPortalContext } from "./types/overlay-portal-context.type";

/**
 * Overlay portal which provides a reference to the overlay portal container to project elements in to
 * @param props
 */
export function OverlayPortal(props: PropsWithChildren) {

	const [overlayPortalContainerElement, setOverlayPortalContainerElement] = useState<OverlayPortalContext | null>(null);
	const setOverlayPortalContainerElementCallback = useCallback<RefCallback<OverlayPortalContext | null>>((element) => setOverlayPortalContainerElement(element), []);

	// Overlay portal container resize state
	const rootViewportPosition = useRootViewportPositionContext();
	const [overlayPortalDimensions] = useResizeObserverState(true, true, overlayPortalContainerElement, "border-box", ResizeObserverDebounce["100Ms"]);
	const [overlayPortalViewportPosition, setOverlayPortalViewportPosition] = useState<IViewportPosition>(VIEWPORT_POSITION_DEFAULT);
	useEffect(
		() => {
			if (!overlayPortalContainerElement) setOverlayPortalViewportPosition(VIEWPORT_POSITION_DEFAULT);
			else setOverlayPortalViewportPosition(resolveElementViewportPosition(overlayPortalContainerElement, rootViewportPosition));
		},
		[
			overlayPortalContainerElement,
			rootViewportPosition,
			overlayPortalDimensions
		]
	);

	return (
		<div
			id="overlay-portal"
			key="overlay-portal"
			ref={setOverlayPortalContainerElementCallback}
			style={OVERLAY_PORTAL_STYLE}
		>
			{
				!overlayPortalContainerElement ? <></> :
					<OverlayPortalProvider value={overlayPortalContainerElement}>
						<OverlayPortalViewportPositionProvider value={overlayPortalViewportPosition}>
							{props.children}
						</OverlayPortalViewportPositionProvider>
					</OverlayPortalProvider>
			}
		</div>
	);
}
