import {
	useCallback,
	useEffect,
	useState,
	type PropsWithChildren,
	type RefCallback
} from "react";

import {
	ResizeObserverDebounce,
	resolveElementViewportPositionPx,
	useResizeObserverState,
	VIEWPORT_POSITION_PX_DEFAULT,
	type ViewportPositionPx
} from "@react-library/common";

import { useRootViewportPositionPxContext } from "../root-viewport-position-px";

import { OverlayPortalProvider } from "./providers/overlay-portal-provider";
import { OverlayPortalViewportPositionPxProvider } from "./providers/overlay-portal-viewport-position-px-provider";
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
	const rootViewportPositionPx = useRootViewportPositionPxContext();
	const [overlayPortalDimensions] = useResizeObserverState(true, true, overlayPortalContainerElement, "border-box", ResizeObserverDebounce["100Ms"]);
	const [overlayPortalViewportPositionPx, setOverlayPortalViewportPositionPx] = useState<ViewportPositionPx>(VIEWPORT_POSITION_PX_DEFAULT);
	useEffect(
		() => {
			if (!overlayPortalContainerElement) setOverlayPortalViewportPositionPx(VIEWPORT_POSITION_PX_DEFAULT);
			else setOverlayPortalViewportPositionPx(resolveElementViewportPositionPx(overlayPortalContainerElement, rootViewportPositionPx));
		},
		[
			overlayPortalContainerElement,
			rootViewportPositionPx,
			overlayPortalDimensions
		]
	);

	return (
		<div
			ref={setOverlayPortalContainerElementCallback}
			style={OVERLAY_PORTAL_STYLE}
		>
			{
				!overlayPortalContainerElement ? <></> :
					<OverlayPortalProvider value={overlayPortalContainerElement}>
						<OverlayPortalViewportPositionPxProvider value={overlayPortalViewportPositionPx}>
							{props.children}
						</OverlayPortalViewportPositionPxProvider>
					</OverlayPortalProvider>
			}
		</div>
	);
}
