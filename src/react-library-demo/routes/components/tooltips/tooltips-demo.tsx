import { useCallback, useEffect, useState } from "react";

import {
	Orientation,
	PositionStrategyExternal,
	type ITooltipPositionStrategy
} from "@react-library/common";
import {
	Tooltip,
	useTooltipChildPropsContext,
	useTooltipContentCallbackContext,
	useTooltipShowCallbackContext,
	type TooltipPositionStrategiesExternal,
	type TooltipPositionStrategyExternal
} from "@react-library/components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

import { tooltipsDemoArrowContentStyle } from "./tooltips-demo-style.function";

export function ReactLibraryComponentsTooltipsDemo() {

	const [tooltipPositionStrategies] = useState<TooltipPositionStrategiesExternal>(() => [
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.BottomCenter, marginTop: 20 },
		{ arrowContent: TooltipDemoArrowContentRight, positionType: PositionStrategyExternal.BottomEnd, marginTop: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.BottomLeft, marginRight: 20, marginTop: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.BottomRight, marginLeft: 20, marginTop: 20 },
		{ arrowContent: TooltipDemoArrowContentLeft, positionType: PositionStrategyExternal.BottomStart, marginTop: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.LeftCenter, marginRight: 20 },
		{ arrowContent: TooltipDemoArrowContentRight, positionType: PositionStrategyExternal.LeftEnd, marginRight: 20 },
		{ arrowContent: TooltipDemoArrowContentLeft, positionType: PositionStrategyExternal.LeftStart, marginRight: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.RightCenter, marginLeft: 20 },
		{ arrowContent: TooltipDemoArrowContentLeft, positionType: PositionStrategyExternal.RightEnd, marginLeft: 20 },
		{ arrowContent: TooltipDemoArrowContentRight, positionType: PositionStrategyExternal.RightStart, marginLeft: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.TopCenter, marginBottom: 20 },
		{ arrowContent: TooltipDemoArrowContentLeft, positionType: PositionStrategyExternal.TopEnd, marginBottom: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.TopLeft, marginRight: 20, marginBottom: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.TopRight, marginLeft: 20, marginBottom: 20 },
		{ arrowContent: TooltipDemoArrowContentRight, positionType: PositionStrategyExternal.TopStart, marginBottom: 20 }
	]);

	return (
		<DemoSection title="Side Sheet - Standard">
			{tooltipPositionStrategies.map(tooltipPositionStrategy => (
				<DemoItem
					height={300}
					key={tooltipPositionStrategy.positionType}
					label={tooltipPositionStrategy.positionType}
					width={300}
				>
					<TooltipDemoContainer tooltipPositionStrategy={tooltipPositionStrategy} />
				</DemoItem>
			))}
		</DemoSection>
	);
}

function TooltipDemoContainer(props: ITooltipPositionStrategy<TooltipPositionStrategyExternal>) {
	return (
		<Tooltip
			overlayPortalMargin={20}
			positionStrategies={[props.tooltipPositionStrategy]}
			showBackdrop={true}
		>
			<TooltipDemoSubject />
		</Tooltip>
	);
}

function TooltipDemoSubject() {

	const tooltipChildProps = useTooltipChildPropsContext();
	const tooltipShowCallback = useTooltipShowCallbackContext();
	const handleOnClick = useCallback(() => tooltipShowCallback(true), [tooltipShowCallback]);
	const tooltipContentCallback = useTooltipContentCallbackContext();

	// Set tooltip content
	useEffect(() => tooltipContentCallback(<TooltipDemoContent />), [tooltipContentCallback]);

	return (
		<div ref={tooltipChildProps.ref}>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Text}
				colourScheme={DemoContentColourScheme.Primary}
				height={100}
				includeRenderCounter={true}
				justify={DemoContentJustify.Center}
				onClick={handleOnClick}
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				text="Content"
				width={100}
			/>
		</div>
	);
}

function TooltipDemoContent() {
	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Any}
			colourScheme={DemoContentColourScheme.Secondary}
			height={80}
			includeRenderCounter={true}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			width={80}
		/>
	);
}

const TooltipDemoArrowContentFull = () => <div style={tooltipsDemoArrowContentStyle(true, true)} />;
const TooltipDemoArrowContentLeft = () => <div style={tooltipsDemoArrowContentStyle(false, true)} />;
const TooltipDemoArrowContentRight = () => <div style={tooltipsDemoArrowContentStyle(true, false)} />;
