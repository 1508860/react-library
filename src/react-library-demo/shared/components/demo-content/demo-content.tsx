import { Fragment } from "react";

import { useFontContext, useRenderCounterRef } from "@react-library/common";

import { DemoContentChildrenItem } from "./enums/demo-content-children-item.type";
import { DemoContentChildren } from "./enums/demo-content-children.type";
import { demoContentStyle } from "./styles/demo-content-style.function";
import type { DemoContentChildrenItemProps } from "./types/demo-content-children-item-props.type";
import type { DemoContentProps } from "./types/demo-content-props.type";


export function DemoContent(props: DemoContentProps) {

	const font = useFontContext();
	const renderCounter = useRenderCounterRef();
	return (
		<div style={demoContentStyle(props, font)}>

			<DemoContentChildrenElement {...props} key="children" />

			{(
				props.includeRenderCounter ?
					<span key="render-counter">Render Count: {renderCounter}</span> :
					<Fragment key="no-render-counter" />
			)}

		</div>
	);
}

function DemoContentChildrenElement(props: DemoContentProps) {

	if (props.childrenType === DemoContentChildren.Items) return (
		<Fragment key={props.childrenType}>
			{props.items.map(item => <DemoContentItemElement {...item} key={item.id} />)}
		</ Fragment>
	);

	if (props.childrenType === DemoContentChildren.Text) return (
		<span key={props.childrenType}>
			{props.text}
		</span>
	);

	// Any
	return (
		props.children
	);
}

function DemoContentItemElement(props: DemoContentChildrenItemProps) {

	if (props.type === DemoContentChildrenItem.Button) return (
		<button key={`${props.type}-${props.id}`} onClick={props.action}>
			{props.text}
		</button>
	);

	// Text
	return (
		<span key={`${props.type}-${props.id}`}>
			{props.text}
		</span>
	);
}
