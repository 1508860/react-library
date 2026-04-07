import { Fragment, useCallback, useState } from "react";

import {
	Orientation,
	PositionStrategyInternal,
	resolvePositionStrategyInternalAll,
	type SizePx
} from "@react-library/common";
import {
	Modal,
	type ModalContentConfig,
	type ModalPositionStrategyInternal
} from "@react-library/components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentChildrenItem,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoSection,
	type DemoContentChildrenItemProps
} from "@react-library-demo/shared";

export function ReactLibraryComponentsModalDemo() {

	// Position strategy
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

	// Modal content config
	const [modalContentConfig] = useState<ModalContentConfig>(() => ({
		height: 300,
		width: 300
	}))

	// Modal content
	const [demoContentItems] = useState<Array<DemoContentChildrenItemProps>>(() => (
		modalPositionStrategies.map<DemoContentChildrenItemProps>(modalPositionStrategy => ({
			type: DemoContentChildrenItem.Button,
			action: () => setCurrentModalPositionStrategy(modalPositionStrategy),
			id: modalPositionStrategy.positionType,
			text: `Open modal in: ${modalPositionStrategy.positionType}`
		}))
	));

	return (
		<DemoSection title="Modal">
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Items}
				colourScheme={DemoContentColourScheme.Primary}
				height={500}
				includeRenderCounter={true}
				items={demoContentItems}
				justify={DemoContentJustify.Center}
				key="demo-content"
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				width="100%"
			/>
			{
				currentModalPositionStrategy ?
					<Modal
						backdrop={
							<DemoContent
								align={DemoContentAlign.Center}
								childrenType={DemoContentChildren.Any}
								colourScheme={DemoContentColourScheme.Tertiary}
								height="100%"
								justify={DemoContentJustify.Center}
								opacity={0.5}
								orientation={Orientation.Vertical}
								overflow={DemoContentOverflow.Auto}
								width="100%"
							/>
						}
						contentConfig={modalContentConfig}
						key="modal"
						positionStrategy={currentModalPositionStrategy}
					>
						<DemoContent
							align={DemoContentAlign.Center}
							childrenType={DemoContentChildren.Items}
							colourScheme={DemoContentColourScheme.Secondary}
							height="100%"
							includeRenderCounter={true}
							items={[{
								type: DemoContentChildrenItem.Button,
								action: resetCurrentModalPositionStrategy,
								id: 1,
								text: `Close`
							}]}
							justify={DemoContentJustify.Center}
							orientation={Orientation.Vertical}
							overflow={DemoContentOverflow.Auto}
							width="100%"
						/>
					</Modal> :
					<Fragment key="no-modal" />
			}
		</DemoSection>
	);
}
