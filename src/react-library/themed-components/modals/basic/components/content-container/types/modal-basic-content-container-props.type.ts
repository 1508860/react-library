import type { IChild, IIsFullWidth } from "@react-library/common";

import type { ModalBasicChild } from "../../../types/modal-basic-child.type";

/**
 * Props for modal basic content container component
 */
export type ModalBasicContentContainerProps = (
	Partial<IChild<ModalBasicChild>> &
	Partial<IIsFullWidth<boolean>>
);
