import { Center, Grid, GridItem, Image, Stack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import classes from "./ArtPage.module.css";

export function ArtPage() {
	const navRef = useRef<HTMLDivElement | null>(null);
	const [navHeight, setNavHeight] = useState<number>(0);

	useEffect(() => {
		if (navRef.current) {
			setNavHeight(navRef.current.offsetHeight);
		}
	}, []);

	return (
		<>
			<Stack
				className="main-content"
				style={{ paddingTop: navHeight + 32 + 112 }}
			>
				<Center>
					<Grid
						templateRows="repeat(2, 1fr)"
						templateColumns="repeat(6, 1fr)"
						gap={8}
					>
						<GridItem colSpan={2}>
							<ArtItem imageSrc="./art/desk_laptop_tiny.jpg" />
						</GridItem>
						<GridItem colSpan={2}>
							<ArtItem imageSrc="./art/christmas_donuts_tiny.jpg" />
						</GridItem>
						<GridItem colSpan={2}>
							<ArtItem imageSrc="./art/lighthouse_island_tiny.jpg" />
						</GridItem>
						<GridItem colSpan={3}>
							<ArtItem imageSrc="./art/modular_dungeon_tiny.jpg" />
						</GridItem>
					</Grid>
				</Center>
			</Stack>
		</>
	);
}

interface ArtItemProps {
	imageSrc: string;
}

export function ArtItem({ imageSrc }: ArtItemProps) {
	const boundingRef = useRef<DOMRect | null>(null);
	const divRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = (ev: {
		currentTarget: { getBoundingClientRect: () => DOMRect | null };
	}) => {
		boundingRef.current = ev.currentTarget.getBoundingClientRect();
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!boundingRef.current || !divRef.current) return;

		console.log("move");

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
			<div ref={divRef} className={classes.perspective}>
				<Image
					onMouseEnter={handleMouseEnter}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className={classes.item}
					src={imageSrc}
				/>
				<div className={classes.glare}></div>
			</div>
		</>
	);
}
