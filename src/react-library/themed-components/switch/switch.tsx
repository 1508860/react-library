import { HoverLayer } from "@react-library/components";
import { MaterialIconName } from "@react-library/material-icons";

import { SwitchContainer } from "./components/container";
import { SwitchIcon } from "./components/icon";
import { SwitchInput } from "./components/input";
import { SwitchLabel } from "./components/label";
import { SwitchThumb } from "./components/thumb";
import { SwitchTrack } from "./components/track";

import type { SwitchProps } from "./types/switch-props.type";

/**
 * Switch component
 */
export function Switch(props: SwitchProps) {

	return (
		<SwitchContainer {...props}>
			<SwitchLabel {...props} key="label" />
			<SwitchTrack {...props} key="track">
				<SwitchThumb {...props} key="thumb">
					<SwitchIcon
						iconName={MaterialIconName.CheckSmall}
						key={MaterialIconName.CheckSmall}
						showIcon={props.value}
					/>
					<SwitchIcon
						iconName={MaterialIconName.Close}
						key={MaterialIconName.Close}
						showIcon={!props.value && !props.isDisabled}
					/>
				</SwitchThumb>
				<HoverLayer key="hovered-layer" />
			</SwitchTrack>
			<SwitchInput {...props} key="input" />
		</SwitchContainer>
	);
}
