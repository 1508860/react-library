import type { IChild, IIsFullWidth } from "@react-library/common";

import type { ModalFullChild } from "../../../types/modal-full-child.type";

/**
 * Props for modal full children container component
 */
export type ModalFullChildrenContainerProps = (
	Partial<IChild<ModalFullChild>> &
	Partial<IIsFullWidth<boolean>>
);
