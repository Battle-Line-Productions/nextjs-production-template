import React from "react";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";

export interface ButtonProps {
	id?: string;
	text: string;
	color: string;
	tooltip?: string;
	[x: string]: any;
}

const ButtonComponent: React.FC<ButtonProps> = ({ id, text, color, tooltip, ...props }) => {
	const renderTooltip = (props: any) => (
		<Tooltip id={`tooltip-${id}`} {...props}>
			{tooltip}
		</Tooltip>
	);

	return (
		<OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
			<Button id={id} style={{ backgroundColor: color }} {...props}>
				{text}
			</Button>
		</OverlayTrigger>
	);
};

export default ButtonComponent;
