import type { IChild, IChildrenSize } from "@react-library/common";

import type { ModalBasicChildSize } from "../../../types/modal-basic-child-size.type";
import type { ModalBasicChild } from "../../../types/modal-basic-child.type";

/**
 * Props for modal basic children container component
 */
export type ModalBasicChildrenContainerProps = (
	Partial<IChild<ModalBasicChild>> &
	IChildrenSize<ModalBasicChildSize>
);
