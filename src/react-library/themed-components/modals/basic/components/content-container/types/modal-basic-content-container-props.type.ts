import type { IChild, IChildrenSize, IIsFullWidth } from "@react-library/common";

import type { ModalBasicChildSize } from "../../../types/modal-basic-child-size.type";
import type { ModalBasicChild } from "../../../types/modal-basic-child.type";

/**
 * Props for modal basic content container component
 */
export type ModalBasicContentContainerProps = (
	Partial<IChild<ModalBasicChild>> &
	IChildrenSize<ModalBasicChildSize> &
	Partial<IIsFullWidth<boolean>>
);
