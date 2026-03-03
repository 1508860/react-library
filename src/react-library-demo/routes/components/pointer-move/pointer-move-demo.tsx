import { useCallback, useState } from "react";

import { Orientation } from "@react-library/common";
import { PointerMove, type PointerMoveOnChangeResult } from "@react-library/components";

import {
	DemoColumn,
	DemoColumnContainer,
	DemoContent,
	DemoContentChildren,
	DemoContentChildrenItem,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryComponentsPointerMoveDemo() {

	const [pointerMoveStart, setPointerMoveStart] = useState<PointerMoveOnChangeResult | undefined>(() => undefined);
	const [pointerMoveChange, setPointerMoveChange] = useState<PointerMoveOnChangeResult | undefined>(() => undefined);
	const [pointerMoveEnd, setPointerMoveEnd] = useState<PointerMoveOnChangeResult | undefined>(() => undefined);

	const handlePointerMoveOnChangeStart = useCallback(
		(result: PointerMoveOnChangeResult) => {
			setPointerMoveChange(undefined);
			setPointerMoveEnd(undefined);
			setPointerMoveStart(result);
		},
		[]
	);

	return (
		<DemoSection title="Pointer Move">
			<DemoColumnContainer width="100%">
				<DemoColumn weight={1}>
					<DemoContent
						childrenType={DemoContentChildren.Items}
						colourScheme={DemoContentColourScheme.Tertiary}
						height={500}
						includeRenderCounter={true}
						items={[
							{
								type: DemoContentChildrenItem.Text,
								id: 1,
								text: `Pointer Move Start - PageX = ${pointerMoveStart?.positionInitial.pageX}, PageY = ${pointerMoveStart?.positionInitial.pageY}`
							},
							{
								type: DemoContentChildrenItem.Text,
								id: 2,
								text: `Pointer Move - PageX = ${pointerMoveChange?.positionCurrent.pageX}, PageY = ${pointerMoveChange?.positionCurrent.pageY}`
							},
							{
								type: DemoContentChildrenItem.Text,
								id: 3,
								text: `Pointer Move End - PageX = ${pointerMoveEnd?.positionCurrent.pageX}, PageY = ${pointerMoveEnd?.positionCurrent.pageY}`
							}
						]}
						justify={DemoContentJustify.Center}
						orientation={Orientation.Vertical}
						width="100%"
					/>
				</DemoColumn>
				<DemoColumn weight={1}>
					<DemoContent
						childrenType={DemoContentChildren.Any}
						colourScheme={DemoContentColourScheme.Primary}
						height={500}
						includeRenderCounter={true}
						justify={DemoContentJustify.Center}
						orientation={Orientation.Vertical}
						width="100%"
					>
						<DemoContent
							childrenType={DemoContentChildren.Any}
							colourScheme={DemoContentColourScheme.Secondary}
							height={100}
							justify={DemoContentJustify.Center}
							orientation={Orientation.Vertical}
							width={100}
						>
							<PointerMove
								onChangeStart={handlePointerMoveOnChangeStart}
								onChange={setPointerMoveChange}
								onChangeEnd={setPointerMoveEnd}
							/>
						</DemoContent>
					</DemoContent>
				</DemoColumn>
			</DemoColumnContainer>
		</DemoSection>
	);
}
