import { Box, Image } from "@chakra-ui/react";
import { useRef } from "react";

import classes from "./HobbyItem.module.css";

interface ArtItemProps {
	alt: string;
	imageSrc: string;
}

export function HobbyItem({ alt, imageSrc }: ArtItemProps) {
	const boundingRef = useRef<DOMRect | null>(null);
	const divRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = (ev: {
		currentTarget: { getBoundingClientRect: () => DOMRect | null };
	}) => {
		boundingRef.current = ev.currentTarget.getBoundingClientRect();
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!boundingRef.current || !divRef.current) return;

		const x = e.clientX - boundingRef.current.left;
		const y = e.clientY - boundingRef.current.top;

		const xPercentage = x / boundingRef.current.width;
		const yPercentage = y / boundingRef.current.height;

		const xRotation = (xPercentage - 0.5) * 20;
		const yRotation = (0.5 - yPercentage) * 20;

		divRef.current.style.setProperty("--rx", `${yRotation}deg`);
		divRef.current.style.setProperty("--ry", `${xRotation}deg`);
		divRef.current.style.setProperty("--x", `${xPercentage * 100}%`);
		divRef.current.style.setProperty("--y", `${yPercentage * 100}%`);
	};

	const handleMouseLeave = () => {
		if (!divRef.current) return;

		divRef.current.style.setProperty("--rx", `0deg`);
		divRef.current.style.setProperty("--ry", `0deg`);
		boundingRef.current = null;
	};

	return (
		<>
			<Box>
				<div ref={divRef} className={classes.perspective}>
					<Image
						alt={alt}
						onMouseEnter={handleMouseEnter}
						onMouseMove={handleMouseMove}
						onMouseLeave={handleMouseLeave}
						className={classes.item}
						src={imageSrc}
					/>
					<div className={classes.glare}></div>
				</div>
			</Box>
		</>
	);
}
