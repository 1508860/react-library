import { Fragment, useCallback, useState } from "react";

import {
	Orientation,
	PositionStrategyInternal,
	resolvePositionStrategyInternalAll,
	useColourSchemeContext,
	type SizePx
} from "@react-library/common";
import {
	Modal,
	type ModalPositionStrategyInternal
} from "@react-library/components";

import {
	DemoContent,
	DemoContentChildren,
	DemoContentChildrenItem,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoSection,
	type DemoContentChildrenItemProps
} from "@react-library-demo/shared";

export function ReactLibraryComponentsModalDemo() {

	const colourScheme = useColourSchemeContext();

	const [modalPositionStrategies] = useState<Array<ModalPositionStrategyInternal>>(() => (
		Object.values(PositionStrategyInternal).map<ModalPositionStrategyInternal>(positionStrategyInternal => (
			resolvePositionStrategyInternalAll<SizePx, SizePx>(
				positionStrategyInternal,
				{
					marginHorizontal: 20,
					marginVertical: 20
				}
			)
		))
	));

	const [currentModalPositionStrategy, setCurrentModalPositionStrategy] = useState<ModalPositionStrategyInternal | undefined>(() => undefined);
	const resetCurrentModalPositionStrategy = useCallback(() => setCurrentModalPositionStrategy(undefined), []);

	const [demoContentItems] = useState<Array<DemoContentChildrenItemProps>>(() => (
		modalPositionStrategies.map<DemoContentChildrenItemProps>(modalPositionStrategy => ({
			type: DemoContentChildrenItem.Button,
			action: () => setCurrentModalPositionStrategy(modalPositionStrategy),
			id: modalPositionStrategy.positionType,
			text: `Open modal in: ${modalPositionStrategy.positionType}`
		}))
	));

	return (
		<>
			<DemoSection
				key="modal"
				title="Modal"
			>
				<DemoContent
					childrenType={DemoContentChildren.Items}
					colourScheme={DemoContentColourScheme.Primary}
					height={500}
					includeRenderCounter={true}
					items={demoContentItems}
					justify={DemoContentJustify.Center}
					key="demo-content"
					orientation={Orientation.Vertical}
					width="100%"
				/>
				{
					currentModalPositionStrategy ?
					<Modal
						backdropColour={colourScheme.backdrop.colour}
						key="modal"
						onDismiss={resetCurrentModalPositionStrategy}
						positionStrategy={currentModalPositionStrategy}
					>
						<DemoContent
							childrenType={DemoContentChildren.Items}
							colourScheme={DemoContentColourScheme.Secondary}
							height={300}
							includeRenderCounter={true}
							items={[{
								type: DemoContentChildrenItem.Button,
								action: resetCurrentModalPositionStrategy,
								id: 1,
								text: `Close`
							}]}
							justify={DemoContentJustify.Center}
							orientation={Orientation.Vertical}
							width={300}
						/>
					</Modal> :
					<Fragment key="no-modal" />
				}
			</DemoSection>
		</>
	);
}
