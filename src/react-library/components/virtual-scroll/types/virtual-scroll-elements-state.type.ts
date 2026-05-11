import type { IElementsInView, IItemRegister } from "@react-library/common";

import type { VirtualScrollElementsInView } from "./virtual-scroll-elements-in-view.type";
import type { VirtualScrollItemRegisterElementCallbacks } from "./virtual-scroll-item-register-element.type";


/**
 * Describes state of item elements registered as well as callbacks to register and unregister elements to be rendered
 */
export type VirtualScrollItemElementsState = (
	IElementsInView<VirtualScrollElementsInView> &
	IItemRegister<VirtualScrollItemRegisterElementCallbacks>
);
