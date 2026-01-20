import { iconContainerStyle } from "./styles/icon-container-style.function";
import { iconSvgStyle } from "./styles/icon-svg-style.function";
import type { IconSvgProps } from "./icon-svg-props.type";

/**
 * Component to handle icons as SVGs
 * @param props
 */
export function IconSvg(props: IconSvgProps) {
	return (
		<div style={iconContainerStyle(props.size)}>
			<svg
				style={iconSvgStyle(props.colour)}
				viewBox={props.data.viewBox}
				xmlns={props.data.namespace}
			>
				{props.data.paths.map(path =>
					<path
						d={path}
						key={path}
					/>
				)}
			</svg>
		</div>
	);
}
